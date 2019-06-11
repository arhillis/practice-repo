import React, { Component } from 'react';

class AuthorForm extends Component {
    render() {
        return (                
            <div>
                <label>Author</label>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" />
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