/**
 * Created by mjn on 2015/10/27.
 */

/*React.render(
    <h1>Hello,world!</h1>,
    document.getElementById('example')
) ;*/

var HelloMessage = React.createClass({
    render: function() {
        return <div><h1>Hello {this.props.name}</h1></div>;
    }
});
ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('example')
);
/*ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);*/
