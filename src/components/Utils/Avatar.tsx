
import avatarImage from '../../assets/avatar.png'; // Import the image file

export default function Avatar() {
  return (
    <img className='mt-4' 
      src={avatarImage} 
      alt="Avatar" 
      style={{
        width: '35vw', // Set width to cover 25% of the viewport width
        height: '80vh', // Set height to cover 60% of the viewport height
        
      
      }}
    /> 
  );
}
