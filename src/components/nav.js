import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.pagearr);
    }

    linkClick(e) {
        e.preventDefault();
        console.log('click');
    }

    render() {
        let objKeys = Object.keys(this.props.pagearr);
        let list = [];
        for (let i = 0; i < objKeys.length; i++) {
            list.push(
            <li key={this.props.pagearr[objKeys[i]].name}>
                <Link to={this.props.pagearr[objKeys[i]].url}>
                    {this.props.pagearr[objKeys[i]].name}
                </Link>
            </li>
            );
        }
        return (
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        );
    }
}

export default Nav;