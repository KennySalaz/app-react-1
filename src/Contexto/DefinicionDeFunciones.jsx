export const initialState = {
    user:null
}


export const actionType = {
    USUARIO_LOGIN: 'USUARIO_LOGIN'
}

const DefinicionDeFunciones = (state, action) => {

    switch (action.type) {
        case actionType.USUARIO_LOGIN:
            return {
                ...state,
                user: action.user
            }
        default: return state
    }

}

export default DefinicionDeFunciones