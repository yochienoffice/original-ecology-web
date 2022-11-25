/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./index.css";


const SignUp = () => {
    //註冊介面
    const [username, setUsername] = useState("Yoyo Chien");
    const [password, setPassword] = useState("00000000");
    const [gender, setGender] = useState({id: null, gender: null});
    const [birthday, setBirthday] = useState("1993/10/01");
    const [subscription, setSubscription] = useState(false);

    const checkboxTest= useRef(false);

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

    function onGenderChange(e) {
        if(e.target.checked) {
            setGender({id: null, gender: null});
        }
        else {
            
        }
        
        console.log(checkboxTest.current.value);
    }

    function onBirthdayChange(e) {
        setBirthday(e.target.value);
    }

    function isSubscription(e) {
        setSubscription(e.target.value);
    }

    function createUser() {
        console.log("使用者名稱: " + username);
        console.log("密碼: " + password);
        console.log("性別: " + gender);
        console.log("生日: " + birthday);
        console.log("訂閱電子報: " + subscription);
        navigate('/', {replace: false});
    }
    
    return (
        <div className="login-form">
            <Form className="login-form-container">
                <Form.Label>註冊會員</Form.Label>
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
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>確認密碼</Form.Label>
                    <Form.Control type="password" placeholder="請再次輸入密碼" onChange={onPasswordChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGenderCheckbox">
                    <Form.Label>性別</Form.Label>
                    <Form.Check ref={checkboxTest} type="checkbox" label="男" value={"M"} id="maleCheckbox" checked={gender.gender === "M"} onChange={onGenderChange} />
                    <Form.Check ref={checkboxTest} type="checkbox" label="女" value={"F"} id="femaleCheckbox" checked={gender.gender === "F"} onChange={onGenderChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSubscribeCheckbox">
                    <Form.Check type="checkbox" label="訂閱電子報" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={createUser}>
                    建立帳號
                </Button>
            </Form>
        </div>
        
    )
}

export default SignUp;