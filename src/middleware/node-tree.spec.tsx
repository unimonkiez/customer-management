import NodeTreeMiddleware from './node-tree';
import * as reactRedux from 'react-redux';
import { bindActionCreators } from 'redux';
import * as nodeActions from '../action/node';

describe('NodeTree middleware', () => {
    let mocks;
    beforeEach(() => {
        mocks = {
            connect: {
                original: undefined,
                mock: undefined,
                res: undefined,
                chainRes: {}
            },
            bindActionCreators: {
                original: undefined,
                mock: undefined,
                res: {}
            },
            nodeActions: {

            }
        };
        mocks.connect.original = reactRedux.connect;
        mocks.connect.res = jest.fn().mockReturnValue(mocks.connect.chainRes);
        mocks.connect.mock = jest.fn().mockReturnValue(mocks.connect.res);
        reactRedux.connect = mocks.connect.mock;
    });
    afterEach(() => {
        reactRedux.connect = mocks.connect.original;
    });
    test('returns connect res', () => {
        const actual = NodeTreeMiddleware('something');
        expect(actual).toBe(mocks.connect.chainRes);
    });
    // test('connect is res is called with the value passed (hoc behavior)', () => {
    //     const value = {};
    //     NodeTreeMiddleware(value);
    //     expect(mocks.connect.res.mock.calls[0][0]).toBe(value);
    // });
    // test('maps isOpen from store.node[id].open', () => {
    //     const props = {
    //         id: '123'
    //     };
    //     const store = {
    //         node: {
    //             bb: {},
    //             [props.id]: {
    //                 open: {}
    //             }
    //         }
    //     };
    //     NodeTreeMiddleware('something');
    //     const actual = mocks.connect.mock.mock.calls[0][0](store, props);
    //     expect(actual.isOpen).toBe(store.node[props.id].open);
    // });

    // test('calls getChildIds when attempting to open node and no childIds given', () => {
    //     const getChildIds = jest.fn();
    //     const nodeController = shallow(
    //         <NodeController id="someId" getChildIds={getChildIds} />
    //     );
    //     const node = nodeController.find(Node);
    //     node.props().onOpen();
    //     expect(getChildIds).toHaveBeenCalledTimes(1);
    // });
    // test('doesn\'t calls getChildIds when attempting to open node and childIds is given', () => {
    //     const getChildIds = jest.fn();
    //     const nodeController = shallow(
    //         <NodeController id="someId" getChildIds={getChildIds} childIds={[]} />
    //     );
    //     const node = nodeController.find(Node);
    //     node.props().onOpen();
    //     expect(getChildIds).toHaveBeenCalledTimes(0);
    // });
    // test('doesn\'t calls getChildIds when attempting to open node and isGetChildIdsInProgress is true', () => {
    //     const getChildIds = jest.fn();
    //     const nodeController = shallow(
    //         <NodeController id="someId" getChildIds={getChildIds} isGetChildIdsInProgress />
    //     );
    //     const node = nodeController.find(Node);
    //     node.props().onOpen();
    //     expect(getChildIds).toHaveBeenCalledTimes(0);
    // });
});