import React, { Component } from 'react';

class EditForm extends Component {
    render(){
        return (
            <form className="col-12 col-md-6" id="source-form">
                <div className="form-group">
                    <label for="title" className="col-form-label">Title</label>
                    <input type="text" className="form-control form-control-sm" name="title"></input>
                </div>
                <div className="form-group">
                    <label for="num-authors">Authors:</label>
                    <select className="form-control">
                        <option>One</option>
                        <option>Two</option>
                        <option>Three or more</option>
                    </select>
                </div>
                <div className="author-group">
                    <div className="form-group">
                        <label for="author" className="col-form-label">Author</label>
                        <input type="text" className="form-control form-control-sm" name="author"></input>
                    </div>
                    <div className="form-group">
                        <label for="publisher" className="col-form-label">Publisher</label>
                        <input type="text" className="form-control form-control-sm" name="publisher"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="author" className="col-form-label">Year</label>
                    <input type="text" className="form-control form-control-sm" name="year"></input>
                </div>
            </form>
        )
    }
}

export default EditForm;