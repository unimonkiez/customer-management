export const contants = {
    OPEN: 0,
    CLOSE: 1,
    GET_CHILD_IDS: 2,
    GET_CHILD_IDS_SUCCESS: 4,
    GET_CHILD_IDS_FAILURE: 8
};

export const open = id => ({
    type: contants.OPEN,
    id
});

export const close = id => ({
    type: contants.CLOSE,
    id
});

export const getChildIds = id => ({
    type: contants.GET_CHILD_IDS,
    id
});

export const getChildIdsSuccess = (id, childIds) => ({
    type: contants.GET_CHILD_IDS_SUCCESS,
    id,
    childIds
});

export const getChildIdsFailure = (id, err) => ({
    type: contants.GET_CHILD_IDS_FAILURE,
    id,
    err
});
