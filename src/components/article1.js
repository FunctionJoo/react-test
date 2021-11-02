import React from 'react';

class Article1 extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        //this.data = props;
    }

    render() {
        return (
            <article>
                <h2>asdf</h2>
                HTML Is Hyper Text Mark-up Language
            </article>
        );
    }
}

export default Article1;