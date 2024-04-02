import { motion } from "framer-motion";

function ToolsHeading(){
   
      
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.2, duration: 1 } 
        }
    };

    return(
        <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            >
        <h1 className="text-6xl text-center text-white mt-8" style={{fontFamily: '"Poppins", sans-serif'}}>Passionated <span style={{color: '#06d6a0'}}>Tools</span></h1>
        </motion.div>
          
    )
}

export default ToolsHeading;