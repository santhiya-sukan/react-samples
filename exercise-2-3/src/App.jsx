import { useState } from 'react';
import { initialLetters } from './data.jsx';
import Letter from './Letter.jsx';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId ] = useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setLetters(letters.map(letter => {
      if (letter.id === starredId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedId
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}



// import { useState } from 'react';
// import { initialLetters } from './data.js';
// import Letter from './Letter.js';

// export default function MailClient() {
//   const [letters, setLetters] = useState(initialLetters);
//   const [highlightedLetter, setHighlightedLetter] = useState(null);

//   function handleHover(letter) {
//     setHighlightedLetter(letter);
//   }

//   function handleStar(starred) {
//     setLetters(letters.map(letter => {
//       if (letter.id === starred.id) {
//         return {
//           ...letter,
//           isStarred: !letter.isStarred
//         };
//       } else {
//         return letter;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>Inbox</h2>
//       <ul>
//         {letters.map(letter => (
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isHighlighted={
//               letter === highlightedLetter
//             }
//             onHover={handleHover}
//             onToggleStar={handleStar}
//           />
//         ))}
//       </ul>
//     </>
//   );
// }
