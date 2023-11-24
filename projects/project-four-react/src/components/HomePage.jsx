import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import ReadMore from "./ReadMore";
import SideBar from "./SideBar";

const HomePage = () => {
    return (
        <div className="flex">
            <div className="w-[1440px] h-[1802px] bg-[#FFF]">
                <SideBar />
            </div>
            <div>
                <Header />
                <MainContent />
                <ReadMore />
                <Footer />
            </div>
        </div>
    )
}
export default HomePage;