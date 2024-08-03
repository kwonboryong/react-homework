import React from 'react'
import './../main.css'
import PropTypes from 'prop-types';

function Profile({ name, description, img }) {

  return (
    <>
    <div className="profile">
      <img src={`src/public/assets/${img}`} alt={description} className="profile__img" />
      <span className="profile__name">
        {name}
      </span>
    </div>
    </>
  )
}

export default Profile;


// Profile.PropTypes = exact({
//   name: string.isRequired,
//   description: string.isRequired,
//   img: string.isRequired,
// }
