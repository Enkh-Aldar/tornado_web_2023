import { useState } from "react"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import Header from "./Header";
import Footer from "./Footer";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            if (user) {
                localStorage.setItem("authenticated", JSON.stringify({ email: user.email, uid: user.uid }));
            }
        }).catch((error) => {
            console.error(error);
        })
    };

    return (
        <div className="bg-white rounded-[34px] flex-col justify-start items-center gap-[49px] flex mx-auto m-0">
            <Header />
            <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-[477px] h-6 flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="text-amber-600 text-xl font-bold font-['Inter'] px-2">Нэвтрэх</div>
                </div>

                <form onSubmit={handleLogin} className="mx-auto max-w-[30%] flex flex-col border-1 border-black border-solid align-center items-center ">
                    <input
                        type="text"
                        placeholder="И-Мэйл эсвэл утасны дугаар"
                        className="w-[478px] h-[50px] px-6 bg-neutral-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex m-0 mt-0 mb-2 text-slate-600 text-base font-normal font-['Inter'] leading-snug"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Нууц "
                        className="w-[478px] h-[50px] px-6 bg-neutral-100 rounded-[10px] justify-start items-center gap-2.5 inline-flex text-slate-600 text-base font-normal font-['Inter'] leading-snug m-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="m-2 mb-10 w-[478px] h-[54px] px-6 py-3 bg-amber-600 rounded-[10px] justify-center items-center gap-2.5 inline-flex text-center text-white text-base font-medium font-['Inter']">Нэвтрэх</button>

                    <button className="w-[478px] h-[54px] px-6 py-3 bg-white rounded-[10px] border-2 border-orange-200 justify-center items-center gap-2.5 inline-flex text-center text-zinc-900 text-base font-medium font-['Inter'] mt-[-16px]">Gmail-ээр нэвтрэх</button>
                    <button className="w-[478px] h-[54px] px-6 py-3 bg-white rounded-[10px] border-2 border-orange-200 justify-center items-center gap-2.5 inline-flex text-center text-zinc-900 text-base font-medium font-['Inter'] mt-6">Facebook-ээр нэвтрэх</button>

                    <div className="w-[478px] h-5 justify-center items-center gap-[25px] inline-flex mt-6">
                        <div className="w-[120px] h-[0px] border border-gray-200"></div>
                        <div className="ext-zinc-400 text-sm font-normal font-['Okta Neue'] leading-tight">эсвэл</div>
                        <div className="w-[120px] h-[0px] border border-gray-200"></div>
                    </div>

                        <button className="w-[478px] h-[54px] px-6 py-3 bg-white rounded-[10px] border-2 border-amber-600 justify-center items-center gap-2.5 inline-flex mt-6 text-center text-zinc-900 text-base font-medium font-['Inter']">Бүртгүүлэх</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Login;