import React, { useState } from "react";
import { profileData } from "../data/profileData";
import ProfileContent from "./ProfileContent";

const Profile = () => {

    const [profileState, setProfileState] = useState(profileData);

    const postDetail = profileState.map((p, index) => <ProfileContent key={index}
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

export default Profile;