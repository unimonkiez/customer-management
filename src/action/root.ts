import { ActionCreatorsMapObject } from 'redux';

export const constants = {
    GET_ID: 'ROOT_GET_ID',
    GET_ID_SUCCESS: 'ROOT_GET_ID_SUCCESS',
    GET_ID_FAILURE: 'ROOT_GET_ID_FAILURE'
};

export default {
    getId: () => ({
        type: constants.GET_ID
    }),

    getIdSuccess: id => ({
        type: constants.GET_ID_SUCCESS,
        id
    }),

    getIdFailure: err => ({
        type: constants.GET_ID_FAILURE,
        err
    })
}
