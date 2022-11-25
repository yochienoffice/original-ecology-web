/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import "./index.css";


const Login = () => {
    //註冊介面
    const [username, setUsername] = useState("Yoyo Chien");
    const [password, setPassword] = useState("00000000");

    //Router 換頁參數
    const navigate = useNavigate();

    //Firebase 登入認證

    //註冊元件輸入事件
    function onPasswordChange(e) {
        setPassword(e.target.value);
    }

    function onUsernameChange(e) {
        setUsername(e.target.value);
    }

    function loginUser() {
        console.log("使用者名稱: " + username);
        console.log("密碼: " + password);
        navigate('/', {replace: false});
    }
    
    return (
        <div className="login-form">
            <Form className="login-form-container">
                <Form.Label>登入會員</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>使用者名稱(E-Mail)</Form.Label>
                    <Form.Control type="email" placeholder="請輸入您的電子信箱" onChange={onUsernameChange}/>
                    <Form.Text className="text-muted">
                    *我們不會主動將您的使用者資訊提供給其他人
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>密碼</Form.Label>
                    <Form.Control type="password" placeholder="請輸入密碼" onChange={onPasswordChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={loginUser}>
                    登入
                </Button>
                <Button variant="secondary" type="submit">
                    <FcGoogle />
                </Button>
                <Button variant="secondary" type="submit">
                    <BsFacebook />
                </Button>
            </Form>
        </div>
        
    )
}

export default Login;