/* eslint-disable no-unused-vars,react/prop-types */
import {useState} from "react";
import styled from "styled-components";
import {login} from "../../api/system/user.js"
import { useNavigate } from "react-router-dom";


let Background = styled.body`
        background-color: #1a1a1a;
        justify-content: center;
        align-items: center;
    `;
let LoginFrame = styled.div`
        background-color: #232323;
        background-size: 100%, 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        width: 20%;

        .description {
            font-size: 1em;
            margin-top: 10px;
            margin-bottom: 8px;
        }

        .inputText {
            height: 3vh;
            width: 200px;
        }

        .url {
            font-size: 0.6em;
        }

        .btn {
            display: flex;
        }
    `;
export default function LoginPage() {
    //  manage input statement
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    //  handle form submission
    const handleSubmit = () => {
        // TO DO: execute login logic
        login(account,password).then(res => {
            navigate("/dashboard");
        }).catch(err => {
            alert(err)
        })
    }



    return (
        <Background>
            <LoginFrame>
                <form>
                    <InputText value={account} onChange={setAccount}></InputText>
                    <a className={"url"} href={""}> 注册账号 </a><br/>
                    <InputText value={password} onChange={setPassword}></InputText>
                    <a className={"url"} href={""}> 忘记密码 </a><br/>
                </form>
                <button className={"btn"} onClick={handleSubmit}> Log in</button>
            </LoginFrame>
        </Background>
    );
}

import React from 'react';

const InputText = ({ value, onChange }) => {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            value={value}
            onChange={handleInputChange}
        />
    );
};

