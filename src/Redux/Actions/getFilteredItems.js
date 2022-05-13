export const getFilteredItems = (item) => {
 return {
     type:"GETITEM",
     item:item
 }
}

export const del = (id) => {
    return {
        type:"DELETEITEM",
        id:id
    }
   }
   