import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { UserData, UserState } from '../../store/ducks/user/types';
import * as UserRequestActions from '../../store/ducks/user/actions';
import UserRegisterForm from '../UserRegisterForm';
import history from '../../history';


import 'antd/dist/antd.css';
import { Layout, message } from 'antd';
const { Header, Footer, Sider, Content } = Layout;



/**
 * Data gotched by MapStateToProps
 */
 interface StateProps {
  userRegisterState: UserState;
}

/**
* Data gotched by MapDispatchToProps from Redux
*/
interface DispatchProps {
    userRegisterRequest(data:UserData): void;
}

/**
* Union of all types to an unique, called Props
*/
type Props = StateProps & DispatchProps;// & OwnProps;

interface iState {
  tryRegister:boolean,
  dataToRegister:UserData,
}

class UserRegister extends Component<Props, iState> {
    state: iState = {
        tryRegister:false,
        dataToRegister:{
            birthDate:"",
            email:"",
            login:"",
            name:"",
            password:""
        }
    }

    setUserRegister = (registerData:UserData) => this.setState({dataToRegister:registerData, tryRegister:true});

    successMessage = () => {
        message.success('Usuário criado com sucesso!');
    };
    errorMessage = (errorMessage:string) => {
        message.error(errorMessage);
      };

    componentDidUpdate(){
        console.log("componentDidUpdate CALLED -> PROPS: ", this.props, "State: ",this.state);
        if(this.state.tryRegister === true){
            this.setState({tryRegister:false});
            console.log("Trying register user..., setting flag to false ");
            this.props.userRegisterRequest(this.state.dataToRegister);
        }else if(this.props.userRegisterState.success === true){
            this.successMessage();
            history.push('/');
        }else if(this.props.userRegisterState.error === true){
            if(this.props.userRegisterState.information.validation.body.message)
                this.errorMessage(this.props.userRegisterState.information.validation.body.message);
            else this.errorMessage('Erro desconhecido');
        }
    }
    componentDidMount() {
        console.log("componentDidMount CALLED -> PROPS: ", this.props, "State: ",this.state);
    }

    onRegister = (userData:UserData) => {   
        console.log("onRegister ->>",userData);
        this.setUserRegister(userData);
    }

    render() {
        return (
            <>
                <h2>Registro de Usuário</h2>
                <UserRegisterForm onRegister={this.onRegister}/>
            </>
        );
    }
}
const mapStateToProps = (state: ApplicationState) => ({
    userRegisterState: state.userRegister,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UserRequestActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);