/* eslint-disable no-unused-vars,react/prop-types */
import {useState} from "react";
import styled from "styled-components";

export default function LoginPage() {
    //  manage input statement
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    //  handle form submission
    const handleSubmit = () => {
        // TO DO: execute login logic
        console.log("账号", account);
        console.log("密码", password);
    }

    const Background = styled.body`
        background-color: #1a1a1a;
        justify-content: center;
        align-items: center;
    `;
    const LoginFrame = styled.div`
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

    return (
        <Background>
            <LoginFrame>
                <form>
                    <InputText des={"Account"} inputType={"text"}></InputText>
                    <a className={"url"} href={""}> 注册账号 </a><br/>
                    <InputText des={"Password"} inputType={"password"}></InputText>
                    <a className={"url"} href={""}> 忘记密码 </a><br/>
                </form>
                <button className={"btn"} onClick={handleSubmit}> Log in</button>
            </LoginFrame>
        </Background>
    );
}

function Background() {
    return <body></body>
}

function LoginFrame() {
    return (
        <div></div>
    );
}

function InputText({ des, inputType }) {
    return (
        <label>
            <p className={"description"}>{des}<br/></p>
            <input className={"inputText"}
                   type={inputType}
                   id={des.toLowerCase()}
                   placeholder={"Enter your " + des.toLowerCase() + " here."}
                   required={true}
            />
        </label>
    )
}