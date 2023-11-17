import '../App.css';

function ProfileCard(){
    return(
        <div className="profile-card">
            <img src="profile-picture.jpg" alt="Your name" className="profile-img"></img>
                <h1>Your Name</h1>
                <p>Your Proffesion or Tagline</p>
                <div className="profile-info">
                    <p><strong>About Me:</strong> Brief description or bio goes here.</p>
                    <p><strong>Skills:</strong> Skill 1, Skill 2, Skill 3</p>
                    <p><strong>Contact:</strong><a href="mailto:your.email@example.com"> your.email@example.com</a></p>
                </div>
        </div>
    );
}
export default ProfileCard;