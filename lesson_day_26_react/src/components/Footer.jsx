import '../App.css';

function Footer(){
    return(
        <footer>
        <div className="footer-content">
            <div className="footer-section">
                <h3>About us</h3>
                <p>Information about the company or website.</p>
            </div>
            <div className="footer-section">
                <h3>Contact Information</h3>
                <p>Email: contact@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                <p>Social media links.</p>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; 2023 My Dashboard | Designed by Me
        </div>

    </footer>
    );
}
export default Footer;