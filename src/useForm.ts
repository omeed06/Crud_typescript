import React, { useState } from "react";

interface IUsers {
    email: string;
    password: string
}

// useForm functional component
export const useForm = (initialState: IUsers = { email: '', password: '', }) => {
    const [values, setValues] = useState(initialState);
    const [data, setData]: any[] = useState([])
    let [id, setId] = useState(0)
    let [isEditable, setIsEditable] = useState(false)
    let [isEditableIndex, setIsEditableIndex] = useState(0)

    const [isSubmit, setIsSubmit] = React.useState(false)
    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    // onSubmit
    const onSubmit = async (event: any) => {
        event.preventDefault();
        console.log(isEditable);
        if(isEditable) {
            
            const temp = data;
            temp[isEditableIndex] = {...temp[isEditableIndex], ...values }
            setData(temp)
            setIsEditable(false)
            return 
        }
        // console.log(data)
        setId(++id)
        setData([...data, { ...values, id }])

        // triggering the callback
        // alert(`${event.target.email.value},${event.target.password.value}`)
        // console.log(event.target.email.value,event.target.password.value)
        setIsSubmit(true)
    };
    const onEdit = (event: any) => {
        setIsEditable(true);
        setIsEditableIndex(event)
    };

    const onDelete = (value: any) => {
        const filter = data.filter((item: any, index:number) => {
            console.log(item.id, value.id);

            return item?.id !== value?.id
        })
        console.log(filter, 'filter')
        setData(filter)

    }
    // return values
    return {
        onChange,
        onSubmit,
        values,
        isSubmit,
        data,
        onDelete,
        onEdit
    };
}