import { useNavigate } from "react-router";

const ReadMore = () => {

    const navigate = useNavigate();

    const navigateToPost = (e) => {

        e.preventDefault
        navigate('/postdetail');

    }
    return (
        <button className="w-[141px] h-12 px-5 py-3 rounded-[10px] border border-zinc-500 border-opacity-30 justify-center items-center gap-3 inline-flex">
            <button type="submit" className="text-zinc-500 text-base font-normal font-['Okta Neue'] leading-normal" onClick={navigateToPost}>Цааш унших</button>
        </button>
    )
}
export default ReadMore;