import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import Header from "./Header";
import Footer from "./Footer";

const UserRegister = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleUserRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, username, password, repeatPassword).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            if (user) {
                navigate('/register');
            }
        }).catch((error) => {
            console.error(error);
        });
    }
        return (
        <div className="w-[608px] h-[422px] px-[65px] py-[45px] bg-white rounded-[34px] flex-col justify-start items-center gap-[49px] flex mx-auto m-0">
            <Header />
            <div className="w-[478px] h-[332px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="h-6 flex-col justify-start items-start gap-[5px] flex">
                    <div className="text-amber-600 text-xl font-bold font-['Inter']">Бүртгүүлэх</div>
                </div>
                <form onSubmit={handleUserRegister} className="mx-auto max-w-[30%] flex flex-col border-1 border-black border-solid align-center items-center mt-0">

                    <input
                        type="text"
                        placeholder="Нэр"
                        className="w-[478px] h-[50px] px-6 bg-neutral-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex m-2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Нууц үг зохиох"
                        className="w-[478px] h-[50px] px-6 bg-neutral-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex  m-2 mt-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Нууц үг давтах"
                        className="w-[478px] h-[50px] px-6 bg-neutral-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex m-2 mt-3"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <button type="submit" className="w-[478px] h-[54px] px-6 py-3 rounded-[10px] border-2 bg-amber-600 border-amber-600 justify-center items-center gap-2.5 inline-flex mt-6 text-center text-white text-base font-medium font-['Inter']">Бүртгүүлэх</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
export default UserRegister;