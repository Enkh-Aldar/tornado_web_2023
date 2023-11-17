import './App.css'
import HeaderLine from './components/HeaderLine'
import Image from './components/Image'
import ProfileCard from './components/ProfileCard';
import ProfileInfo from './components/ProfileInfo'

export default function App() {
  return (
    <div>
      {/* <Image /> */}
      {/* <HeaderLine /> */}
      <div className="profile-into">
        {/* <ProfileInfo /> */}
        <ProfileCard />
      </div>
    </div>
  );
}
