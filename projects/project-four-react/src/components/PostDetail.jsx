import { useState } from "react";
import { useNavigate } from "react-router"
import SideBar from "./SideBar";
import Header from "./Header";


const PostDetail = () => {

    const navigate = useNavigate();


    return (
        <div className="w-[1440px] h-[3323px] relative bg-white">
            <div className="w-[898px] h-[2850px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="h-10 justify-start items-center gap-[5px] inline-flex">
                    <div className="w-[156px] h-[39px] px-4 py-2.5 justify-start items-center gap-[5px] flex">
                        <div className="text-center text-slate-600 text-lg font-medium font-['Inter']">Нүүр хуудас</div>
                        <img src="u_angle-right-b.jpg" className="w-6 h-6 relative origin-top-left" alt="" />
                    </div>
                    <div className="w-[156px] h-[39px] px-4 py-2.5 justify-start items-center gap-[5px] flex">
                        <div className="text-center text-slate-600 text-lg font-medium font-['Inter']">Lifestyle</div>
                        <img src="u_angle-right-b.jpg" className="w-6 h-6 relative origin-top-left" alt="" />
                    </div>
                    <div className="w-[156px] h-[39px] px-4 py-2.5 justify-start items-center gap-[5px] flex">
                        <div className="text-center text-slate-600 text-lg font-medium font-['Inter']">Hobby</div>
                        <img src="u_angle-right-b.jpg" className="w-6 h-6 relative origin-top-left" alt="" />
                    </div>
                    <div className="w-[156px] h-[39px] px-4 py-2.5 justify-start items-center gap-[5px] flex">
                        <div className="text-center text-slate-600 text-lg font-['Inter'] font-bold">Theme installation</div>
                    </div>
                    <div className="w-[310px] h-[61px] py-6 bg-white rounded-[20px] flex-col justify-center items-start gap-4 inline-flex">
                        <div className="w-[310px] justify-between items-center inline-flex">
                            <div className="w-[198px] h-[60px] relative">
                                <div className="w-[60px] h-[60px] left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
                                    <img src="Image.jpg" className="w-[60px] h-[60px] rounded-full" alt="" />
                                </div>
                                <div className="left-[70px] top-[19px] absolute text-zinc-800 text-lg font-semibold font-['Inter']">Tracey Willson</div>
                            </div>
                            <div className="text-blue-500 text-lg font-semibold font-['Inter']">Follow</div>
                        </div>
                    </div>
                    <img src="Rectangle 2.jpg" className="w-[897px] h-80 rounded-lg" alt="" />
                    <div className="w-[341.30px] text-black text-opacity-20 text-[29px] font-semibold font-['Inter'] leading-[43px]">Theme Installation</div>
                    <div className="w-[898px] h-[29px] justify-between items-center inline-flex">
                        <div className="h-[26px] justify-start items-center gap-2.5 flex">
                            <img src="u_heart.png" className="w-6 h-6 relative opacity-30" alt="" />
                            <div className="flex-col justify-start items-start inline-flex">
                                <div className="justify-start items-center gap-4 inline-flex">
                                    <div className="text-neutral-900 text-xl font-medium font-['Inter'] leading-relaxed tracking-tight">23</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-[5px] bg-blue-500 rounded-[5px] justify-start items-center gap-1 flex">
                            <img src="u_facebook-f.png" className="w-4 h-4 relative" alt="" />
                            <div className="text-slate-50 text-[15px] font-medium font-['Inter'] leading-tight tracking-tight">Share</div>
                        </div>
                    </div>
                    <div className="w-[890px] text-black text-opacity-20 text-xl font-normal font-['Inter'] leading-[30px]">Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If you'd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour. </div>
                    <ul className="w-[769.23px] h-[57px] relative">
                        <li className="w-[647.15px] left-0 top-0 absolute text-black text-opacity-20 text-base font-normal font-['Inter'] leading-normal">By the end of step 3: You’ll be up and ready to serve customers </li>
                        <li className="w-[769.23px] left-0 top-[33px] absolute text-black text-opacity-20 text-base font-normal font-['Inter'] leading-normal">By the end of step 6: Your team will be smiling and at their most productive.</li>
                    </ul>
                    <div className="w-[429.25px] text-black text-opacity-20 text-[23px] font-semibold font-['Inter'] leading-[35px]">The 6 steps to setup success</div>
                    <ol className="w-[343.92px] text-black text-opacity-20 text-base font-normal font-['Inter'] leading-normal">
                        <li>Get your email into Help Scout</li>
                        <li>Customize your Mailbox</li>
                        <li>Collaborate with a friend</li>
                        <li>Get organized and optimized</li>
                        <li>Integrate your favorite apps</li>
                        <li>What’s up, Docs?</li>
                    </ol>
                    <div className="w-[819.12px] text-black text-opacity-20 text-base font-normal font-['Inter'] leading-normal">Take 10-20 minutes on each step per day to get set up in a week, or be an overachiever and knock through all of them in a couple of hours.</div>
                    <div className="w-[374.12px] text-black text-opacity-20 text-[23px] font-semibold font-['Inter'] leading-[35px]">Parent Theme Installation</div>
                    <div className="w-[819.12px] text-black text-opacity-20 text-base font-normal font-['Inter'] leading-normal">When you unzip the downloaded file, you will see a bunch of folders. The most important one is the THEME folder which contains the installable theme .ZIP.</div>
                    <div className="w-[354.42px] text-black text-opacity-20 text-[23px] font-semibold font-['Inter'] leading-[35px]">Child Theme Installation</div>
                    <div className="w-[890px] text-black text-opacity-20 text-base font-normal font-['Inter'] leading-normal">If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.
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
                        Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.
                        This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.
                        Once you have both parent and child themes installed, you need to activate the child one.Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.
                        This documentation assumes that you are running the child theme, so it is highly recommended to install it. The Child theme .ZIP can be found in Child Theme folder. Install it in exactly the same way as parent theme, described in previous steps.
                        Once you have both parent and child themes installed, you need to activate the child one.Once you have both parent and child themes installed, you need to activate the child one.If you don’t know what a WordPress child theme is, please read this article in the WordPress codex. The article also explains how to create a child theme, but don’t worry, the Lore child theme is already included in the package.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostDetail;