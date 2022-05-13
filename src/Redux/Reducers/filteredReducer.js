const filteredItems = (state=[], action) =>{
    switch(action.type) {
        case "GETITEM": {
            if(!state.includes(action.item)) {
                return [...state, action.item]
            }
        }
        case "DELETEITEM":{
           const temp = state.slice();
            temp.splice(action.id, 1)
           // return [...state, action.id]
           return temp
            
        } 
        default:
            return state
    }
}
export default filteredItems;