import nodeReducer from './node';
import { constants } from '../action/node';

const { OPEN, CLOSE, GET_CHILD_IDS, GET_CHILD_IDS_SUCCESS, GET_CHILD_IDS_FAILURE } = constants;

describe('Node reducer', () => {
    test('when OPEN is passed, sets open to true for specific id', () => {
        const id = '31213';
        const actual = nodeReducer(undefined, {
            id,
            type: OPEN
        });
        expect(actual[id].open).toBe(true);
    });

    test('when CLOSE is passed, sets open to false for specific id', () => {
        const id = '31213';
        const actual = nodeReducer(undefined, {
            id,
            type: CLOSE
        });
        expect(actual[id].open).toBe(false);
    });

    test('when GET_CHILD_IDS is passed, sets inProgress to true for specific id', () => {
        const id = '31213';
        const actual = nodeReducer(undefined, {
            id,
            type: GET_CHILD_IDS
        });
        expect(actual[id].inProgress).toBe(true);
    });

    test('when GET_CHILD_IDS_SUCCESS is passed, sets inProgress to false and childIds for specific id', () => {
        const id = '31213';
        const childIds = [];
        const actual = nodeReducer(undefined, {
            id,
            type: GET_CHILD_IDS_SUCCESS,
            childIds
        });
        expect(actual[id].inProgress).toBe(false);
        expect(actual[id].childIds).toBe(childIds);
    });

    test('when GET_CHILD_IDS_FAILURE is passed, sets inProgress to false and childIds for specific id', () => {
        const id = '31213';
        const err = {};
        const actual = nodeReducer(undefined, {
            id,
            type: GET_CHILD_IDS_FAILURE,
            err
        });
        expect(actual[id].inProgress).toBe(false);
        expect(actual[id].err).toBe(err);
    });

    describe('doesn\'t modify any existing properties for node', () => {
        const id = '12312312';
        const initialState = {
            [id]: {
                ramainSame: {}
            }
        };
        const expectToRemainTheSame = state => {
            expect(state[id].ramainSame).toBe(initialState[id].ramainSame);
        };

        [
            OPEN,
            CLOSE,
            GET_CHILD_IDS,
            GET_CHILD_IDS_SUCCESS,
            GET_CHILD_IDS_FAILURE
        ]
        .forEach(type => {
            test(`${type} action`, () => {
                const actual = nodeReducer(initialState, {
                    id,
                    type
                });
                expectToRemainTheSame(actual);
            });
        });
        
    });
});
