
import { motion } from 'framer-motion';
import avatarImage from '../../assets/avatar.svg'; // Import the image file

export default function Avatar() {
  return (
    <motion.div
    
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
    >
    <img 
    className='mt-1 w-3/5 h-7/8' 
    src={avatarImage} 
    alt="Avatar" 
  /> 
  </motion.div>
  );
}
