import React, { Component } from 'react';

class AuthorForm extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
    }
    render() {
        return (                
            <div className="author">
                <label>Author</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" 
                        onChange={(e) => this.props.onChangeAuthor(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorForm;