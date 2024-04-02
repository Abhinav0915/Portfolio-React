import { motion } from "framer-motion";

function EducationAndExperienceHeading(){
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 1 } 
        }
    };
    return(
        <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        >
        <h1 
        className="text-6xl text-center text-white mt-8" 
        style={{fontFamily: '"Poppins", sans-serif'}}>
            <span style={{color: '#06d6a0'}}>Experience </span> And <span style={{color: '#06d6a0'}}> Education </span></h1>
        </motion.div>
    )
}

export default EducationAndExperienceHeading;