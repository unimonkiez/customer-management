const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TODO:
        //     return [{
        //         id: (state.length === 0) ? 0 : state[0].id + 1,
        //         marked: false,
        //         text: action.text
        //     }, ...state];
        default:
            return state;
    }
}