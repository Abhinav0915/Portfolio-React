// import ContactModal from '../components/About/ContactModal';
import PersonalInfo from '../components/About/AdaptiveStats';
import NavBar from '../components/Utils/NavBar';
import ResumeDownload from '../components/Utils/ResumeDownload';
import EducationAndExperienceHeading from '../components/About/EduAndExpHeading';
import Experience from '../components/About/Experiences';
import Education from '../components/About/Education';
import { motion } from 'framer-motion';
import ContactModal from '../components/About/ContactModal';


export default function About(){

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
      transition: { delay: 0.8, duration: 1 } 
    }
  };

  const itemVariants2 = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 1 } 
    }
  };
  
  


    return(
        <>
      <div className="text-white" >
      <NavBar />
      <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
      <div className="flex justify-center items-center py-8 md:py-20 px-4 md:px-8 lg:px-12">
    <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-lg">
        <div className="md:mr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl mt-4 md:mt-0">LET ME <span className="text-green-500">INTRODUCE</span> MYSELF</h1>
            <p className="mt-4 md:mt-12 text-xl">Hi, my name is <span className="text-green-500">Abhinav Saxena</span> and I'm from Bareilly, India.</p>
            <p className="mt-4 text-xl">I completed my B.Tech in Computer Science and Engineering from Bennett University in 2024 with a CGPA of 8.99/10.</p>
            <p className="mt-4 text-xl">Currently, I am working as a <span className="text-green-500">Full-Stack Developer</span>, having gained diverse experience at companies like Esprit Analytique, NEC Corporation India Pvt Ltd, and Wormos.</p>
            <p className="mt-4 text-xl">I am proficient in <span className="text-green-500">Frontend Development</span> and backend technologies, with expertise in languages like JavaScript, Java, Python, Dart, and C++.</p>
            <p className="mt-4 text-xl">I have a passion for working with <span className="text-green-500">React, Django</span>, and databases such as <span className="text-green-500">PostgreSQL, MySQL, and MongoDB</span>, having led projects like ProdigiDesk and PICSA.</p>
            <p className="mt-4 text-xl">With a strong foundation in <span className="text-green-500">DevOps (AWS, Docker)</span> and a track record of optimizing RESTful APIs for 99.9% uptime, I enjoy tackling new challenges.</p>
            <p className="mt-4 text-xl">I am also interested in building innovative <span className="text-green-500">Web Technologies and Products</span> and exploring <span className="text-green-500">Artificial Intelligence</span>, backed by achievements like 4th place in the Smart India Hackathon and a research paper on Covid-19 Detection Using VGG-16.</p>
            
            <div className="flex flex-row gap-4 mt-4">
                <ResumeDownload/> 
                <ContactModal/>
            </div>
        </div>
    </div>
</div>
      </motion.div>
      <div className="flex justify-center">
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" style={{width: '50%'}} />
        </div>

      <div className="text-white" 
      >
         <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
      <PersonalInfo/>

        </motion.div>
      <div className="flex justify-center">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 " style={{width: '50%'}} />
    </div>
      
      </div>
      
      <div className="text-white" 
      >
            
        <EducationAndExperienceHeading/>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants2}
        >
        <div className='flex flex-row mt-14' style={{ paddingLeft: '15%', paddingRight:'15%', paddingBottom: '5em'}}>
            <Experience/>
            <Education/>
        </div>
        </motion.div>
        {/* <div className='flex flex-start'>
            <ContactModal/>
        </div> */}
      
      </div>
      
      
     
     </div>
  </>
    )
}