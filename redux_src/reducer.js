const INITIAL_STATE = {
    action: {
        data: 0
    }
};

const itemReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case "STORE_ITEM":
            return { prevState, action }
        default:
            return prevState
    }
}

export default itemReducer