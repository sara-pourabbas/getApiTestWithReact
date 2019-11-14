import {GET_LIST_DATA,LIST_LOADING} from "../ActionTypes";

const initialState={
  list:[],
    loading:false
};

export default (state=initialState,action)=>{
    switch (action.type) {
        case GET_LIST_DATA:
        return{
            ...state,
            list: [...action.data]
        };
        case LIST_LOADING:
            return{
                ...state,
                loading:action.status
            };
        default:
            return state
    }
}