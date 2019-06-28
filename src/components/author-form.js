import React, { Component } from 'react';
import uuid from 'uuid';

class AuthorForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: uuid.v4(),
            firstName: '',
            lastName: ''
        }

        this.changeAuthor = this.changeAuthor.bind(this);
    }

    
    changeAuthor(event){
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        console.log(this.state)
        return (                
            <div className="author">
                <label>Author</label>
                <div className="row">
                    <div className="col">
                        <input type="text" 
                                name= 'firstName'
                                className="form-control" 
                                placeholder="First name" 
                                onChange={this.changeAuthor}
                        />
                    </div>
                    <div className="col">
                        <input type="text" 
                                className="form-control" 
                                placeholder="Last name" 
                                onChange={(e) => this.changeAuthor(e, 'lastName')}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorForm;