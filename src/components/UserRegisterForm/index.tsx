import React,{Component, useState} from "react";
import { UserData } from "../../store/ducks/user/types";
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
  DatePicker,
} from 'antd';

import { SizeType } from "antd/lib/config-provider/SizeContext";

export interface iUserRegisterForm{
    onRegister(userData:UserData):void;
}

export default function UserRegisterForm(Props:iUserRegisterForm){
  // const [componentSize, setComponentSize] = useState<SizeType|undefined>("small");

  const onFinish = (values) => {
    console.log('Success:', values);
    const birthDate:Date = values.birthDate;
    const dataToSet:UserData={
      birthDate: birthDate.toISOString(),
      email: values.email,
      login: values.login,
      name: values.name,
      password: values.password
    }
    Props.onRegister(dataToSet);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // initialValues={{
        //   size: componentSize,
        // }}
        size={"small"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="login" name ="login"
        rules={[
            {
                required: true,
                message: 'Please input your login!',
            },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="password" name="password"
        rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="name" name="name"
        rules={[
            {
                required: true,
                message: 'Please input your name!',
            },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="email" name="email"
        rules={[
            {
                required: true,
                message: 'Please input your email!',
                type: 'email' 
            },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="birthDate" name="birthDate"
        rules={[
            {
                type:"date",
                required: true,
                message: 'Please input your birthDate!',
            },
        ]}>
          <DatePicker />
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
    </>
  );
};
