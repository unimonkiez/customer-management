import * as React from 'react';
import Node from './node';

const { Component } = React;

interface props {
    id: string,
    childIds?: string[],
    getChildIds?: Function,
    isGetChildIdsInProgress?: boolean,
    isOpen?: boolean,
    onOpen?: Function
}

export default class NodeController extends Component<props> {
    render() {
        const { id, isOpen } = this.props;

        return (
            <Node title={id} isOpen={isOpen} onOpen={() => this.handleOpen()}>
                {this.renderNodeContent()}
            </Node>
        );
    }

    renderNodeContent() {
        const { isOpen, childIds, isGetChildIdsInProgress } = this.props;

        if (isOpen) {
            if (childIds) {
                return childIds.map(childId => (
                    <NodeController key={childId} id={childId} />
                ))
            } else if (isGetChildIdsInProgress) {
                return 'In progress..';
            }
        } else {
            return null;
        }
    }

    handleOpen() {
        const { isOpen, childIds, getChildIds, isGetChildIdsInProgress, onOpen } = this.props;

        if (!isOpen && !childIds && !isGetChildIdsInProgress && getChildIds) {
            getChildIds();
        }
        if (onOpen) {
            onOpen();
        }
    }
}
