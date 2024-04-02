function WorkCards() {
  // Dummy data for illustration
  const cardsData = [
    {
      id: 1,
      title: "BitDex",
      description: "Cryptocurrency app that allows you to view real-time prices of various cryptocurrencies",
      link: 'https://github.com/Abhinav0915/BitDex'

    },
    {
      id: 2,
      title: "Ethos",
      description: "A sleek and user-friendly app, which delivers news stories from top publishers across various categories.",
      link: 'https://github.com/Abhinav0915/Ethos'
    },
    {
      id: 3,
      title: "Expresso Player",
      description: "Developed an machine learning system that recognizes facial expression with accuracy around 93%.",
      link: 'https://github.com/Abhinav0915/Expresso-Player'
    },
    {
      id: 4,
      title: "ScanPro",
      description: "A mobile application developed that allows users to manage and track product using barcode scanning.",
      link: 'https://github.com/Abhinav0915/scanpro'
    },
    // {
    //   id: 5,
    //   title: "Noteworthy technology acquisitions 2021",
    //   description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    //   link: 'www.google.com'
    // },
    // {
    //   id: 6,
    //   title: "Noteworthy technology acquisitions 2021",
    //   description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    //   link: 'www.google.com'
    // },
    // {
    //   id: 7,
    //   title: "Noteworthy technology acquisitions 2021",
    //   description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    //   link: 'www.google.com'
    // },
    // {
    //   id: 8,
    //   title: "Noteworthy technology acquisitions 2021",
    //   description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    //   link: 'www.google.com'
    // },
    // Add more card data as needed
  ];

  // Splitting cards into groups of four
  const groupedCards = [];
  for (let i = 0; i < cardsData.length; i += 4) {
    groupedCards.push(cardsData.slice(i, i + 4));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px' }}>
    {groupedCards.map((group, index) => (
      <div key={index} style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px' }}>
        {group.map((card) => (
          <div key={card.id} className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ marginRight: '20px' }}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
            <a href={card.link} className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Github
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    ))}
  </div>
  );
}

export default WorkCards;
