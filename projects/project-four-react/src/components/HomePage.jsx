import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ReadMore from "./ReadMore";
import SideBar from "./SideBar";
import Profile from "./PostDetail";

const HomePage = () => {
    return (
        <div className="flex max-w-[1440px] max-h-[1802px] m-auto m-0">
            <div className="w-[1440px] h-[1802px] bg-[#FFF] mr-0">
                <SideBar />
            </div>
            <div>
                <Header />
                <div className="mb-5 flex justify-center">
                    <Outlet />
                </div>
                <div className="flex justify-center mb-60">
                    <ReadMore />
                </div>
                <div className="mt-40">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default HomePage;