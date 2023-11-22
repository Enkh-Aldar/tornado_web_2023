const SideBar = () => {
    return (
        <div className="w-80 h-full inline-flex p-10 items-start flex-col shrink-0 gap-2.5 border-r ">
            <img src="Group.jpg" alt="" className="flex" />
            <div className="absolute left-16 w-16 h-11 shrink-0 color-#F77268">
                <h1 className="text-red-400 font-sans text-3xl not-italic font-normal leading-none">iBlog</h1>
            </div>
        </div>
    )
}
export default SideBar;