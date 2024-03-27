import { DiNodejs, DiJava, DiPython } from "react-icons/di";
import {SiJavascript, SiReact, SiGit, SiFlutter, SiDart, SiCplusplus, SiSpringboot, SiDocker, SiMysql} from "react-icons/si"
import { SiMongodb, SiHtml5 } from "react-icons/si";
import Marquee from "react-fast-marquee";

const TechStack = () => {
  // Array for the icons
  const icons = [
    { icon: <SiJavascript />, name: "JavaScript", color: "green" },
    { icon: <DiJava />, name: "Java", color: "yellow" },
    { icon: <DiPython />, name: "Python", color: "blue" },
    { icon: <SiHtml5 />, name: "HTML5", color: "orange" },
    { icon: <SiDart />, name: "Dart", color: "blue" },
    { icon: <SiCplusplus />, name: "C++", color: "teal" },    
    { icon: <SiMysql />, name: "MySQL", color: "green" },    
    { icon: <SiMongodb />, name: "MongoDB", color: "green" },
    { icon: <SiSpringboot/>, name: "Springboot", color: "blue" },
    { icon: <SiFlutter/>, name: "Flutter", color: "blue" },
    { icon: <SiReact />, name: "React", color: "blue" },
    { icon: <DiNodejs />, name: "Node.js", color: "green" },
    { icon: <SiGit />, name: "Git", color: "red" },
    { icon: <SiDocker />, name: "Docker", color: "blue" },
  ];

  return (
    <Marquee style={{ padding: '45px' }} speed={70} direction="left">
      {icons.map(({ name, color }, index) => (
        <span key={index} className={`bg-${color}-100 text-${color}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300`}>
          {name}  
        </span>
      ))}
    </Marquee>
  );
};

export default TechStack;
