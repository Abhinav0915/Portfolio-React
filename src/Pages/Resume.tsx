import Background from '../assets/background.webp'; 
import NavBar from '../components/Utils/NavBar';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import AbhinavResume from '../assets/Resume.pdf';
import { pdfjs } from 'react-pdf';
import ResumeDownload from '../components/Utils/ResumeDownload';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

export default function Resume() {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber] = useState<number>(1);
    const [scale, setScale] = useState<number>(1); // State for controlling the scale

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div style={{ 
            backgroundImage: `url(${Background})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '100vh', 
            color: 'white'
        }}>
            <NavBar />
            <ResumeDownload/>
            <div style={{ 
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                minHeight: 'calc(100vh - 64px)', // Adjust for the height of the navbar
                
            }}>
                <Document file={AbhinavResume} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page 
                        pageNumber={pageNumber} 
                        renderAnnotationLayer={false} 
                        renderTextLayer={false} 
                        width={600} // Adjust width as needed
                        scale={1.3} // Set the scale
                    />
                </Document>
            </div>
            <ResumeDownload/>

            {/* <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button onClick={() => setScale(scale * 1.5)}>Zoom In</button>
                <button onClick={() => setScale(scale / 1.5)}>Zoom Out</button>
            </div> */}
        </div>
    );
}
