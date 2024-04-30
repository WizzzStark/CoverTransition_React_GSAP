import { useRef, createRef } from 'react';
import CoverTransitionCard from './CoverTransitionCard';

function Content() {

  const itemsData = [
    { id: 1, title: "Alex Moulder", year: "2020", image: "/1.jpg", description: "I AM ONLY WAITING FOR LOVE TO GIVE MYSELF UP AT LAST INTO HIS HANDS. THAT IS WHY IT IS SO LATE AND WHY I HAVE BEEN GUILTY OF SUCH OMISSIONS." },
    { id: 2, title: "Aria Bennett", year: "2021", image: "/2.jpg", description: "They come with their laws and their codes to bind me fast; but I evade them ever, for I am only waiting for love to give myself up at last into his hands." },
    { id: 3, title: "Jimmy Hughes", year: "2022", image: "/3.jpg", description: "Clouds heap upon clouds and it darkens. Ah, love, why dost thou let me wait outside at the door all alone?" }
  ];

  const previewsData = [
    {
      image: '/1_big.jpg', name: 'Alex Moulder', shortName: 'Moulder', year: '2020',
      location: 'And if it rains, a closed car at four. And we shall play a game of chess, pressing lidless eyes and waiting for a knock upon the door.',
      material: 'At the violet hour, when the eyes and back, turn upward from the desk, when the human engine waits.'
    },
    {
      image: '/2_big.jpg', name: 'Aria Bennett', shortName: 'Bennett', year: '2021',
      location: 'And if it rains, a closed car at four. And we shall play a game of chess, pressing lidless eyes and waiting for a knock upon the door.',
      material: 'At the violet hour, when the eyes and back, turn upward from the desk, when the human engine waits.'
    },
    {
      image: '/3_big.jpg', name: 'Jimmy Hughes', shortName: 'Hughes', year: '2022',
      location: 'And if it rains, a closed car at four. And we shall play a game of chess, pressing lidless eyes and waiting for a knock upon the door.',
      material: 'At the violet hour, when the eyes and back, turn upward from the desk, when the human engine waits.'
    },
  ];

  const previewRefs = useRef(previewsData.map(() => createRef()));

  return (
    <>
      {itemsData.map((index) => (
        <CoverTransitionCard key={index} itemsData={itemsData} previewsData={previewsData} previewRefs={previewRefs} />
      ))}
    </>


  );
}

export default Content;



