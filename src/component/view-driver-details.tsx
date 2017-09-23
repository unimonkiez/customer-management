import * as React from 'react';

const { Component } = React;

interface props {
    name?: string,
    phone?: string,
    email?: string
}

export default class ViewDriverDetails extends Component<props> {
    render() {
        const { name, phone, email } = this.props;
        return (
            <div>
                <div data-unittest-id="name">
                    {name}
                </div>
                <div data-unittest-id="phone">
                    {phone}
                </div>
                <div data-unittest-id="email">
                    {email}
                </div>
            </div>
        );
    }
}