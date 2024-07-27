import React from 'react'
import './../main.css'

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
