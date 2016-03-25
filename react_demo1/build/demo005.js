/**
 * Created by mjn on 2015/10/29.
 */
'use strict';

var InputDemo = React.createClass({
    displayName: 'InputDemo',

    getInitialState: function getInitialState() {
        return { value: 'Hello!' };
    },
    render: function render() {
        return React.createElement('input', { type: 'text', onChange: this.handleChange, value: this.state.value });
    },
    handleChange: function handleChange(event) {
        this.setState({ value: event.target.value });
        console.info(this.state);
    }
});

ReactDOM.render(React.createElement(InputDemo, null), document.getElementById('container'));