import * as React from 'react';
import { undecorated as NodeTree} from './node-tree';
import Node from './node';
import { shallow } from 'enzyme';

describe('Node controller component', () => {
    test('renders with given id', () => {
        const nodeController = shallow(
            <NodeTree id="123" />
        );
    });
    test('renders Node with title as the id', () => {
        const titleMock = '123321';
        const nodeController = shallow(
            <NodeTree id={titleMock} />
        );
        const node = nodeController.find(Node);
        expect(node.props().title).toBe(titleMock);
    });
    // test('when given childIds renders NodeTree for each id only when open', () => {
    //     const childIds = [
    //         '123',
    //         '1234',
    //         '1235',
    //         '1236'
    //     ];
    //     const nodeController = shallow(
    //         <NodeTree id="someId" childIds={childIds} isOpen />
    //     );

    //     const nodeControllers = nodeController.find(NodeTree);

    //     expect(nodeControllers.length).toBe(childIds.length);
    // });
    test('when given childIds and isOpen is false doesn\'t render NodeTree', () => {
        const childIds = [
            '1236'
        ];
        const nodeController = shallow(
            <NodeTree id="someId" childIds={childIds} isOpen={false} />
        );

        const nodeControllers = nodeController.find(NodeTree);

        expect(nodeControllers.length).toBe(0);
    });
    test('when isOpen and isFetchingChildIds renders string to node children', () => {
        const nodeController = shallow(
            <NodeTree id="someId" isOpen isFetchingChildIds />
        );

        const node = nodeController.find(Node);

        expect(node.children().text()).toBe('In progress..');
    });
    test('calls onIsOpenChange when attempting to open node', () => {
        const onIsOpenChange = jest.fn();
        const nodeController = shallow(
            <NodeTree id="someId" isOpen={false} onIsOpenChange={onIsOpenChange} />
        );
        const node = nodeController.find(Node);
        node.props().onIsOpenChange();
        expect(onIsOpenChange).toHaveBeenCalledTimes(1);
    });
});