import * as React from 'react';
import Node from './node';
import { shallow } from 'enzyme';
import * as ShallowRenderer from 'react-test-renderer/shallow';

const domTestSelectors = {
    title: '[data-unittest-id="title"]'
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