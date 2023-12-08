import React from "react";
import SubMenu from "./SubMenu";

const Menu = ({ imgFrame, title, children }) => {

    const subMenus = children.map((p,index) => <SubMenu key={index} title={p.title} />)

    return (
        <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex w-[250px] justify-between items-center">
                <p className="text-[color:var(--grey-light-grey-1,#242A31)] text-sm not-italic font-semibold leading-[normal]">{title}</p>
                <img src={imgFrame} alt="" className="w-3 h-3 shrink-0" />
            </div>
            {subMenus}
            
        </div>
        

    )
}
export default Menu;