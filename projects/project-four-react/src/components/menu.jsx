import React, { Children } from "react";

const Menu = ({ imgFrame, title, children}) => {

    // const sideMenu = Children.map(p => <Menu 

    // />)

    return (
        <div className="flex flex-col justify-center items-start gap-2">
                <div className="flex w-[250px] items-start rounded px-4 py-2">
                    <p className="text-[color:var(--grey-light-grey-1,#242A31)] text-sm not-italic font-normal leading-[21px]">{title}</p>
                </div>
                <div className="flex w-[250px] items-start rounded px-4 py-2">
                    <p className="text-[color:var(--grey-light-grey-1,#242A31)] text-sm not-italic font-normal leading-[21px]">{title}</p>
                </div>
                <div className="flex w-[250px] items-start rounded px-4 py-2">
                    <p className="text-[color:var(--grey-light-grey-1,#242A31)] text-sm not-italic font-normal leading-[21px]">{title}</p>
                </div>
                <div className="flex w-[250px] items-start rounded px-4 py-2">
                    <p className="text-[color:var(--grey-light-grey-1,#242A31)] text-sm not-italic font-normal leading-[21px]">{title}</p>
                </div>
            </div>
    )
}
export default Menu;