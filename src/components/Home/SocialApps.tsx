import { FaTwitter, FaInstagram,FaGithub, FaLinkedin,FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons library
import { SiLeetcode } from 'react-icons/si';

export default function SocialApps() {
    return (
        <div className="social-apps">
            <a href="https://github.com/Abhinav0915">
                <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/abhinav1506/">
                <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/Abhinavv1509">
                <FaTwitter className="social-icon" />
            </a>
            <a href="https://leetcode.com/abhinav1509/">
                <SiLeetcode className="social-icon" />
            </a>
            <a href="https://wa.me/7565893606">
                <FaWhatsapp className="social-icon" />
            </a>
            
            <a href="https://www.instagram.com/_being.abhinav?igsh=Z2dpNXBsMzg0Y2Zj">
                <FaInstagram className="social-icon" />
            </a>
            
        </div>
    );
}
