import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import { useForm } from "./useForm";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div style={{ marginLeft: "400px"}}>
                <h1>Form validation</h1>
                <input
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                
                    required
                />

                <input
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    required
                />
                <button style={{ background: "Dodgerblue" }} type='submit'>SignUp</button>
            </div>
            <div>
                <br />
                <br />
            </div>
        </form>
            <Table style={{ backgroundColor: "MediumAquamarine" }} striped bordered hover size="sm">
                <thead>
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
                            <td><button style={{background:"#C73F52"}} onClick={() =>onDelete(value)}>delete</button></td>
                            <td><button style={{background:"#00FFFF"}} onClick={() =>onEdit(index)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </>
    );
}

export default App;