import * as React from 'react';
import './edit-driver-details.css.js';

const { Component } = React;

interface props {
    name?: string,
    onNameChange?: Function,
    onNameValidity?: Function,
    phone?: string,
    onPhoneChange?: Function,
    email?: string,
    onEmailChange?: Function,
}

export default class EditDriverDetails extends Component<props> {
    render() {
        return (
            <div className="edit-driver-details">
                {this.renderName()}
                {this.renderPhone()}
                {this.renderEmail()}
            </div>
        );
    }
    private renderName() {
        const { name } = this.props;
        return EditDriverDetails.renderInput({
            title: 'Name',
            value: name,
            onChange: e => { this.handleNameChange(e); },
            unitTestId: 'name'
        });
    }
    private renderPhone() {
        const { phone } = this.props;
        return EditDriverDetails.renderInput({
            title: 'Phone',
            value: phone,
            onChange: e => { this.handlePhoneChange(e); },
            unitTestId: 'phone'
        });
    }
    private renderEmail() {
        const { email } = this.props;
        return EditDriverDetails.renderInput({
            title: 'Email',
            value: email,
            onChange: e => { this.handleEmailChange(e); },
            unitTestId: 'email'
        });
    }
    private static renderInput({ title, value, onChange, unitTestId }) {
        return (
            <label >
                <div>
                    {title}:
                </div>
                <input
                    type="text"
                    data-unittest-id={unitTestId}
                    value={value}
                    onChange={onChange}
                />
            </label>
        );
    }
    private handleNameChange(e) {
        const { onNameChange } = this.props;

        if (onNameChange) {
            onNameChange(e.target.value);
        }
    }
    private handlePhoneChange(e) {
        const { onPhoneChange } = this.props;

        if (onPhoneChange) {
            onPhoneChange(e.target.value);
        }
    }
    private handleEmailChange(e) {
        const { onEmailChange } = this.props;

        if (onEmailChange) {
            onEmailChange(e.target.value);
        }
    }
}