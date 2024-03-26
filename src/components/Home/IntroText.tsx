import Type from "./Type";

export default function IntroText() {
    return (
      <div style={{
        color: 'white',
        width: '50%', // Set width to cover 50% of the viewport width
        marginTop: '120px',  
        padding: '30px', // Add padding for spacing
        boxSizing: 'border-box', // Include padding in the width calculation
       
      }}>
        <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>Hi, I am <strong className="main-name"  style={{color: '#06d6a0'}}> Abhinav{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></strong></h1>
        <p style={{ fontSize: '40px' }}>
         <Type/>
        </p>
      </div>
    );
  }
  