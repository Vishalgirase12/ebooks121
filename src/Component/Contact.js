import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";



function Contact() {
    const { theme } = useContext(ThemeContext);
    console.log(theme);
    const [error, setError] = useState({});    //1
    const [formdata, setFormdata] = useState({
        "uname": '',
        "email": '',
        "password": '',
        "address": '',
        "country": '',
        "sub": false

    });

    const handlesubmit = (event) => {
        event.preventDefault();
        // You can handle form submission here
        // console.log(formdata);
        setError({})
        if (formdata.uname === '' || formdata.uname === null) {
            setError({
                name: 'Name can not be blank or null'
            });
        }
        if (formdata.password.length <= 3 || formdata.password >= 9) {
            setError({
                name1: 'should be in range'
            });
        }

        if (formdata.sub === false) {
            setError({
                name2: 'please subscribe'
            })
        }


    }

    const handlechange = (event) => {
        setFormdata({
            ...formdata,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
    };

    return (
        <>
            <p>Contact Us page</p>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="enter name"
                    name="uname"
                    value={formdata.uname}
                    onChange={handlechange}
                />
                <span style={{ color: 'red' }}>{error && error.name}</span>
                <br /><br />

                <input
                    type="text"
                    placeholder="enter email"
                    name="email"
                    value={formdata.email}
                    onChange={handlechange}
                /><br /><br />

                <input
                    type="text"
                    placeholder="enter password"
                    name="password"
                    value={formdata.password}
                    onChange={handlechange}
                />
                <span style={{ color: 'red' }}>{error && error.name1}</span>
                <br /><br />

                <textarea
                    rows={5}
                    cols={15}
                    name="address"
                    value={formdata.address}
                    onChange={handlechange} />


                <br /><br />

                <select
                    name="country"
                    value={formdata.country}
                    onChange={handlechange}>

                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="INDIA">INDIA</option>
                    <option value="JAPAN">JAPAN</option>

                </select>

                <br /><br />

                <input type="checkbox"
                    name="sub"
                    checked={formdata.sub}
                    onChange={handlechange} />
                <span style={{ color: 'red' }}>{error && error.name2}</span>
                <button>Submit</button>
            </form>

            <p>Data : {JSON.stringify(formdata)}</p>
        </>
    );
}

export default Contact;
