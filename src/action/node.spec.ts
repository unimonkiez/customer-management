import actions, { constants } from './node';

const {
    open,
    close,
    getChildIds,
    getChildIdsSuccess,
    getChildIdsFailure
} = actions;

describe('Node actions', () => {
    const id = {};
    test('has open function that returns given id and type OPEN', () => {
        const actual = open(id);
        expect(actual.id).toBe(id);
        expect(actual.type).toBe(constants.OPEN);
    });
    test('has open function that returns given id and type OPEN', () => {
        const actual = close(id);
        expect(actual.id).toBe(id);
        expect(actual.type).toBe(constants.CLOSE);
    });
    test('has open function that returns given id and type OPEN', () => {
        const actual = getChildIds(id);
        expect(actual.id).toBe(id);
        expect(actual.type).toBe(constants.GET_CHILD_IDS);
    });
    test('has open function that returns given id and type OPEN', () => {
        const childIds = {};
        const actual = getChildIdsSuccess(id, childIds);
        expect(actual.id).toBe(id);
        expect(actual.childIds).toBe(childIds);
        expect(actual.type).toBe(constants.GET_CHILD_IDS_SUCCESS);
    });
    test('has open function that returns given id and type OPEN', () => {
        const err = {};
        const actual = getChildIdsFailure(id, err);
        expect(actual.id).toBe(id);
        expect(actual.err).toBe(err);
        expect(actual.type).toBe(constants.GET_CHILD_IDS_FAILURE);
    });
});