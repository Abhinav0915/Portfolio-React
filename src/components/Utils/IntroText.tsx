export default function IntroText() {
    return (
      <div style={{
        color: 'white',
        width: '50%', // Set width to cover 50% of the viewport width
        marginTop: '120px',  
        padding: '20px', // Add padding for spacing
        boxSizing: 'border-box', // Include padding in the width calculation
        textAlign: 'left', // Align text to the left
      }}>
        <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>Hi, I am <span style={{color: '#06d6a0'}}>Abhinav</span></h1>
        <p style={{ fontSize: '40px' }}>
           I design and Develop
        </p>
      </div>
    );
  }
  