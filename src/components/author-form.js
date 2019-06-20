import React, { Component } from 'react';
import uuid from 'uuid';

class AuthorForm extends Component {
    constructor(){
        super()
        this.state = {
            id: uuid.v4(),
            firstName: '',
            lastName: ''
        }

        this.changeAuthor = this.changeAuthor.bind(this);
    }

    
    changeAuthor(event, prop){
        event.preventDefault()
        this.setState({[prop]: event.target.value});
        this.props.addAuthor(this.state);
    }

    render() {
        return (                
            <div className="author">
                <label>Author</label>
                <div className="row">
                    <div className="col">
                        <input type="text" 
                                className="form-control" 
                                placeholder="First name" 
                                onChange={(e) => this.changeAuthor(e, 'firstName')}
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