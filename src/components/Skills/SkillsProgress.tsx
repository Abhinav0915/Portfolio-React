import { motion } from "framer-motion";

function SkillsProgress() {
    const skills = [
        { label: 'HTML', level: 4, color: '#FF5733' },
        { label: 'CSS', level: 4, color: '#0077B6' },
        { label: 'JavaScript', level: 3, color: '#F9D342' },
        { label: 'React', level: 3, color: '#61DAFB' },
        { label: 'Node', level: 2, color: '#68A063' },
        { label: 'Java', level: 3, color: '#FF7F50' },
        { label: 'Python', level: 3, color: '#306998' },
        { label: 'SQL', level: 4, color: '#6DBA5A' },
        { label: 'C++', level: 3, color: '#4682B4' },
        { label: 'SpringBoot', level: 3, color: '#6DBA5A' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 rounded-xl"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="text-center text-white font-semibold mb-2">{skill.label}</div>
                        <div className="flex gap-1 justify-center">
                            {[1, 2, 3, 4, 5].map((level) => (
                                <div 
                                    key={level} 
                                    className={`h-2 w-6 rounded-full ${level <= skill.level ? 'bg-opacity-100' : 'bg-opacity-30'}`} 
                                    style={{ backgroundColor: skill.color }}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default SkillsProgress;
