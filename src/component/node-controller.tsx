import * as React from 'react';
import Node from './node';

const { Component } = React;

interface props {
    id: String
}

export default class NodeController extends Component<props> {
    render() {
        const { id } = this.props;

        return (
            <Node title={id} />
        );
    }
}
