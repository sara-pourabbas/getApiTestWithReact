import React, { Component } from 'react';
import {Row,Col,Input,Button} from 'reactstrap';
class Login extends Component {
    constructor(props){
        super(props);
        if(localStorage.getItem('Token')) this.props.history.push('/home');
        this.state={
            userName:'sara',
            password:'208'
        }
    }
    login=()=>{
        const {userName,password} = this.state;
        if(userName==='' && password===''){
            alert('user and password is empty')
        }else if(userName==='sara' && password==='208'){
            localStorage.setItem('Token','2211');
            this.props.history.push('/home');
        }else{
            alert('user and pass is wrong')
        }
    };

    render() {
        return (
            <Row className='justify-content-center'>
                <Col sm={4}>
                <form>
                    <h1>Login</h1>
                    <p >Sign In to your account</p>
                    <Input type="text" placeholder="Username" autoComplete="username"
                           onChange={e=>this.setState({userName:e.target.value})}
                           value={this.state.userName}
                    />
                    <Input type="password" placeholder="Password" autoComplete="current-password"
                           onChange={e=>this.setState({password:e.target.value})}
                           value={this.state.password}
                           className='mt-3'
                    />

                    <Button className='mt-3' onClick={this.login}>Login</Button>
                </form>
                </Col>
            </Row>
        );
    }
}

export default Login;
