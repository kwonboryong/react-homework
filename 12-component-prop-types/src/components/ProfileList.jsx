import React from 'react'
import Profile from './Profile.jsx'
import './../main.css'

function ProfileList() {

  return (
    <>
    <ul className="ProfileList">
      <li>
        <Profile name="슬비쌤" img="profile-1.jpg" description="슬비쌤 프로필" />
      </li>
      <li>
        <Profile name="야무" img="profile-2.jpg" description="야무쌤 프로필" />
      </li>
      <li>
        <Profile name="범쌤" img="profile-3.jpg" description="범쌤 프로필" />
      </li>
      <li>
        <Profile name="이듬" img="profile-4.jpg" description="이듬 프로필" />
      </li>
    </ul>
    </>
  )
}

export default ProfileList;
