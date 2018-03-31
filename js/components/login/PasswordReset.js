'use strict';

import React from "react";
import {Alert, Button, Form, Panel} from "react-bootstrap";
import HorizontalInput from "../HorizontalInput";
import I18nWrapper from "../../i18n/I18nWrapper";
import injectIntl from "../../utils/injectIntl";
import {transitionTo, transitionToWithOpts} from "../../utils/Routing";
import {Routes} from "../../utils/Routes";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {passwordReset} from "../../actions/AuthActions";

class PasswordReset extends React.Component {
    constructor(props) {
        super(props);
        this.i18n = this.props.i18n;
        this.state = {
            email: '',
            alertVisible: false
        }
    }

    componentDidMount() {
        this.emailField.focus();
    }

    onChange = (e) => {
        let state = this.state;
        state[e.target.name] = e.target.value;
        state.alertVisible = false;
        this.setState(state);
    };

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.resetPassword();
        }
    };

    resetPassword = () => {
        this.setState({alertVisible: true});
        this.props.passwordReset(this.state.email);
    };

    renderAlert() {
        return this.state.alertVisible ? <Alert bsStyle='success' bsSize='small'>
            <div>{this.i18n('login.reset-password-alert')}</div>
        </Alert> : null;
    }

    render() {
        return(<Panel header={<span>{this.i18n('login.forgot-your-password')}</span>} bsStyle='info' className="login-panel">
            <Form horizontal>
                {this.renderAlert()}
                <HorizontalInput type='email' name='email' ref={(input) => { this.emailField = input; }}
                       label={this.i18n('login.email')} value={this.state.email}
                       onChange={this.onChange} labelWidth={3} onKeyPress={this.onKeyPress}
                       inputWidth={9}/>
                <div className="login-buttons">
                    <Button bsStyle='success' onClick={this.resetPassword}
                            disabled={this.state.mask}>{this.i18n('login.reset-password')}</Button>
                    <Button bsStyle='link'
                            onClick={() => transitionTo(Routes.login)}
                            disabled={this.state.mask}>{this.i18n('login.back-to-login')}</Button>
                </div>
            </Form>
        </Panel>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(I18nWrapper(PasswordReset)));

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        passwordReset: bindActionCreators(passwordReset, dispatch)

    }
}