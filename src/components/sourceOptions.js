import  React, { Component } from 'react';

class sourceOption extends Component {
    render() {
        const {title, author} = this.props.source;
        return (
            <option>
                {title} by {author.firstName} {author.lastName}
            </option>
        );
    }
}

export default sourceOption;