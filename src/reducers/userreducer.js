//Define initial value of user date/state
export const initalUserState = null;

export const userReducer = (state= initalUserState, action) =>{
    if(action.type == "LOGIN"){
        return action.payload;
    }
    if(action.type == "LOGOUT"){
        return initalUserState;
    }
    else{
        return state;
    }
}