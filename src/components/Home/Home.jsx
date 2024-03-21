import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Footer></Footer>
            <h2>This is the home component</h2>

            <Outlet></Outlet>
        </div>
    );
};

export default Home; 