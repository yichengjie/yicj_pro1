/**
 * Created by mjn on 2015/10/27.
 */

/*React.render(
    <h1>Hello,world!</h1>,
    document.getElementById('example')
) ;*/

"use strict";

var HelloMessage = React.createClass({
    displayName: "HelloMessage",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Hello ",
                this.props.name
            )
        );
    }
});
ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), document.getElementById('example'));
/*ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);*/