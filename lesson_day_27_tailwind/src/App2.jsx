import './App.css'
import ProfileInfo from './components/ProfileInfo';
import ProfileCard from './components/ProfileCard';
import HeaderLine from './components/HeaderLine';
import Image from './components/Image';
export default function App() {
  return (
    <div>
      {/* <HeaderLine /> */}
      <div className="font-sans flex items-center justify-center h-screen m-0 bg-slate-50">
        {/* <Image /> */}
        {/* <ProfileInfo /> */}
        <ProfileCard />
      </div>
    </div>
  );
}