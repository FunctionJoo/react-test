import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="article1">HTML</a></li>
                    <li><a href="article2">CSS</a></li>
                    <li><a href="article3">Javascript</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;