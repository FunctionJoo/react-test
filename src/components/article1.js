import React from 'react';

class Article1 extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        //this.state = props.data
    }

    render() {
        return (
            <article>
                <h2>{this.props.data.page1}</h2>
                HTML Is Hyper Text Mark-up Language
            </article>
        );
    }
}

export default Article1;