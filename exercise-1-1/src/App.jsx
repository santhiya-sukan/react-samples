import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }
//picture            -->border transparent
//picture-actice     -->border purple
//background         -->background white
//background-active  -->background purple
  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}



// export default function Picture() {
//   return (
//     <div className="background background--active">
//       <img
//         className="picture"
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//       />
//     </div>
//   );
// }
