
const initialState = {
    restaurants: [],
    menuList:[],
    cartItems:[]
}

const getReducer = (state=initialState, action) =>{
    if (action.type==="GET_RES"){
        return {...state, restaurants: action.payload}
    }else if (action.type === "GET_RES_SEARCH"){
        return {...state, restaurants: action.payload}
    }else if(action.type === "GET_MENU"){
        return {...state, menuList: action.payload}
    }else if(action.type === "GET_FROM_CART"){
        return {...state, cartItems: action.payload}
    }

    return state
}

export default getReducer;