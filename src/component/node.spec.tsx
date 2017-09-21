import * as React from 'react';
import Node from './node';
import { shallow } from 'enzyme';
import * as ShallowRenderer from 'react-test-renderer/shallow';

const domTestSelectors = {
    title: '[data-unittest-id="title"]',
    upperSection: '[data-unittest-id="upper-section"]'
};

describe('Node component', () => {
    test('renders without any props', () => {
        const node = shallow(
            <Node />
        );
    });
    test('renders without any props', () => {
        const titleMock = 'uv';
        const node = shallow(
            <Node title={titleMock} />
        );
        expect(node.find(domTestSelectors.title).text()).toBe(titleMock);
    });
    test('renders children when isOpen is true', () => {
        const idMock = '12332122';
        const node = shallow(
            <Node isOpen>
                <span id={idMock} />
            </Node>
        );
        expect(node.find(`#${idMock}`).length).toBe(1);
    });
    test('doesn\'t render children when isOpen is false', () => {
        const idMock = '12332122';
        const node = shallow(
            <Node isOpen={false}>
                <span id={idMock} />
            </Node>
        );
        expect(node.find(`#${idMock}`).length).toBe(0);
    });
    test('doesn\'t children when not supplied isOpen', () => {
        const idMock = '12332122';
        const node = shallow(
            <Node>
                <span id={idMock} />
            </Node>
        );
        expect(node.find(`#${idMock}`).length).toBe(0);
    });
    test('clicking upper section will call onIsOpenChange', () => {
        const cb = jest.fn();
        const node = shallow(
            <Node onIsOpenChange={cb} />
        );
        expect(cb).toHaveBeenCalledTimes(0);
        node.find(domTestSelectors.upperSection).simulate('click');
        expect(cb).toHaveBeenCalledTimes(1);
    });
    test('clicking upper section be ok even if onIsOpenChange isn\'t supplied', () => {
        const node = shallow(
            <Node />
        );
        node.find(domTestSelectors.upperSection).simulate('click');
    });
    describe('has certain classes for diffrent props', () => {
        const propsVariations = [
            {
                isOpen: true
            },
            {
                isOpen: false
            }
        ];
        propsVariations.forEach(props => {
            it(`when isOpen is ${props.isOpen}`, () => {
                const renderer = ShallowRenderer.createRenderer();
                const component = renderer.render(
                <Node {...props}>
                    contnet
                </Node>
                );
                expect(renderer.getRenderOutput()).toMatchSnapshot();
            });
        });
    })
});