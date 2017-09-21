import { ActionCreatorsMapObject } from 'redux';

export const constants = {
    OPEN: 'NODE_OPEN',
    CLOSE: 'NODE_CLOSE',
    GET_CHILD_IDS: 'NODE_GET_CHILD_IDS',
    GET_CHILD_IDS_SUCCESS: 'NODE_GET_CHILD_IDS_SUCCESS',
    GET_CHILD_IDS_FAILURE: 'NODE_GET_CHILD_IDS_FAILURE'
};

export default {
    open: id => ({
        type: constants.OPEN,
        id
    }),

    close: id => ({
        type: constants.CLOSE,
        id
    }),

    getChildIds: id => ({
        type: constants.GET_CHILD_IDS,
        id
    }),

    getChildIdsSuccess: (id, childIds) => ({
        type: constants.GET_CHILD_IDS_SUCCESS,
        id,
        childIds
    }),

    getChildIdsFailure: (id, err) => ({
        type: constants.GET_CHILD_IDS_FAILURE,
        id,
        err
    })
}
