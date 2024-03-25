import { DiNodejs, DiJava, DiPython } from "react-icons/di";
import {SiJavascript, SiReact, SiGit, SiFlutter, SiDart, SiCplusplus, SiSpringboot, SiDocker} from "react-icons/si"
import { SiMongodb, SiHtml5 } from "react-icons/si";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  // Array for the icons
  const icons = [
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiDart />, name: "Dart" },
    { icon: <SiCplusplus />, name: "C++" },    
  ];

  const tools = [
    {tool: <SiSpringboot/>, name: "Springboot"},
    {tool: <SiFlutter/>, name: "Flutter"},
    { tool: <SiReact />, name: "React" },
    { tool: <DiNodejs />, name: "Node.js" },
    { tool: <SiMongodb />, name: "MongoDB" },
    { tool: <SiGit />, name: "Git" },
    { tool: <SiDocker />, name: "Docker" },
  ]

  return (
    <>
        <h1 className="text-6xl text-center text-white" style={{fontFamily: '"Poppins", sans-serif'}}>Professional <span style={{color: '#06d6a0'}}>Skills</span></h1>
        <Marquee style={{padding: '45px'}} speed={100} direction="left" >
        {icons.map(({ icon, name }, index) => (
          <div key={index} className="tech-containers relative bg-transparent w-40 h-40 border-2 rounded-lg p-4 flex items-center justify-center shadow-md ml-10 mr-4">
            <div className="text-center text-7xl" style={{color: 'white'}}>
              {icon}
              <div className="text-sm mt-2">{name}</div>
            </div>
          </div>
        ))}<br></br>
        
      </Marquee>
      <Marquee style={{padding: '45px'}} speed={100} direction="right" >
        {tools.map(({ tool, name }, index) => (
          <div key={index} className="tech-containers relative bg-transparent w-40 h-40 border-2 rounded-lg p-4 flex items-center justify-center shadow-md ml-10 mr-4">
            <div className="text-center text-7xl" style={{color: 'white'}}>
              {tool}
              <div className="text-sm mt-2">{name}</div>
            </div>
          </div>
        ))}<br></br>
        
      </Marquee>
    </>
    
  );
};

export default TechStack;
