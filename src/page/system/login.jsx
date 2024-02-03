/* eslint-disable no-unused-vars,react/prop-types */
import {useEffect, useState} from "react";
import styled from "styled-components";
import {login} from "../../api/system/user.js"
import { useNavigate } from "react-router-dom";
import React from 'react';

const Background = ({ className, children }) => (
    <div className={className}>
        {children}
    </div>
);
const LoginFrame = ({ className, children }) => (
        <div className={className}>
            <form>{children}</form>
        </div>
)

const StyledBackgroundDiv = styled(Background)`
    background-color: #1a1a1a;
    //background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;
const StyledLoginFrameDiv = styled(LoginFrame)`
    background-color: #232323;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 20%;

    .description {
        font-size: 0.9em;
        margin-top: 10px;
        margin-bottom: 1px;
    }
    .table {
        display: flex;
        border-collapse: collapse;
        text-align: center;
        padding: 1px;
        margin: auto;
        width: 100%;
    }
    .centered-row {
        display: flex;
        justify-content: center;
        align-items: center;
        ;
    }
    .centered-cell {
        text-align: center;
        vertical-align: middle;
    }
    .inputText {
        height: 30px;
        width: 240px;
    }
    .url {
        font-size: 0.6em;
        line-height: 0.1;
    }
    .checkboxLabel {
        font-size: 0.8em;
    }
    .checkbox {
        white-space: nowrap;
    }
`;

function InputText({ des, inputType, value, onChange }) {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <label>
            <input className={"inputText"}
                   type={inputType}
                   id={des.toLowerCase()}
                   placeholder={"Enter your " + des.toLowerCase() + " here."}
                   value={value}
                   onChange={handleInputChange}
                   required={true}
            />
        </label>
    )
}
function CheckBox({ des, value, onChange }) {
    const handleCheckboxChange = () => {
        onChange(!value);
    };

    return (
        <label className={"checkboxLabel"}>
            <input className={"checkbox"}
                   type={"checkbox"}
                   id={des.toLowerCase()}
                   checked={value}
                   onChange={handleCheckboxChange}
            />
            {des}
        </label>
    )
}

export default function LoginPage() {
    //  manage input statement
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        //  when loading, try to get account info from local storage
        const storedAccount = localStorage.getItem('account');
        const storedPassword = localStorage.getItem('password');
        const storedRememberMe = localStorage.getItem('rememberMe') === 'true';
        //  if obtained, write into the inputText
        if (storedRememberMe && storedAccount) {
            setAccount(storedAccount);
            setPassword(storedPassword);
            setRememberMe(storedRememberMe);
        }
    }, []);

    //  handle form submission
    const handleSubmit = () => {
        // TO DO: execute login logic
        login(account,password).then(res => {
            navigate("/dashboard");
        }).catch(err => {
            alert(err)
        })
        //  execute 'stay logged in' logic
        if (rememberMe) {   //  if true, store info locally
            localStorage.setItem('account', account);
            localStorage.setItem('password', password);
            localStorage.setItem('rememberMe', true);
        } else {
            localStorage.removeItem('account');
            localStorage.removeItem('password');
            localStorage.removeItem('rememberMe');
        }
    }

    return (
        <StyledBackgroundDiv>
            <StyledLoginFrameDiv>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p className={"description"}>Account</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputText des={"Account"} inputType={"text"} value={account} onChange={setAccount}></InputText>
                            </td>
                            <td>
                                <a className={"url"} href={""}>Sign up</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className={"description"}>Password</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <InputText des={"Password"} inputType={"password"} value={password} onChange={setPassword}></InputText>
                            </td>
                            <td>
                                <a className={"url"} href={""}>Forget key</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CheckBox des={"Stay logged in"} value={rememberMe} onChange={setRememberMe}></CheckBox>
                            </td>
                        </tr>
                        <tr className={"centered-row"}>
                            <td className={"centered-cell"}>
                                <button className={"btn"} onClick={handleSubmit}> Log in </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </StyledLoginFrameDiv>
        </StyledBackgroundDiv>
    );
}



