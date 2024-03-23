function WorkCards() {
  // Dummy data for illustration
  const cardsData = [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      id: 2,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      id: 3,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      id: 4,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      id: 5,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      id: 6,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      id: 7,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      id: 8,
      title: "Noteworthy technology acquisitions 2021",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
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
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WorkCards;
