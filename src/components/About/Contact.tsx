import { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';


function Contact(){
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [msgBody, setMsgBody] = useState('');
  
    const form = useRef<HTMLFormElement>(null);
  
    const sendEmail = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
    
      if (form.current) {
        emailjs
          .sendForm('service_ito9vkl', 'template_ckfn6en', form.current, {
            publicKey: 'HSLJuqCGfgAtZltxK',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Message Sent!")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      } else {
        console.error("Form reference is null.");
      }
    };
    return(
        
            
           
          <div className='container flex'>
        {/* Left side: Text heading */}
        <div className="w-1/2 p-6" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white'}}>
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2> 
          <h2 className="text-4xl font-bold mb-4" style={{display: 'flex', justifyContent: 'left'}}><span style={{color: '#06d6a0'}}>Contact Me</span> </h2>
        
        </div>
        
          {/* Right side: Form */}
          <div className="w-1/2 p-6">
            <form className="max-w-sm mx-auto" onSubmit={sendEmail} ref={form}>
              <div className="mb-5">
              <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="subject" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
                <label htmlFor="recipient" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="recipient"  id="recipient"  value={recipient} onChange={(e) => setRecipient(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
              </div>
              <label htmlFor="msgBody" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="msgBody" rows={4} value={msgBody} onChange={(e) => setMsgBody(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
              <button type="submit" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>
        
        
    )
}



export default Contact;