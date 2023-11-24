const Header = () =>{
    return (
        <header className="flex w-[1091px] justify-end items-start gap-[116px] border-b-[color:var(--grey-light-grey-3,#E2E8EE)] px-12 py-[39px] border-b border-solid">
            <div className="flex w-[572px] h-[39px] justify-between items-center shrink-0 border px-[25px] py-0 rounded-[20px] border-solid border-[#D2D8D4]">
                <p className="flex w-[39px] h-4 flex-col justify-center shrink-0 text-[#898886] text-base not-italic font-normal leading-[normal]">Хайх</p>
                <div className="flex w-5 h-5 justify-center items-center shrink-0">
                    <img src="search-normal.jpg" alt="" className="w-5 h-5 shrink-0" />
                </div>
            </div>
            <div className="flex justify-end items-start gap-3.5">
                <div className="flex justify-center items-center gap-2.5 border border-[color:var(--grey-dark-grey-4,#DCE3EA)] px-[30px] py-2.5 rounded-[10px] border-solid bg-[#FFF]">
                    <p className="text-[color:var(--iblog-primary,#E86B02)] text-base not-italic font-semibold leading-[21px]">Бүртгүүлэх</p>
                </div>
                <div className="flex justify-center items-center gap-2.5 px-[30px] py-2.5 rounded-[10px] bg-[#E86B02]">
                    <p className="text-white text-[15px] not-italic font-medium leading-[21px]">Нэвтрэх</p>
                </div>
            </div>
            <div className="flex w-[572px] h-[39px] justify-center items-start gap-[98px] absolute right-[259px] top-[39px]"></div>
        </header>
    )
}
export default Header;