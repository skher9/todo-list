import { ADD_TODO, DELETE_TODO } from "./todoTypes"

const initialState ={
    list:[]
}

const rootReducer = (state=initialState,action)=>{
    switch (action.type){
        case ADD_TODO:
            const Item = {
                id:state.list.length + 1,
                name:action.payload,
            }
        return{
            ...state,
            list: [...state.list, Item],
        };

        case DELETE_TODO:
            const index = state.list.findIndex(item => item.id === action.payload);
            console.log(index)
            const temp = [...state.list];
            temp.splice(index, 1);
        return{
            ...state,
            list : temp
        }

        default:
            return state;
    }
}

export default rootReducer