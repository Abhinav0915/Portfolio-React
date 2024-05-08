import { FaTwitter, FaInstagram,FaGithub, FaLinkedin,FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons library
import { SiLeetcode } from 'react-icons/si';

export default function SocialApps() {
    return (
        <div className="social-apps-container flex flex-wrap justify-center mr-4 mb-4">
            <a href="https://github.com/Abhinav0915" target='_blank'>
                <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/abhinav1506/" target='_blank'>
                <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/Abhinavv1509" target='_blank'>
                <FaTwitter className="social-icon" />
            </a>
            <a href="https://leetcode.com/abhinav1509/" target='_blank'>
                <SiLeetcode className="social-icon" />
            </a>
            <a href="https://wa.me/7565893606" target='_blank'>
                <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://www.instagram.com/_being.abhinav?igsh=Z2dpNXBsMzg0Y2Zj" target='_blank'>
                <FaInstagram className="social-icon" />
            </a>
        </div>
    );
}
