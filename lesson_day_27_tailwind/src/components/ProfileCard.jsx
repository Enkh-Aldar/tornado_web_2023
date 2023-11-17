import '../App.css';

function ProfileCard() {
    return (
        <div className="bg-slate-200 shadow-md w-80 p-5 text-center rounded-xl">
            <img src="profile-picture.jpg" alt="" className="w-32 h-40 rounded-full m-auto m-0"></img>
            <h1 className="text-4xl font-weight 700 m-5 ">Your Name</h1>
            <p className="text-base font-weight 700 m-4">Your Proffession or Tagline</p>
            <div>
                <p className="m-2.5 m-0"><strong>About Me:</strong> Brief description or bio goes here.</p>
                <p className="m-2.5 m-0"><strong>Skills:</strong> Skill 1, Skill 2, Skill 3</p>
                <p className="m-2.5 m-0"><strong>Contact:</strong><a href="mailto:your.email@example.com" className="no-underline hover:text-orange"> your.email@example.com</a></p>
            </div>
        </div>
    );
}
export default ProfileCard;