import * as React from 'react';
import NodeTree from './node-tree';
import TreeMiddleware from '../middleware/tree';

const { Component } = React;

interface props {
    rootId: string,
    isFetchingRootId: boolean
}

export const undecorated = class App extends Component<props> {
    render() {
        const { rootId, isFetchingRootId } = this.props;

        return (
            <div>
                Tree:
                {rootId && <NodeTree id={rootId} />}
                {isFetchingRootId && 
                <div>
                    Loading tree
                </div>
                }
            </div>
        )
    }
}

export default TreeMiddleware(undecorated);