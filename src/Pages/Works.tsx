

import WorkHeading from '../components/Works/WorkHeading';
import Navbar from '../components/Utils/NavBar';
import WorkCards from '../components/Utils/WorkCards';
import { motion } from 'framer-motion';


export default function Works(){
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 0.5, duration: 2 } 
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


    return(
      <>
     
            <Navbar/>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <WorkHeading/>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <WorkCards/>
            </motion.div>
          
          </>
    )
}