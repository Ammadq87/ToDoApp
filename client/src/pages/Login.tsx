import Input from "../components/Input"
import Links from "../components/Links";
import '../styles/Login.css'
import { Link } from "../components/Interfaces";

export default function Login() {
    const links: Link[] = [{title: 'Forgot Password?', link: '/resetPassword'},  {title: 'Register', link: '/register'}];
    return (
        <>
            <div className="Container">

                <p className="title">ToDoApp - Login</p>

                <Input title="Email" type="email"/>

                <Input title="Password" type="password"/>

                <Links links={links}/>

                <button>Login</button>
            </div>
        </>
    )
}