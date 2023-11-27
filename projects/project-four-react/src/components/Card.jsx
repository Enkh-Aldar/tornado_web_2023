import React from "react";


const Card = ({ about, author, date, imgProfile, imgHeart, imgFacebook, imgUrl, share, number }) => {
    return (
        <div className="p-2.5 bg-white rounded-lg shadow flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col justify-start items-start gap-[5px] flex">
                <img src={imgUrl} alt="" className="w-[210px] h-[140px] rounded-lg" />
                <div className="w-[198.82px] text-gray-900 text-base font-semibold font-['Inter'] leading-[18px]">{about}</div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
                <div className="w-[210px] justify-between items-center inline-flex">
                    <div className="w-[91.13px] h-[20.71px] justify-start items-center gap-1 flex">
                        <img src={imgProfile} alt="" className="w-[21px] h-[21px] rounded-2xl" />
                        <div className="text-neutral-400 text-sm font-medium font-['Work Sans'] leading-[14px]">{author}</div>
                    </div>
                    <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-[10.98px]">{date}</div>
                </div>
            </div>
            <div className="w-[209px] justify-between items-center inline-flex">
                <div className="justify-start items-center gap-1 flex">
                    <div className="w-5 h-5 relative">
                        <img src={imgHeart} alt="" />
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="justify-start items-center gap-4 inline-flex">
                            <div className="text-neutral-900 text-base font-medium font-['Inter'] leading-tight tracking-tight">{number}</div>
                        </div>
                    </div>
                </div>
                <div className="p-[5px] bg-blue-500 rounded-[5px] justify-start items-center gap-1 flex">
                    <div className="w-4 h-4 relative">
                        <img src={imgFacebook} alt="" />
                    </div>
                    <div className="text-slate-50 text-[15px] font-medium font-['Inter'] leading-tight tracking-tight">{share}</div>
                </div>
            </div>
        </div>
    )
}

export default Card