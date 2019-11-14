import {GET_LIST_DATA,LIST_LOADING} from '../ActionTypes';
import axios from "axios";
import {API_URL} from "../../configs";


export const GetListData = ()=>{
    return dispatch =>{
        dispatch(ListLoading(true));
        axios({
            url:API_URL,
            method:'get'
        }).then(resp=>{
            dispatch({type:GET_LIST_DATA,data:resp.data})
            dispatch(ListLoading(false));
        }).catch(err=>{
            console.log(err)
            dispatch(ListLoading(false));
        })
    };
};

export const ListLoading = status=>({
    type:LIST_LOADING,status
});