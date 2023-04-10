
const initialState = {
    restaurants: []
}

const getReducer = (state=initialState, action) =>{
    if (action.type==="GET_RES"){
        return {...state, restaurants: action.payload}
    }else if (action.type === "GET_RES_SEARCH"){
        return {...state, restaurants: action.payload}
    }

    return state
}

export default getReducer;