const defaultState ={
    inputValue:'123',
    list:[1,2]
}
//reducer 可以接受state但是不能修改state
export default (state = defaultState, action)=>{
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state;

}