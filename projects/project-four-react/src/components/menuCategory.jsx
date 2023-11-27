import React from "react";
import Menu from "./menu";

const MenuCategory = ({ title, imgFrame, children }) => {

    const sideMenu = children.map(p => <Menu
        title={p.title}
        imgFrame={p.imgFrame}
        children={p.children}
    />);

    return (
        <div>
            <div className="flex w-[250px] justify-between items-center">
                <p className="text-[color:var(--grey-light-grey-1,#242A31)] text-sm not-italic font-semibold leading-[normal]">{title}</p>
                <img src={imgFrame} alt="" className="w-3 h-3 shrink-0" />
            </div>
            {sideMenu}
        </div>
    )
}
export default MenuCategory;