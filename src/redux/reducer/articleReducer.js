import initState from "./initialState"
  
const articleReducer = (state = initState.articles, action) => {
    switch(action.type) {
        case 'DELETE_ARTICLE':
            console.log("DELETE_ARTICLE",state )
            let newArticles = state.filter( article => {return article.id !== action.id});
            return newArticles  
        case 'ADD_ARTICLE':            
            let articlesToAdd = [
              ...state,
              action.article
            ]  
            console.log("ADD_ARTICLE",articlesToAdd );
            return articlesToAdd;     
        default:
            return state;   
    }
}

export default articleReducer;