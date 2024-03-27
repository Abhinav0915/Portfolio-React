import Background from '../assets/background.webp'; 
import Contact from '../components/About/Contact';
import NavBar from '../components/Utils/NavBar';
import ResumeDownload from '../components/Utils/ResumeDownload';


export default function About(){
    return(
      <div className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${Background})` }}>
      <NavBar />
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
      <Contact/>
  </div>
    )
}