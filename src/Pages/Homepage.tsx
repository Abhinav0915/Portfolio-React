import Navbar from '../components/Utils/NavBar'; 
import Background from '../assets/background.webp'; 
import { motion } from "framer-motion";
import Type from '../components/Home/Type';
import SocialApps from '../components/Home/SocialApps';
import ContactModal from '../components/About/ContactModal';

export default function Homepage () {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1, duration: 2 } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 1 } 
    }
  };
  


  return (
    <> 
    <div style={{ 
      backgroundImage: `url(${Background})`, // Apply the background image
      backgroundSize: 'cover', // Adjust the background size as needed
      backgroundPosition: 'center', // Adjust the background position as needed
      minHeight: '100vh', // Set a minimum height to cover the entire viewport
    }}>
      <Navbar />
      
      <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
         <motion.h1
          variants={itemVariants}
          style={{ display: 'flex', justifyContent: 'center', letterSpacing: 7, fontWeight: 'bolder', userSelect: 'none' }}
          className='mt-10 text-6xl text-white'
        >
          <span className='text-green-500'>&lt;A</span>bhina<span className='text-green-500'>v/&gt;</span>
        </motion.h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delay: 1 }} // Delay appearance of Type by 1 second
        >
          <motion.p
            variants={itemVariants}
            className='text-white text-3xl text-center mt-14'
          >
            <Type/>
          </motion.p>
        </motion.div>
        <ContactModal/>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ delay: 2 }} // Delay appearance of SocialApps by 2 seconds
        >
          <div className='text-center text-white' style={{marginTop: '6em'}} >
            <p className='text-3xl'>FIND ME ON</p>
            <p className='mt-4' style={{fontSize: '12px'}}>Please don't hesitate to reach out to me and <span style={{color: '#06d6a0'}}>connect</span>.</p>
            <SocialApps/>
          </div>
        </motion.div>
      </div>
    </>
   
  );
}
