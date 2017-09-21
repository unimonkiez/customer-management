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
});