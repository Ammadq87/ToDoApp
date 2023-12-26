import '../styles/Home.css'
import Today from "../components/Today";
import Menu from '../components/Menu';
import TaskDetails from '../components/TaskDetails';

export default function Home() {
    return (
        <>
            <div className="Home">
                <Menu/>
                <Today/>
                <TaskDetails/>
            </div>
        </>
    );
}