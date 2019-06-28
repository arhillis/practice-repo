import React, { Component } from 'react';
import AuthorForm from './author-form';

class Authors extends Component {
    constructor(props){
        super(props)
        this.state = {
            authors: this.props.authors
        }

        this.addAuthor = this.addAuthor.bind(this);

    }
    
    onChange (event){
        let arr = [], num = parseInt(event.target.value);
        
        while(num > 0){
            arr.push({});
            num--;
        }

        this.setState({authors: arr});
    }

    addAuthor(newAuthor){

        this.setState(prevState => {
            prevState.authors[0] = newAuthor;
            return prevState;
        })

    }

    render() {  
        const author = this.state.authors[0];
        return (
            <div className="author-group">
                    {author.firstName ? author.firstName : ""}
                    <div className="form-group">
                        <label htmlFor="num-authors">Authors:</label>
                        <select className="form-control" onChange={this.onChange.bind(this)}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three or more</option>
                        </select>
                    </div>
                    <div id="author-form">
                        {this.state.authors.map((author, index) => 
                            <AuthorForm key={index} author={author}
                                addAuthor={this.addAuthor}
                                index={index}
                            />
                        )}
                    </div>
                </div>
        );
    }
}

export default Authors;