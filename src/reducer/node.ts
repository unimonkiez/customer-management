import { constants } from '../action/node';

const { OPEN, CLOSE, GET_CHILD_IDS, GET_CHILD_IDS_SUCCESS, GET_CHILD_IDS_FAILURE } = constants;

const initialState = {};

export default (state = initialState, action) => {
    const { id, type, childIds, err } = action;

    switch (type) {
        case OPEN: {
            return {
                ...state,
                [id]: {
                    ...state[id],
                    open: true
                }
            }
        }
        case CLOSE: {
            return {
                ...state,
                [id]: {
                    ...state[id],
                    open: false
                }
            }
        }
        case GET_CHILD_IDS: {
            return {
                ...state,
                [id]: {
                    ...state[id],
                    inProgress: true
                }
            }
        }
        case GET_CHILD_IDS_SUCCESS: {
            return {
                ...state,
                [id]: {
                    ...state[id],
                    inProgress: false,
                    childIds
                }
            }
        }
        case GET_CHILD_IDS_FAILURE: {
            return {
                ...state,
                [id]: {
                    ...state[id],
                    inProgress: false,
                    err
                }
            }
        }
        default:
            return state;
    }
}