/**
 * Created by mjn on 2015/10/28.
 */
// tutorial1.js
var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                 Hello, world! I am a CommentBox.
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);









