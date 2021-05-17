import initState from "./initialState"


const categoryFilterReducer = (state = initState.categoryFilter, action) => {
    switch(action.type) {
        case'CHANGE_CATEGORY_FILTER':
                return action.categoryFilter                            
        default:
            return state;
    }
}

export default categoryFilterReducer