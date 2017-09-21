import * as React from 'react';
import NodeController from './node-controller';
import Node from './node';
import { shallow } from 'enzyme';

describe('Node controller component', () => {
    test('renders with given id', () => {
        const nodeController = shallow(
            <NodeController id="123" />
        );
    });
    test('renders Node with title as the id', () => {
        const titleMock = '123321';
        const nodeController = shallow(
            <NodeController id={titleMock} />
        );
        const node = nodeController.find(Node);
        expect(node.props().title).toBe(titleMock);
    });
    test('when given childIds renders NodeController for each id only when open', () => {
        const childIds = [
            '123',
            '1234',
            '1235',
            '1236'
        ];
        const nodeController = shallow(
            <NodeController id="someId" childIds={childIds} isOpen />
        );

        const nodeControllers = nodeController.find(NodeController);

        expect(nodeControllers.length).toBe(childIds.length);
    });
    test('when given childIds and isOpen is false doesn\'t render NodeController', () => {
        const childIds = [
            '1236'
        ];
        const nodeController = shallow(
            <NodeController id="someId" childIds={childIds} isOpen={false} />
        );

        const nodeControllers = nodeController.find(NodeController);

        expect(nodeControllers.length).toBe(0);
    });
    test('when isOpen and isGetChildIdsInProgress renders string to node children', () => {
        const nodeController = shallow(
            <NodeController id="someId" isOpen isGetChildIdsInProgress />
        );

        const node = nodeController.find(Node);

        expect(node.children().text()).toBe('In progress..');
    });
    test('calls getChildIds when attempting to open node and no childIds given', () => {
        const getChildIds = jest.fn();
        const nodeController = shallow(
            <NodeController id="someId" getChildIds={getChildIds} />
        );
        const node = nodeController.find(Node);
        node.props().onOpen();
        expect(getChildIds).toHaveBeenCalledTimes(1);
    });
    test('doesn\'t calls getChildIds when attempting to open node and childIds is given', () => {
        const getChildIds = jest.fn();
        const nodeController = shallow(
            <NodeController id="someId" getChildIds={getChildIds} childIds={[]} />
        );
        const node = nodeController.find(Node);
        node.props().onOpen();
        expect(getChildIds).toHaveBeenCalledTimes(0);
    });
    test('calls onOpen when attempting to open node', () => {
        const onOpen = jest.fn();
        const nodeController = shallow(
            <NodeController id="someId" isOpen={false} onOpen={onOpen} />
        );
        const node = nodeController.find(Node);
        node.props().onOpen();
        expect(onOpen).toHaveBeenCalledTimes(1);
    });
    test('doesn\'t calls getChildIds when attempting to open node and isGetChildIdsInProgress is true', () => {
        const getChildIds = jest.fn();
        const nodeController = shallow(
            <NodeController id="someId" getChildIds={getChildIds} isGetChildIdsInProgress />
        );
        const node = nodeController.find(Node);
        node.props().onOpen();
        expect(getChildIds).toHaveBeenCalledTimes(0);
    });
});