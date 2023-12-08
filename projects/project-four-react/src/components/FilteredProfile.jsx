import React, { useState } from "react";
import { profileData } from "../data/profileData";
import ProfileContent from "./ProfileContent";
import { useParams } from "react-router-dom";

const FilteredProfile = () => {

    const { posts } = useParams()
    const [profileState, setProfileState] = useState(profileData.filter(p => p.title.toLowerCase().includes(posts)))
    const postDetail = profileState.map((p, index) => <ProfileContent 
        key={index}
        title={p.title}
        imgProfile={p.imgProfile}
        imgUrl={p.imgUrl}
        imgFacebook={p.imgFacebook}
        imgHeart={p.imgHeart}
        Share={p.Share}
        number={p.number}
        imgAngle={p.imgAngle}
    />)

    return (
        <div className="flex w-[898px] flex-col items-start gap-4">
            {postDetail}
        </div>
    )
}

export default FilteredProfile;