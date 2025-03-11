import Navbar from '../components/Utils/NavBar'; 
import { motion } from "framer-motion";
import Type from '../components/Home/Type';
import SocialApps from '../components/Home/SocialApps';

export default function Homepage () {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 0.5, duration: 1 } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1 } 
    }
  };

  return (
    <> 
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
  
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            right: 0, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingBottom: '2em' // Optional: Add some padding at the bottom
          }}
        >
          <div className='text-center text-white'>
            <p className='text-3xl'>FIND ME ON</p>
            <p className='mt-4 mb-2' style={{fontSize: '12px'}}>Please don't hesitate to reach out to me and <span style={{color: '#06d6a0'}}>connect</span>.</p>
            <SocialApps/>
          </div>
        </motion.div>
    </>
  );
}