export const authReducer =(state = {auth:null,auth_error:null},action)=>{
    switch (action.type){
        case 'GET_AUTH_TOKEN_SUCCESS':
            return Object.assign({},state,{
                auth:action.payload
            })
        case 'GET_AUTH_TOKEN_FAIL':
            return Object.assign({},state,{
                auth_error:action.payload
            })
        default:
            return state;
    }
}

export default authReducer