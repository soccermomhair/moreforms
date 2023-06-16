import React, { useState } from "react";

// option2 - using separate state 
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpw, setConfirmpw] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPwError, setConfirmPwError] = useState("");

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be longer than 2 characters.");
        }
        else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be longer than 2 characters.");
        }
        else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email address must be longer than 5 characters.");
        }
        else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be longer than 8 characters.");
        }
        else {
            setPasswordError("");
        }
    }
    const handleConfirmPw = (e) => {
        setConfirmpw(e.target.value);
        if (password !== confirmpw) {
            setConfirmPwError("Passwords must match");
        }
        else {
            setConfirmPwError("");
        }


    }

    return (

        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label>First name: </label>
                <input type="text" onChange={handleFirstName} />
                {
                    firstNameError ?
                        <p>{firstNameError}</p> : ''
                }
            </div>
            <div className="form-group">
                <label>Last name: </label>
                <input type="text" onChange={handleLastName} />
                {
                    lastNameError ?
                        <p>{lastNameError}</p> : ''
                }
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input type="text" onChange={handleEmail} />
                {
                    emailError ?
                        <p>{emailError}</p> : ''
                }
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input type="password" onChange={handlePassword} />
                {
                    passwordError ?
                        <p>{passwordError}</p> : ''
                }
            </div>
            <div className="form-group">
                <label>Confirm password: </label>
                <input type="text" onChange={handleConfirmPw} />
                {
                    confirmPwError ?
                        <p>{confirmPwError}</p> : ''
                }
            </div>
        </form>

        //     <div>
        //     <h3>Your form data:</h3>
        //     <h3>First name: {newuser.firstname}</h3>
        //     <h3>Last name: {newuser.lastname}</h3>
        //     <h3>Email: {newuser.email}</h3>
        //     <h3>Password: {newuser.password}</h3>
        //     <h3>Confirm password: {newuser.confirmpw}</h3>            </div>
        // </div>
    );


}
export default UserForm;