import React, { useState } from "react";
import CardsCategory from "./CardCategory";
import { profiles } from "../data/data";
import { useParams } from "react-router-dom";

const FilteredContent = () => {
    const { category } = useParams()
    const [profileState, setProfileState] = useState(profiles.filter(p => p.title.toLowerCase().includes(category)))

    const categories = profileState.map((p, index) => <CardsCategory
        key={index}
        title={p.title}
        imgRight={p.imgRight}
        imgLeft={p.imgLeft}
        seeAll={p.seeAll}
        imgAngle={p.imgAngle}
        cards={p.cards}
    />)
    return (
        <div className="w-[982px] h-[1088.99px] flex-col justify-start items-start gap-4 inline-flex">
            {categories}
        </div>
    )
}
export default FilteredContent;