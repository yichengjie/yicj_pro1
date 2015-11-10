/**
 * Created by mjn on 2015/10/28.
 */
// tutorial1.js
"use strict";

var CommentBox = React.createClass({
    displayName: "CommentBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentBox" },
            "Hello, world! I am a CommentBox."
        );
    }
});
ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));