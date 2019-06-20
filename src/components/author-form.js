import React, { Component } from 'react';

class AuthorForm extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }

        this.changeAuthor = this.changeAuthor.bind(this);
    }

    
    changeAuthor(prop, value){
        console.log(prop, value);
    }

    render() {
        return (                
            <div className="author">
                <label>Author</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" 
                        onChange={(e) => this.changeAuthor('firstName', e.target.value)}
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