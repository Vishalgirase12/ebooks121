// src/Component/Aboutus.js
import { useState } from "react";
import { useForm } from "react-hook-form";

function Aboutus() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(`${data.username} ${data.email} ${data.password}
        &{data.address} ${data.country} ${data.sub}`);
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter name" {...register('username', {
                required: 'This field is required'
                , minLength: {
                    value: 4,
                    message: 'min length should be 4'
                }, maxLength: {
                    value: 9,
                    message: 'max length should be 9'
                }
            })} />
            {/* {errors.username && <span style={{ color: 'red' }}>This field is required</span>} */}
            {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}


            <br /><br />

            <input type="text" placeholder="Enter email" {...register('email', {
                required: 'This field is required'
                , minLength: {
                    value: 4,
                    message: 'min length should be 4'
                }, maxLength: {
                    value: 20,
                    message: 'max length should be 20'
                }
            })} />

            {/* {errors.email && <span style={{ color: 'red' }}>This field is required</span>} */}
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
            <br /><br />

            <input
                type="text"
                placeholder="enter password"
                {...register("password", {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                })}
            />
            {errors.password && (
                <span style={{ color: "red" }}>should be strong</span>
            )}

            {/* {errors.password && <span style={{ color: 'red' }}>This field is required</span>} */}
            <br /><br />


            <input type="text" placeholder="Enter your age" {...register('age', {
                required: 'This field is required'
                , minLength: {
                    value: 4,
                    message: 'min length should be 4'
                }, maxLength: {
                    value: 5,
                    message: 'max length should be 5'
                }
            })} />
            {errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}
            <br /><br />

            <textarea rows={4} cols={10} {...register('address')} />
            <br /><br />

            <select {...register('country')}>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="INDAI">INDAI</option>
                <option value="JAPAN">JAPAN</option>
            </select>
            <br /><br />

            <input type="checkbox" {...register('sub')} />


            <button>Submit</button>
        </form>
    </>
    );
}

export default Aboutus;
