function PersonalInfo() {
    return (
        <div className="flex flex-col justify-between p-9 mt-3 md:flex-row md:justify-between" style={{marginLeft: '2em', marginRight: '2em'}}> 
            <div className="box text-center mb-4 md:mb-0">
                <h1 className="text-7xl font-bold" style={{color: '#06d6a0'}}>9</h1>
                <div className="flex flex-row">
                    <p><hr className="mt-5" style={{width: '3em'}}/></p>
                    <span className="mt-2.5 ml-4 text-2xl">Months Of Experience</span>
                </div>
            </div>
            <div className="box text-center mb-4 md:mb-0">
                <h1 className="text-7xl font-bold" style={{color: '#06d6a0'}}>7+</h1>
                <div className="flex flex-row">
                    <p><hr className="mt-5" style={{width: '3em'}}/></p>
                    <span className="mt-2.5 ml-4 text-2xl">Completed Projects</span>
                </div>
            </div>
            <div className="box text-center mb-4 md:mb-0">
                <h1 className="text-7xl font-bold" style={{color: '#06d6a0'}}>15+</h1>
                <div className="flex flex-row">
                    <p><hr className="mt-5" style={{width: '3em'}}/></p>
                    <span className="mt-2.5 ml-4 text-2xl">Technologies Learned</span>
                </div>
            </div>
            <div className="box text-center">
                <h1 className="text-7xl font-bold" style={{color: '#06d6a0'}}>3+</h1>
                <div className="flex flex-row">
                    <p><hr className="mt-5" style={{width: '3em'}}/></p>
                    <span className="mt-2.5 ml-4 text-2xl">Languages Learnt</span>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
