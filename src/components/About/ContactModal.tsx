import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [msgBody, setMsgBody] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_ito9vkl', 'template_ckfn6en', form.current, {
          publicKey: 'HSLJuqCGfgAtZltxK',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSubject('');
            setRecipient('');
            setMsgBody('');
            setShowModal(false);
            alert('Message Sent!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    } else {
      console.error('Form reference is null.');
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center text-center mt-5 mb-5"
        type="button"
      >
        Contact Me
      </button>

      {showModal && (
        <>
          {/* Backdrop with blur effect */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40"
            onClick={toggleModal} // Optional: closes modal when clicking outside
          ></div>

          {/* Modal content */}
          <div
            id="default-modal"
            aria-hidden="true"
            className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center"
          >
            <div className="relative p-4 w-full max-w-2xl">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h2 className="text-4xl font-bold" style={{ display: 'flex', justifyContent: 'left' }}>
                    <span style={{ color: '#06d6a0' }}>Contact Me</span>
                  </h2>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <form onSubmit={sendEmail} ref={form}>
                    <div className="mb-5">
                      <div className="mb-5">
                        <label
                          htmlFor="subject"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text" // Changed from "subject" to "text"
                          placeholder="Your Name"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          id="subject"
                          name="subject" // Added name attribute for emailjs
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                      <label
                        htmlFor="recipient"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email" // Changed from "recipient" to "email"
                        id="recipient"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        name="recipient" // Added name attribute for emailjs
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <label
                      htmlFor="msgBody"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your message
                    </label>
                    <textarea
                      id="msgBody"
                      rows={4}
                      value={msgBody}
                      onChange={(e) => setMsgBody(e.target.value)}
                      name="message" // Added name attribute for emailjs
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Leave a comment..."
                    ></textarea>

                    <button
                      type="submit"
                      className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactModal;