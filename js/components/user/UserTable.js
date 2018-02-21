'use strict';

import React from "react";
import {Button, Table} from "react-bootstrap";
import DeleteItemDialog from "../DeleteItemDialog";
import injectIntl from "../../utils/injectIntl";
import I18nWrapper from "../../i18n/I18nWrapper";
import Routes from "../../utils/Routes";
import UserRow from "./UserRow";

class UserTable extends React.Component {
    static propTypes = {
        users: React.PropTypes.array.isRequired,
        handlers: React.PropTypes.object.isRequired,
        userDeleted: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.i18n = this.props.i18n;
        this.state = {
            showDialog: false,
            selectedUser: null
        }
    }

    _onDelete = (user) => {
        this.setState({showDialog: true, selectedUser: user});
    };

    _onCancelDelete = () => {
        this.setState({showDialog: false, selectedUser: null});
    };

    _onSubmitDelete = () => {
        this.props.handlers.onDelete(this.state.selectedUser);
        this.setState({showDialog: false, selectedUser: null});
    };

    render() {
        return <div>
            <DeleteItemDialog onClose={this._onCancelDelete} onSubmit={this._onSubmitDelete}
                              show={this.state.showDialog} item={this.state.selectedUser}
                              itemLabel={this._getDeleteLabel()}/>
            <Table responsive striped bordered condensed hover>
                {this._renderHeader()}
                <tbody>
                {this._renderUsers()}
                </tbody>
            </Table>
        </div>;
    }

    _getDeleteLabel() {
        const user = this.state.selectedUser;
        return user ? user.firstName + ' ' + user.lastName : '';
    }

    _renderHeader() {
        return <thead>
        <tr>
            <th className='col-xs-3 col-sm-3 col-md-3 content-center'>{this.i18n('name')}</th>
            <th className='col-xs-2 col-sm-2 col-md-2 content-center'>{this.i18n('login.username')}</th>
            <th className='col-xs-3 col-sm-2 col-md-3 content-center'>{this.i18n('institution.name')}</th>
            <th className='col-xs-2 col-sm-2 col-md-2 content-center'>{this.i18n('users.email')}</th>
            <th className='col-xs-2 col-sm-3 col-md-2 content-center'>{this.i18n('actions')}</th>
        </tr>
        </thead>;
    }

    _renderUsers() {
        const users = this.props.users,
            onEdit = this.props.handlers.onEdit,
            userDeleted = this.props.userDeleted;
        let rows = [];
        for (let i = 0, len = users.length; i < len; i++) {
            rows.push(<UserRow key={users[i].username} user={users[i]} onEdit={onEdit} onDelete={this._onDelete}
                               deletionLoading={!!(userDeleted.fetching && userDeleted.username === users[i].username)}/>);
        }
        return rows;
    }
}

export default injectIntl(I18nWrapper(UserTable));
