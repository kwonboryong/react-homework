import React from 'react'
import './../main.css'
import PropTypes from 'prop-types';
import { ProfileType } from '@/@types/types';

// 속성 타입 검사
Profile.propTypes = ProfileType;

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
