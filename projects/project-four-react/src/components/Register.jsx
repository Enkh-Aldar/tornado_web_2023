import { useState } from "react"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            if (user) {
                navigate("/login");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    const navigateToUserRegister = (e) => {

        e.preventDefault();
        navigate('/userRegister');
    }
    return (
        <div className="w-[608px] h-[422px] px-[65px] py-[45px] bg-white rounded-[34px] flex-col justify-start items-center gap-[49px] flex mx-auto m-0">
            <Header />
            <div className="w-[478px] h-[332px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="h-6 flex-col justify-start items-start gap-[5px] flex">
                    <div className="text-amber-600 text-xl font-bold font-['Inter']">Бүртгүүлэх</div>
                </div>
                <form onSubmit={navigateToUserRegister} className="mx-auto max-w-[30%] flex flex-col border-1 border-black border-solid align-center items-center">
                    <input
                        type="text"
                        placeholder="И-Мэйл эсвэл утасны дугаар"
                        className="w-[478px] h-[50px] px-6 bg-neutral-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex m-2 mt-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <button type="submit" className="w-[478px] h-[54px] px-6 py-3 rounded-[10px] border-2 bg-amber-600 border-amber-600 justify-center items-center gap-2.5 inline-flex mt-6 text-center text-white text-base font-medium font-['Inter']" onClick={navigateToUserRegister}>Бүртгүүлэх</button>
                    <button type="submit" className="w-[478px] h-[54px] px-6 py-3 bg-white rounded-[10px] border-2 border-orange-200 justify-center items-center gap-2.5 inline-flex text-center text-zinc-900 text-base font-medium font-['Inter'] mt-5">Gmail-ээр нэвтрэх</button>
                    <button type="submit" className="w-[478px] h-[54px] px-6 py-3 bg-white rounded-[10px] border-2 border-orange-200 justify-center items-center gap-2.5 inline-flex text-center text-zinc-900 text-base font-medium font-['Inter'] mt-6">Facebook-ээр нэвтрэх</button>

                </form>
            </div>
            <Footer />
        </div>
    );
}
export default Register;