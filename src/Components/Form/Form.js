import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Userlist from '../Userlist/Userlist';

const Form = () => {
    const [user, setUser] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        fetch('https://cute-cyan-slug-tie.cyclic.app/user', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        e.target.reset();
    };


    useEffect(() => {
        fetch('https://cute-cyan-slug-tie.cyclic.app/alluser')
            .then(res => res.json())
            .then(data => setUser(data));
    }, [user])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="Name" {...register("name")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
            {
                user.map(user => <Userlist user={user} key={user._id}></Userlist>)
            }
        </div>
    );
};

export default Form;