import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const onSubmit = () => {}

    const onChange =() => {}

    return (
        <form>
            <Input name="email" placeholder="email" type="email" mb={2} onChange={() => {}} />
            <Input name="password" placeholder="password" type="password" onChange={() => {}} />
            <Button type="submit">Log In</Button>
        </form>
    )
}
export default Login;