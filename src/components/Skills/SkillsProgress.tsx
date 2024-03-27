import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SkillsProgress() {
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
        // Add more skills as needed
    ];

    return (
        <div className="flex justify-center items-center mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" style={{ height: '50%', width: '50%' }}>
                {progressData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-10">
                        <CircularProgressbar
                            strokeWidth={10}
                            value={item.percentage}
                            text={`${item.percentage}%`}
                            styles={buildStyles({
                                // Customize the root svg element
                                pathColor: `rgba(6, 214, 160, ${item.percentage / 100})`,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'round',
                                // Customize the text
                                textColor: 'white',
                                textSize: '16px',
                                // Customize trail path, i.e., the path behind the progress path
                                trailColor: 'transparent', // Making the trail transparent
                                // Apply dashed pattern to the progress path
                                pathTransition: 'dashed', // Use dashed pattern
                                pathTransitionDuration: 0.5, // Duration of the transition
                            })}
                        />
                        <div className="text-center mt-2 text-white">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsProgress;
