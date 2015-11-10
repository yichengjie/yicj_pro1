/**
 * Created by mjn on 2015/10/29.
 */
var MyForm = React.createClass({
    getInitialState: function() {
        return {
            email: "",
            intro: "",
            city: "hz",
            male: 'FEMALE', //性别
            emailError: "",
            introError: "",
            list:[{"name":"yicj","addr":"beijing"},
                  {"name":"zhangsan","addr":"shanghai"}
                 ]
        };
    },
    handleEmail: function(e) {
        var value = e.target.value;
        var error = '';
        if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
            error = '请输入正确的Email';
        }
        this.setState({
            email: value,
            emailError: error
        });
    },
    handleIntro: function(e) {
        var value = e.target.value;
        var error = "";
        if(value.length < 10) {
            error = "介绍不能少于十个字";
        }
        this.setState({
            intro: value,
            introError: error
        });
    },
    handleCity: function(e) {
        var value = e.target.value;
        this.setState({
            city: value,
        });
        console.info(this.state) ;
    },
    handleGender: function(e) {
        var male = e.target.value ;
        this.setState({
            male: male
        });
        console.info(this.state) ;
    },
    render: function() {
        return (
            <div>
                <p>
                    <label htmlFor='email'>email:</label>
                    <input type='text' name='intro' id='intro' value={this.state.email} onChange={this.handleEmail} />
                    <span>{this.state.emailError}</span>
                </p>
                <p>
                    <label htmlFor='intro'>intro:</label>
                    <textarea type='text' name='intro' id='intro' value={this.state.intro} onChange={this.handleIntro} />
                    <span>{this.state.introError}</span>
                </p>
                <p>
                    <label htmlFor='city'>所在城市:</label>
                    <select  name='city' id='city' value={this.state.city} onChange={this.handleCity}>
                        <option value='hz'>杭州</option>
                        <option value='bj'>北京</option>
                        <option value='sh'>上海</option>
                    </select>
                </p>
                <p>
                    <label>性别:</label>
                    <input type='radio' name='gender' checked={this.state.male=='MALE'} onChange={this.handleGender} value='MALE' />man
                    <input type='radio' name='gender' checked={this.state.male=='FEMALE'} onChange={this.handleGender} value='FEMALE' />woman
                </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>地址</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
});

ReactDOM.render(
    <MyForm />,
    document.getElementById("container")
);