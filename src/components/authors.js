import React, { Component } from 'react';
import AuthorForm from './author-form';

class Authors extends Component {
    constructor(props){
        super(props)
        this.state = {
            authors: this.props.authors
        }
    }
    
    onChange (event){
        let arr = [], num = parseInt(event.target.value);
        
        while(num > 0){
            arr.push({});
            num--;
        }

        this.setState({authors: arr});

    }
    render() {      
        return (
            <div className="author-group">
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
                            <AuthorForm key={index}/>
                        )}
                    </div>
                </div>
        );
    }
}

export default Authors;