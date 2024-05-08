import AbhinavResume from '../../assets/AbhinavSaxenaResume.pdf';


export default function ResumeDownload(){
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = AbhinavResume;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div>
            <button className="resume-download bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center text-center mt-5 mb-5"  onClick={downloadResume}> 
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download Resume</span></button>
        </div>
    )
}