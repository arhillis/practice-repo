import React, { Component } from 'react';

class Authors extends Component {
    render() {
        return (
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
        );
    }
}

export default Authors;