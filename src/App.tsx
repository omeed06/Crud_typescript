import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import { useForm } from "./useForm";
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface IUsers {
    email: string;
    password: string;
}

function App() {
    // defining the initial state for the form
    const initialState = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values, isSubmit,onDelete, data, onEdit } = useForm(
        initialState
    );

    


   
    

    return (
        // don't mind this ugly form :P
        <>
        <form onSubmit={onSubmit}>
            <div style={{ margin: "50px 500px 20px 500px"}}>
                <h1 style={{marginLeft: "80px"}}>USER FORM</h1>
                <h6 style={{fontWeight:"bold"}}> Enter your Email</h6>
                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                
                    required
                />
                <h6 style={{fontWeight:"bold"}}> Enter your Password</h6>
                    
                <Input prefix={<LockOutlined className="site-form-item-icon" />}
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    required
                />

                    <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                    </Form.Item>



                    <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                     </Button>
                    Or <a href="">register now!</a>
                    </Form.Item>



            </div>
            <div>
                <br />
            </div>
        </form>
            <Table striped bordered hover size="sm" variant="dark">
                <thead style={{}}>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        
                    </tr>
                </thead>
                
                <tbody>
                    {data?.map((value: IUsers, index:number) => (
                        <tr>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                            <td><Button style={{background:"#00FFFF"}} onClick={() =>onDelete(value)}>delete</Button></td>
                            <td><Button style={{background:"#F44336"}} onClick={() =>onEdit(index)}>Edit</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </>
    );
}

export default App;