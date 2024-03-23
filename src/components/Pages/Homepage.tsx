import Navbar from '../Utils/NavBar'; 
import Background from '../../assets/background.webp'; 
import Avatar from '../Utils/Avatar';
import IntroText from '../Utils/IntroText';


export default function Homepage() {
  return (
    <div style={{ 
      backgroundImage: `url(${Background})`, // Apply the background image
      backgroundSize: 'cover', // Adjust the background size as needed
      backgroundPosition: 'center', // Adjust the background position as needed
      minHeight: '100vh', // Set a minimum height to cover the entire viewport
    }}>
      <Navbar />
   

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <IntroText/>
      <Avatar/>
      </div>
      

    

    </div>
  );
}
