import Background from '../assets/background.webp'; 
// import ContactModal from '../components/About/ContactModal';
import PersonalInfo from '../components/About/AdaptiveStats';
import NavBar from '../components/Utils/NavBar';
import ResumeDownload from '../components/Utils/ResumeDownload';
import EducationAndExperienceHeading from '../components/About/EduAndExpHeading';
import Experience from '../components/About/Experiences';
import Education from '../components/About/Education';
import { motion } from 'framer-motion';


export default function About(){

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
      transition: { delay: 1.5, duration: 1 } 
    }
  };

  const itemVariants2 = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 2, duration: 1 } 
    }
  };
  
  


    return(
        <>
      <div className="text-white" style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover', // Adjust the background size as needed
        backgroundPosition: 'center', // Adjust the background position as needed
        minHeight: '50vh', 
         }}>
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
                  <p className="mt-4 text-xl">I am doing my graduation with a Bachelor's degree in Computer Science and Engineering and I'll be graduated in 2024.</p>
                  <p className="mt-4 text-xl">As a <span className="text-green-500">Full-Stack developer</span>, I enjoy tackling new challenges and continuously expanding my skillset.</p>
                  <p className="mt-4 text-xl">I am proficient in <span className="text-green-500">Frontend Development</span>, as well as have knowledge in programming languages such as Javascript, Java, Python, Dart, and C++.</p>
                  <p className="mt-4 text-xl">I have a passion for working with <span className="text-green-500">React, Springboot</span>, and Databases like <span className="text-green-500">MySQL and MongoDB</span></p>
                  <p className="mt-4 text-xl">I am also interested in building new <span className="text-green-500">Web Technologies and Products</span>, as well as exploring areas related to <span className="text-green-500">Artificial Intelligence.</span></p>
                  
                  <ResumeDownload/> 
              </div>
              
              {/* <div className="mt-4 md:mt-0">
                  <Document file={AbhinavResume} onLoadSuccess={onDocumentLoadSuccess}>
                      <Page 
                          pageNumber={pageNumber} 
                          renderAnnotationLayer={false} 
                          renderTextLayer={false} 
                          width={300} // Adjust width as needed
                          scale={2} // Set the scale
                      />
                  </Document>
              </div> */}
          </div>
          
      </div>
              </motion.div>
      <div className="flex justify-center">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" style={{width: '50%'}} />
        </div>

      <div className="text-white" 
      style={{ 
        backgroundImage: `url(${Background})` ,
        backgroundSize: 'cover', // Adjust the background size as needed
        backgroundPosition: 'center', // Adjust the background position as needed
        minHeight: '20vh', // Set a minimum height to cover the entire viewport
        }}>
         <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
      <PersonalInfo/>

        </motion.div>
      <div className="flex justify-center">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" style={{width: '50%'}} />
    </div>
      
      </div>
      
      <div className="text-white" 
      style={{ 
        backgroundImage: `url(${Background})` ,
        backgroundSize: 'cover', // Adjust the background size as needed
        backgroundPosition: 'center', // Adjust the background position as needed
        minHeight: '100vh', // Set a minimum height to cover the entire viewport
        }}>
            
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