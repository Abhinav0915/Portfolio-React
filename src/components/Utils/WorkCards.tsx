function WorkCards() {
  // Dummy data for illustration
  const cardsData = [
    {
      id: 1,
      title: "Role-Based Authentication",
      description: "Implemented the role-based authentication. In role-based authentication, users are granted access based on predefined roles.",
      link: 'https://github.com/Abhinav0915/RoleBasedAuthentication'
    },
    {
      id: 2,
      title: "QR Code Generator",
      description: "The QR Code Generation project is a simple tool for generating QR codes dynamically within a Spring Boot application.",
      link: 'https://github.com/Abhinav0915/QR-Code-Generation'
    },
    {
      id: 3,
      title: "Gmail-SMTP",
      description: "This project implements Gmail SMTP services with Spring Boot serving as the backend and React as the frontend framework",
      link: 'https://github.com/Abhinav0915/Gmail-SMTP'
    },
    {
      id: 4,
      title: "ScanPro",
      description: "A mobile application developed that allows users to manage and track product using barcode scanning.",
      link: 'https://github.com/Abhinav0915/scanpro'
    },
    // {
    //   id: 5,
    //   title: "Project X",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   link: 'https://github.com/example/project-x'
    // },
    {
      id: 6,
      title: "Expresso Player",
      description: "Developed a machine learning system that recognizes facial expression with accuracy around 93%.",
      link: 'https://github.com/Abhinav0915/Expresso-Player'
    },
    {
      id: 7,
      title: "Ethos",
      description: "A sleek and user-friendly app, which delivers news stories from top publishers across various categories.",
      link: 'https://github.com/Abhinav0915/Ethos'
    },
    {
      id: 8,
      title: "BitDex",
      description: "Cryptocurrency app that allows you to view real-time prices of various cryptocurrencies with a user interactive UI made in Flutter.",
      link: 'https://github.com/Abhinav0915/BitDex'
    }
  ];

 return (
   <div className="flex justify-center ml-5 mr-5">
     <div className="flex flex-wrap justify-center gap-6">
       {cardsData.map((card) => (
         <div key={card.id} className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ marginBottom: '20px', flexBasis: '100%', maxWidth: '400px' }}>
           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
           <p className="font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
           <a href={card.link }  className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
             Github
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
             </svg>
           </a>
         </div>
       ))}
     </div>
   </div>
 );
}

export default WorkCards;
