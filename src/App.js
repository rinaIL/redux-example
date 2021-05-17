import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext'
import ArticlesList from './Components/ArticlesList';
import AddArticleForm from './Components/AddArticleForm';

function App() {
  return (

    <div className="App">
      <ThemeContextProvider>
        <AddArticleForm />
        <ArticlesList />        
      </ThemeContextProvider>
    </div>
  );
}

export default App;
