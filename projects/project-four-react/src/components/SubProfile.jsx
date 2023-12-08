import React, { useState } from "react";
import { profileData } from "../data/profileData";

const SubProfile = ({ title, imgAngle }) => {
    return (
            <div className="flex h-10 items-center gap-[5px]">
                <div className="flex w-[156px] h-[39px] items-center gap-[5px] px-4 py-2.5">{title}
                    <div className="w-6 h-6 shrink-0">{imgAngle}</div>
                </div>
            </div>
    )
}
export default SubProfile;