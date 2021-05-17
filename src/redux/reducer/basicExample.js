import {createStore} from 'redux';


//The global state
const initialState = {
  magazines: [],
  authors: []
}

//The actions
const addMagazine = {type: 'ADD_MAGAZINE', magazine: 'Vouge'};
const addAuthor = {type:'ADD_Author', author:'Emma Specter'};

//The reducer
function myReducer(state = initialState, action){

  if(action.type === 'ADD_MAGAZINE'){
    return{
      ...state,
      magazines: [...state.magazines , action.magazine]
    }
  }
  else if(action.type === 'ADD_Author'){
    return{
      ...state,
      authors: [...state.authors , action.author]
    }
  }
}

let store = createStore(myReducer);

store.subscribe(()=>{

  console.log(store.getState());

});

//Dispathing actions
store.dispatch(addMagazine);
store.dispatch(addAuthor);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
