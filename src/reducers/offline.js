const initialState = {
    timer: 0
};

const offline = (state = initialState, action) => {
    switch (action.type) {
        case 'Offline/SCHEDULE_RETRY':
            return {
                ...state,
                timer: action.payload.delay / 1000
            };
        case 'TICK':
            return {
                ...state,
                timer: state.timer === 0 ? 0 : state.timer - 1
            };
        default:
            return state
    }
}

export default offline
