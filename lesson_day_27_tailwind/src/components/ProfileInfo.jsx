import '../App.css'

function ProfileInfo() {
    return (
        <div>
            <p className="m-2.5 m-0"><strong>About Me:</strong> Brief description or bio goes here.</p>
            <p className="m-2.5 m-0"><strong>Skills:</strong> Skill 1, Skill 2, Skill 3</p>
            <p className="m-2.5 m-0"><strong>Contact:</strong><a href="mailto:your.email@example.com" className="text-gray-50 no-underline hover:bg-orange"> your.email@example.com</a></p>
        </div>
    );
}
export default ProfileInfo;