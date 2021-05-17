import React, {Component} from 'react';
import {ThemeContext}  from '../contexts/ThemeContext';
import AtricleInfo from './ArticleInfo';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import {changeCategoryFilter} from '../redux/actions/actions'

class ArticlesList extends Component {

    static contextType  = ThemeContext;

    changeFilterCategory=(filter, e)=>{
      this.props.changeTheFilterCategory(filter);
    }
    render() { 
        // eslint-disable-next-line
        const { articles, categoryFilter  , articlesByCategory} = this.props;
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;

      return ( 

        <div className="container" style={{color: theme.syntax, background:theme.ui}}>
          <div>
            <Button variant="outline-success" onClick = {(e) => this.changeFilterCategory("Politics", e)}>
                Politics
            </Button>
            <Button variant="outline-success" onClick = {(e) => this.changeFilterCategory("Fashion",e)}>
                Fashion
            </Button>

          </div>
          <h1  style={{color: '#555'}}>New Articles:</h1>
          {
            articlesByCategory && articlesByCategory.length
              ? articlesByCategory.map((article, index) => {
                return (<AtricleInfo article={article} key={index} />);
              })
              : <p>No Articles</p>
          }
           
        </div>
      );
    }
}
const mapStateToProps = (state) =>{
  return{
    articles : state.articles,
    categoryFilter: state.categoryFilter,
    articlesByCategory: state.articles.filter(article => article.category === state.categoryFilter)
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    changeTheFilterCategory : (newCategory) => { dispatch( changeCategoryFilter(newCategory) ) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList)