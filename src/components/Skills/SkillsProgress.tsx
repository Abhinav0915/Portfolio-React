import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";

function SkillsProgress() {
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

    

    const progressData = [
        { label: 'HTML', percentage: 80 },
        { label: 'CSS', percentage: 80 },
        { label: 'JavaScript', percentage: 60 },
        { label: 'React', percentage: 60 },
        { label: 'Node', percentage: 45 },
        { label: 'Java', percentage: 60 },
        { label: 'Python', percentage: 60 },
        { label: 'SQL', percentage: 80 },
        { label: 'C++', percentage: 60 },
        { label: 'SpringBoot', percentage: 70 },
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex justify-center items-center mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" style={{ height: '50%', width: '50%' }}>
                    {progressData.map((item, index) => (
                        <motion.div 
                        
                            key={index}
                            variants={itemVariants}
                            
                        >
                            <div className="flex flex-col items-center p-10">
                                <motion.div
                                    
                                >
                                    <CircularProgressbar
                                    
                                        strokeWidth={10}
                                        value={item.percentage}
                                        text={`${item.percentage}%`}
                                        styles={buildStyles({
                                            pathColor: `rgba(6, 214, 160, ${item.percentage / 100})`,
                                            strokeLinecap: 'round',
                                            textColor: 'white',
                                            textSize: '16px',
                                            trailColor: 'transparent',
                                            pathTransition: 'dashed',
                                            pathTransitionDuration: 0.5,
                                        })}
                                    />
                                </motion.div>
                                <div className="text-center mt-2 text-white">{item.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default SkillsProgress;
