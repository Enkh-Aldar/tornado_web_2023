import React from "react";
import Card from "./Card";

const CardsCategory = ({ title, seeAll, imgAngle, imgRight, imgLeft, cards }) => {

    const categoryCards = cards.map((p, index) => <Card
        key={index}
        about={p.about}
        author={p.author}
        date={p.date}
        imgFacebook={p.imgFacebook}
        imgHeart={p.imgHeart}
        imgUrl={p.imgUrl}
        share={p.share}
        number={p.number}
        imgProfile={p.imgProfile}
        imgLeft={p.imgLeft}
    />);

    return (
        <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[982px] justify-start items-start gap-[18.20px] inline-flex">
                <div className="w-[982px] h-[47.33px] justify-between items-center inline-flex">
                    <div className="px-[18.20px] py-[10.92px] justify-center items-center gap-[9.10px] flex">
                        <div className="text-neutral-900 text-lg font-bold font-['Inter'] uppercase leading-normal">{title}</div>
                    </div>
                    <div className="w-[116.50px] h-[47.33px] px-[13.65px] rounded-[10.92px] justify-end items-center gap-[10.92px] flex">
                        <div className="text-center text-slate-600 text-base font-medium font-['Inter'] leading-7">{seeAll}</div>
                        <div className="w-[21.84px] h-[21.84px] relative">
                            <img src={imgAngle} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[982px] h-[289px] relative">
                <div className="left-0 top-0 absolute justify-start items-start gap-[22px] inline-flex">
                    {categoryCards}
                    <div className="w-[53px] h-[53px] left-[985px] top-[135.67px] absolute justify-end items-center gap-4 flex">
                        <div className="w-[52px] h-[52px] p-2.5 origin-top-left relative left-[-890px] rotate-180 bg-white rounded-[50px] shadow justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 relative origin-top-left left-[3px] rotate-180">
                                <div className="w-6 h-6 left-[-22px] top-[-24px] absolute">
                                    <img src={imgLeft} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[52px] h-[52px] p-2.5 origin-top-left relative left-[-9px] rotate-180 bg-white rounded-[50px] shadow justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 relative origin-top-left rotate-180">
                                <div className="w-6 h-6 left-[-22px] top-[-24px] absolute">
                                    <img src={imgRight} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardsCategory;