import React from "react"

const SubMenu = ({ title }) => {
    return (
        <div className="flex w-[250px] items-start rounded px-4 py-2">
            <p className="text-[color:var(--grey-light-grey-1,#242A31)] text-sm not-italic font-normal leading-[21px]">{title}</p>
        </div>
    )
}

export default SubMenu