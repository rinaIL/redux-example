import React, { Component } from 'react';
import {ThemeContext}  from '../contexts/ThemeContext';
import {connect} from 'react-redux';
import {addArticle} from '../redux/actions/actions'

class AddArticleForm extends Component {
    static contextType  = ThemeContext;

    state = {
        title:'',
        author:'',
        category:'Politics',
        article: ''
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        this.props.addNewArticle(this.state);
        event.preventDefault();
    }

    handleRadionButton(value) {
        this.setState({category: value});
    }

    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return(
            <form style={{color: theme.syntax, background:theme.ui}} onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Title:
                        <input type='text' name='title' onChange = {(e) => this.handleChange(e)} />
                </label>
                <label>
                    Author:
                        <input type='text' name='author' onChange = {(e) => this.handleChange(e)} />
                </label>
                <label>
                    Politics:
                        <input type='radio' name='category' value='Politics' checked = {this.state.category === 'Politics'} onChange = {() => this.handleRadionButton('Politics')} />
                </label>
                <label>
                    Fashion:
                        <input type='radio' name='category' value='Fashion' checked = {this.state.category === 'Fashion'} onChange = {() => this.handleRadionButton('Fashion')} />
                </label>
                <label>
                    Article:
                        <textarea name='article' onChange = {(e) => this.handleChange(e)} />
                </label>
                <input type="submit" value = "Submit" />
            </form>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
        return {
            addNewArticle: (article) => {dispatch(addArticle(article))}
        }
}

export default connect(null,mapDispatchToProps)(AddArticleForm);