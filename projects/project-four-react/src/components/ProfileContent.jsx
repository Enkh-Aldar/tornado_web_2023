import React, { Children } from "react";
import SubProfile from "./SubProfile";

const ProfileContent = ({ title, imgProfile, imgAngle, imgUrl, imgHeart, imgFacebook, Share, number }) => {

    const subProfiles = Children.map((p, index) => <SubProfile key={index} title={p.title} imgAngle={p.imgAngle} />)

    return (
        <div>
            {subProfiles}
            <div className="flex w-[310px] h-[61px] flex-col justify-center items-start gap-4 px-0 py-6 rounded-[20px]">
                <div className="flex w-[310px] justify-between items-center">
                    <div className="w-[198px] h-[60px] shrink-0">
                        <div className="inline-flex items-center gap-2.5">{imgProfile}</div>
                        <div className="text-[color:var(--Text,#333)] text-lg not-italic font-semibold leading-[normal]">Tracey Wilson</div>
                    </div>
                    <div className="text-[color:var(--Blue-1,#2F80ED)] text-lg not-italic font-semibold leading-[normal]">Follow</div>
                </div>
            </div>
            <div className="w-[897px] h-80">{imgUrl}</div>
            <div className="w-[341.298px] text-[color:var(--grey-light-grey-1,#242A31)] text-[29px] not-italic font-semibold leading-[43px]">Theme Installation</div>
            <div className="flex w-[898px] justify-between items-center">
                <div className="flex w-[139px] items-center gap-2.5 shrink-0">
                    <div className="w-6 h-6 shrink-0 opacity-[0.32]">{imgHeart}</div>
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-4">
                            <div className="text-[color:var(--Text-Color,#151411)] text-xl not-italic font-medium leading-[130%] tracking-[0.2px]">{number}</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 p-[5px] rounded-[5px]">
                    <div className="w-4 h-4">{imgFacebook}</div>
                    <div className="text-[color:var(--grey-dark-white,#F9FCFF)] text-[15px] not-italic font-medium leading-[130%] tracking-[0.15px]">{Share}</div>
                </div>
            </div>
            <div className="w-[890px] text-[color:var(--grey-light-grey-1,#242A31)] text-xl not-italic font-normal leading-[30px]">Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour.</div>
            <div className="w-[769.233px] h-[57px]">
                <div className="w-[647.153px] text-[color:var(--grey-light-grey-1,#242A31)] text-base not-italic font-normal leading-6">• By the end of step 3: You’ll be up and ready to serve customers</div>
                <div className="w-[769.233px] text-[color:var(--grey-light-grey-1,#242A31)] text-base not-italic font-normal leading-6">• By the end of step 6: Your team will be smiling and at their most productive.</div>
            </div>
            <div className="w-[429.248px] h-[194px]">
                <div className="w-[429.248px] h-[194px] shrink-0">
                    <div className="w-[429.248px] text-[color:var(--grey-light-grey-1,#242A31)] text-[23px] not-italic font-semibold leading-[35px]">The 6 steps to setup success</div>
                    <ol className="w-[343.923px] text-[color:var(--grey-light-grey-1,#242A31)] text-base not-italic font-normal leading-6">
                        <li>Get your email into Help Scout</li>
                        <li>Customize your Mailbox</li>
                        <li>Collaborate with a friend</li>
                        <li>Get organized and optimized</li>
                        <li>Integrate your favorite apps</li>
                        <li>What’s up, Docs?</li>
                    </ol>
                </div>
            </div>
            <div className="w-[819.115px] h-[101px]">
                <div className="w-[374.115px] text-[color:var(--grey-light-grey-1,#242A31)] text-[23px] not-italic font-semibold leading-[35px]">Parent Theme Installation</div>
                <div className="w-[819.115px] text-[color:var(--grey-light-grey-1,#242A31)] text-base not-italic font-normal leading-6">When you unzip the downloaded file, you will see a bunch of folders. The most important one is the THEME folder which contains the installable theme .ZIP.</div>
            </div>
            <div className="w-[890px] h-[1707px]">
                <div className="w-[354.425px] text-[color:var(--grey-light-grey-1,#242A31)] text-[23px] not-italic font-semibold leading-[35px]">Child Theme Installation</div>
                <div className="w-[890px] text-[color:var(--grey-light-grey-1,#242A31)] text-base not-italic font-normal leading-6">If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                    This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.


                    Once you have both parent and child themes installed, you need to activate the child one.
                    If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                    This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.


                    Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                    This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.


                    Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                    This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.


                    Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                    This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.


                    Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                    This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.


                    Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                    This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.


                    Once you have both parent and child themes installed, you need to activate the child one.

                    Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.

                    This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.


                    Once you have both parent and child themes installed, you need to activate the child one.
                    Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.
                </div>
            </div>
        </div>
    )
}
export default ProfileContent;