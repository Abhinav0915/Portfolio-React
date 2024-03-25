
import avatarImage from '../../assets/avatar.svg'; // Import the image file

export default function Avatar() {
  return (
    <img 
    className='mt-1 w-2/5 h-1/5' // Tailwind CSS classes for width and height
    src={avatarImage} 
    alt="Avatar" 
  /> 
  );
}
