import  React, { Component } from 'react';

class sourceOption extends Component {
    render() {
        const {id, title, author} = this.props.source;
        return (
            <option value={id}>
                {title} by {author.firstName} {author.lastName}
            </option>
        );
    }
}

export default sourceOption;