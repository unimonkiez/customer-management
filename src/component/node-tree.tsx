import * as React from 'react';
import Node from './node';
import NodeTreeMiddleware from '../middleware/node-tree';

const { Component } = React;

interface props {
    id: string,
    childIds?: string[],
    getChildIds?: Function,
    isFetchingChildIds?: boolean,
    isOpen?: boolean,
    onIsOpenChange?: Function
}

export const undecorated = class NodeControllerUndecorated extends Component<props> {
    render() {
        const { id, isOpen, onIsOpenChange } = this.props;

        return (
            <Node title={id} isOpen={isOpen} onIsOpenChange={onIsOpenChange}>
                {this.renderNodeContent()}
            </Node>
        );
    }

    renderNodeContent() {
        const { isOpen, childIds, isFetchingChildIds } = this.props;

        if (isOpen) {
            if (childIds) {
                return childIds.map(childId => (
                    <NodeController key={childId} id={childId} />
                ))
            } else if (isFetchingChildIds) {
                return 'In progress..';
            }
        } else {
            return null;
        }
    }
}

const NodeController = NodeTreeMiddleware(undecorated);

export default NodeController;
