/**
 * Created by mjn on 2015/10/29.
 */
"use strict";

var MyForm = React.createClass({
    displayName: "MyForm",

    getInitialState: function getInitialState() {
        return {
            email: "",
            intro: "",
            city: "hz",
            male: 'FEMALE', //性别
            emailError: "",
            introError: "",
            list: [{ "name": "yicj", "addr": "beijing" }, { "name": "zhangsan", "addr": "shanghai" }]
        };
    },
    handleEmail: function handleEmail(e) {
        var value = e.target.value;
        var error = '';
        if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
            error = '请输入正确的Email';
        }
        this.setState({
            email: value,
            emailError: error
        });
    },
    handleIntro: function handleIntro(e) {
        var value = e.target.value;
        var error = "";
        if (value.length < 10) {
            error = "介绍不能少于十个字";
        }
        this.setState({
            intro: value,
            introError: error
        });
    },
    handleCity: function handleCity(e) {
        var value = e.target.value;
        this.setState({
            city: value
        });
        console.info(this.state);
    },
    handleGender: function handleGender(e) {
        var male = e.target.value;
        this.setState({
            male: male
        });
        console.info(this.state);
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    { htmlFor: "email" },
                    "email:"
                ),
                React.createElement("input", { type: "text", name: "intro", id: "intro", value: this.state.email, onChange: this.handleEmail }),
                React.createElement(
                    "span",
                    null,
                    this.state.emailError
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    { htmlFor: "intro" },
                    "intro:"
                ),
                React.createElement("textarea", { type: "text", name: "intro", id: "intro", value: this.state.intro, onChange: this.handleIntro }),
                React.createElement(
                    "span",
                    null,
                    this.state.introError
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    { htmlFor: "city" },
                    "所在城市:"
                ),
                React.createElement(
                    "select",
                    { name: "city", id: "city", value: this.state.city, onChange: this.handleCity },
                    React.createElement(
                        "option",
                        { value: "hz" },
                        "杭州"
                    ),
                    React.createElement(
                        "option",
                        { value: "bj" },
                        "北京"
                    ),
                    React.createElement(
                        "option",
                        { value: "sh" },
                        "上海"
                    )
                )
            ),
            React.createElement(
                "p",
                null,
                React.createElement(
                    "label",
                    null,
                    "性别:"
                ),
                React.createElement("input", { type: "radio", name: "gender", checked: this.state.male == 'MALE', onChange: this.handleGender, value: "MALE" }),
                "man",
                React.createElement("input", { type: "radio", name: "gender", checked: this.state.male == 'FEMALE', onChange: this.handleGender, value: "FEMALE" }),
                "woman"
            ),
            React.createElement(
                "table",
                { className: "table" },
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "姓名"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "地址"
                        )
                    )
                ),
                React.createElement("tbody", null)
            )
        );
    }
});

ReactDOM.render(React.createElement(MyForm, null), document.getElementById("container"));