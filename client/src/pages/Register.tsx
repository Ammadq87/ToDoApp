import Input from "../components/Input"
import Links from "../components/Links";
import '../styles/Login.css'
import { Link } from "../components/Interfaces";

export default function Register() {
    const links: Link[] = [{title: 'Have an account?', link: '/login'}];
    return (
        <>
            <div className="Container">

                <p className="title">ToDoApp - Register</p>

                <Input title="Name" type="text" required={true}/>
                <Input title="Email" type="email" required={true}/>
                <Input title="Password" type="password" required={true}/>
                <Input title="Confirm Password" type="password" required={true}/>
                <Links links={links}/>

                <button>Register</button>
            </div>
        </>
    )
}