const initialState = {
    userLogged: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ACCESS_USER':
            return {
                ...state,
                userLogged: action.payload
            }
        case 'LOGOUT_USER':
        localStorage.clear()
            return {
                userLogged: null
            }

        default:
            return state
    }
}

export default authReducer;