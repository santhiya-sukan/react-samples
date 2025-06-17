import { useState } from 'react';

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? 
        (
          <input value={firstName} onChange={e => { setFirstName(e.target.value)  }} />
        ) : 
        (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ?
         (
          <input value={lastName} onChange={e => {setLastName(e.target.value)
            }}/>
        ) :
         (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}




// function handleFormSubmit(e) {
//   e.preventDefault();
//   if (editButton.textContent === 'Edit Profile') {
//     editButton.textContent = 'Save Profile';
//     hide(firstNameText);
//     hide(lastNameText);
//     show(firstNameInput);
//     show(lastNameInput);
//   } else {
//     editButton.textContent = 'Edit Profile';
//     hide(firstNameInput);
//     hide(lastNameInput);
//     show(firstNameText);
//     show(lastNameText);
//   }
// }

// function handleFirstNameChange() {
//   firstNameText.textContent = firstNameInput.value;
//   helloText.textContent = (
//     'Hello ' +
//     firstNameInput.value + ' ' +
//     lastNameInput.value + '!'
//   );
// }

// function handleLastNameChange() {
//   lastNameText.textContent = lastNameInput.value;
//   helloText.textContent = (
//     'Hello ' +
//     firstNameInput.value + ' ' +
//     lastNameInput.value + '!'
//   );
// }

// function hide(el) {
//   el.style.display = 'none';
// }

// function show(el) {
//   el.style.display = '';
// }

// let form = document.getElementById('form');
// let editButton = document.getElementById('editButton');
// let firstNameInput = document.getElementById('firstNameInput');
// let firstNameText = document.getElementById('firstNameText');
// let lastNameInput = document.getElementById('lastNameInput');
// let lastNameText = document.getElementById('lastNameText');
// let helloText = document.getElementById('helloText');
// form.onsubmit = handleFormSubmit;
// firstNameInput.oninput = handleFirstNameChange;
// lastNameInput.oninput = handleLastNameChange;




// export default function EditProfile() {
//   return (
//     <form>
//       <label>
//         First name:{' '}
//         <b>Jane</b>
//         <input />
//       </label>
//       <label>
//         Last name:{' '}
//         <b>Jacobs</b>
//         <input />
//       </label>
//       <button type="submit">
//         Edit Profile
//       </button>
//       <p><i>Hello, Jane Jacobs!</i></p>
//     </form>
//   );
// }
