import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { LoginUser } from '../../store/ducks/login/types';

export interface LoginFormProps{
  onLogin(loginRequestData:LoginUser):void
}

export default function LoginForm(Props:LoginFormProps){
  const onFinish = (values) => {
    console.log('Success:', values);
    const setLoging:LoginUser={
      birthDate:"",
      email:"",
      login:values.username,
      password:values.password,
      name:"",
    }      
    Props.onLogin(setLoging);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        username: "",
        password: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};