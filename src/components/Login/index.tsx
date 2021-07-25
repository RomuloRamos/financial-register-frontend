import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { LoginStatus,LoginUser } from '../../store/ducks/login/types';
import * as LoginActions from '../../store/ducks/login/actions';

import LoginForm, {LoginFormProps} from '../LoginForm';

import 'antd/dist/antd.css';
// import './index.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


/**
 * Data gotched by MapStateToProps
 */
 interface StateProps {
  loginStatus: LoginStatus;
}

/**
* Data gotched by MapDispatchToProps from Redux
*/
interface DispatchProps {
  loginRequest(data:LoginUser): void;
}

// interface OwnProps {
//   dataToLogin?:LoginRequestData,
// }

/**
* Union of all types to an unique, called Props
*/
type Props = StateProps & DispatchProps;// & OwnProps;

interface iState {
  tryLogin:boolean,
  dataToLogin:LoginUser
}

class Login extends Component<Props, iState> {
  state: iState = {
    tryLogin:false,
    dataToLogin:{
      login:"",
      password:"",
      birthDate:"",
      email:"",
      name:"",
    }
  }

  setLogin = (loginResquestData:LoginUser) => this.setState({dataToLogin:loginResquestData, tryLogin:true});

  componentDidUpdate(){
    console.log("componentDidUpdate CALLED -> PROPS: ", this.props, "State: ",this.state);
    if(this.state.tryLogin === true){
      this.setState({tryLogin:false});
      console.log("Trying login..., set flag to: ",this.state.tryLogin);
      this.props.loginRequest(this.state.dataToLogin);
    }
  }
  componentDidMount() {
    console.log("componentDidMount CALLED -> PROPS: ", this.props, "State: ",this.state);

      // const { loadRequest } = this.props;
      // loadRequest();
  }

  onLogin = (loginResquestData:LoginUser) => {
    console.log("onLogin ->>",loginResquestData.login, loginResquestData.password);
    this.setLogin(loginResquestData);
  }

  render() {
      const {loginStatus} = this.props;
      return (
        <>
          <h3>Login</h3>
          <LoginForm onLogin={this.onLogin}/>
        </>
      );
  }
}
const mapStateToProps = (state: ApplicationState) => ({
  loginStatus: state.login.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);