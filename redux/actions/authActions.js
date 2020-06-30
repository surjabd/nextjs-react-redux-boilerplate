import axios from "axios";

//Example of how to call an api
export function loginUser(callback) {
    return function (dispatch) {
        return axios.post(
            "Enter Url HERE",
            callback
        ).then(function (response) {
            dispatch({type: 'GET_AUTH_TOKEN_SUCCESS', payload: response.data});
            // return true;

        }).catch(function (error) {

            dispatch({type: 'GET_AUTH_TOKEN_FAIL', payload: error.response});
            // return false;
        });
    }

}
