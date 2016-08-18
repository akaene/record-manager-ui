'use strict';

import React from "react";
import {Button, Panel} from "react-bootstrap";
import {FormattedMessage} from "react-intl";

import Authentication from "../../utils/Authentication";
import I18nWrapper from "../../i18n/I18nWrapper";
import injectIntl from "../../utils/injectIntl";
import Input from "../Input";
import Mask from "../Mask";
import Utils from "../../utils/Utils";

/**
 * Clinic detail. Editable only for admins.
 */
class Clinic extends React.Component {
    static propTypes = {
        clinic: React.PropTypes.object,
        loading: React.PropTypes.bool,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.i18n = this.props.i18n;
    }

    _onChange = (e) => {
        var change = {};
        change[e.target.name] = e.target.value;
        this.props.onChange(change);
    };

    render() {
        if (this.props.loading) {
            return <Mask text={this.i18n('please-wait')}/>;
        }
        var clinic = this.props.clinic;
        return <Panel header={<h3>{this.i18n('clinic.panel-title')}</h3>} bsStyle='primary'>
            <form className='form-horizontal' style={{margin: '0.5em 0 0 0'}}>
                <div className='row'>
                    <div className='col-xs-6'>
                        <Input type='text' name='name' label={this.i18n('clinic.name')}
                               value={clinic.name}
                               labelClassName='col-xs-4' wrapperClassName='col-xs-8' onChange={this._onChange}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-6'>
                        <Input type='text' name='emailAddress' label={this.i18n('clinic.email')}
                               value={clinic.emailAddress}
                               labelClassName='col-xs-4' wrapperClassName='col-xs-8' onChange={this._onChange}/>
                    </div>
                </div>
                {this._renderAddedDate()}
                {this._renderButtons()}
            </form>
        </Panel>;
        // TODO Render panel with doctors of the clinic
        // TODO Render also a panel with patients of the clinic
    }

    _renderAddedDate() {
        var clinic = this.props.clinic;
        if (clinic.isNew || !clinic.dateCreated) {
            return null;
        }
        var created = Utils.formatDate(clinic.dateCreated);
        return <div className='row'>
            <div className='col-xs-6'>
                <div className='notice-small'>
                    <FormattedMessage id='clinic.created' values={{date: created}}/>
                </div>
            </div>
        </div>
    }

    _renderButtons() {
        if (!Authentication.isAdmin()) {
            return <div className='col-xs-1'>
                <Button bsStyle='primary' bsSize='small' onClick={this.props.onCancel}>{this.i18n('back')}</Button>
            </div>
        } else {
            return <div style={{margin: '1em 0em 0em 0em', textAlign: 'center'}}>
                <Button bsStyle='success' bsSize='small' ref='submit'
                        disabled={this.props.loading}
                        onClick={this.props.onSave}>{this.i18n('save')}</Button>
                <Button bsStyle='link' bsSize='small' onClick={this.props.onCancel}>{this.i18n('cancel')}</Button>
            </div>;
        }
    }
}

export default injectIntl(I18nWrapper(Clinic));
