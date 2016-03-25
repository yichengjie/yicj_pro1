/**
 * Created by mjn on 2015/10/29.
 */
var InputDemo = React.createClass({
    getInitialState: function () {
         return {value: 'Hello!'}
    },
    render: function () {
        return (
            <input type="text" onChange={this.handleChange} value={this.state.value}/>
        );
    },
    handleChange: function (event) {
        this.setState({value: event.target.value});
        console.info(this.state) ;
    }
});

ReactDOM.render(
    <InputDemo />,
    document.getElementById('container')

);
