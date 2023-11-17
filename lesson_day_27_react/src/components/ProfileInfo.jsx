import '../App.css';
import './Image.jsx';

function ProfileInfo(){
    return(
        <div className="profile-info">
            <img src="profile-picture" alt="" />
            <p><strong>About Me:</strong> Brief description or bio goes here.</p>
            <p><strong>Skills:</strong> Skill 1, Skill 2, Skill 3</p>
            <p><strong>Contact:</strong><a href="mailto:your.email@example.com"> your.email@example.com</a></p>
        </div>
    );
}
export default ProfileInfo;