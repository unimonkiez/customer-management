import { constants } from '../action/root';

const { GET_ID, GET_ID_SUCCESS, GET_ID_FAILURE } = constants;

const initialState = {
    id: undefined,
    err: undefined,
    inProgress: false
};

export default (state = initialState, action) => {
    const { id, type, err } = action;

    switch (type) {
        
        case GET_ID: {
            return {
                ...state,
                inProgress: true
            }
        }
        case GET_ID_SUCCESS: {
            return {
                ...state,
                inProgress: false,
                id
            }
        }
        case GET_ID_FAILURE: {
            return {
                ...state,
                inProgress: false,
                err
            }
        }
        default:
            return state;
    }
}