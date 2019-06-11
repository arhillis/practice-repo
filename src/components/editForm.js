import React, { Component } from 'react';
import FormGroup from './form-group';

class EditForm extends Component {
    render(){
        return (
            <form className="col-12 col-md-6" id="source-form">
                <FormGroup name="title" />
                <hr></hr>
                <div className="author-group">
                    <div className="form-group">
                        <label for="num-authors">Authors:</label>
                        <select className="form-control">
                            <option>One</option>
                            <option>Two</option>
                            <option>Three or more</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="author" className="col-form-label">Author</label>
                        <input type="text" className="form-control form-control-sm" name="author"></input>
                    </div>
                </div>
                <FormGroup name="publisher" />
                <FormGroup name="year" />
                
            </form>
        )
    }
}

export default EditForm;