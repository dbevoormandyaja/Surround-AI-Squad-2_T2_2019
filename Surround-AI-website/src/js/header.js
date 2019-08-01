'use strict';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav class="level">
                    <p class="level-item has-text-centered">
                        <a class="link is-info">Home</a>
                    </p>
                    <p class="level-item has-text-centered">
                        <a class="link is-info">Documentation</a>
                    </p>
                    <p class="level-item has-text-centered">
                        <a class="link is-info">Blog</a>
                    </p>
                    <p class="level-item has-text-centered">
                        <a class="link is-info">Git</a>
                    </p>
                    <p class="level-item has-text-centered">
                        <a class="link is-info">FAQ</a>
                    </p>
                </nav>
            </header>
        );
    }
}

let domContainer = document.querySelector('#header');
ReactDOM.render(<Header />, domContainer);