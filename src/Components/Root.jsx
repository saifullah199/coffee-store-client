import {Outlet} from "react-router-dom"
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
                 <Navbar/>
            </div>
            <Outlet></Outlet>
            <div className="mt-10">
                
            </div>
        </div>
    );
};

export default Root;