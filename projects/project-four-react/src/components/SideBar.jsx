import { useState } from "react";
import { menus } from "../data/menu";
import Menu from "./Menu";
import { useNavigate } from "react-router";

const SideBar = () => {

    const [profileState, setProfileState] = useState(menus);

    const sideMenu = profileState.map((p, index) => <Menu 
        key={index}
        imgFrame={p.imgFrame}
        title={p.title}
        children={p.children}
    />)
    
    const navigate = useNavigate();

    const navigateToHome = (e) => {

        e.preventDefault();
        navigate('/');

    }

    return (
        <div className="inline-flex w-[348px] h-[1802px] flex-col items-start gap-2.5 shrink-0 border-r-[color:var(--grey-light-grey-3,#E2E8EE)] px-[49px] py-10 border-r border-solid">
            <div className="flex flex-col items-start gap-[45px]">
                <div className="w-[91.617px] h-[46px] flex">
                    <img src="Group.jpg" alt="" className="w-[20.007px] h-[26.704px] shrink-0" />
                    <div className="w-[70px] h-[46px] shrink-0">
                        <h1 type="submit" onClick={navigateToHome} className="text-[#FC9419] text-3xl not-italic font-normal leading-[normal]">iblog</h1>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-9">
                    <div className="flex w-[250px] flex-col items-start gap-8">
                        {sideMenu}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar;