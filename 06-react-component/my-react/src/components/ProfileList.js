import { createElement as h, React } from "react";
import Profile from './Profile.js';

function ProfileList() {


  return (
    <ul className="ProfileList">
      <li>
        <Profile name="슬비쌤" img="woman-01.jpg" description="online" />
      </li>
      <li>
        <Profile name="범쌤" img="man-01.jpg" description="away" />
      </li>
      <li>
        <Profile name="야무쌤" img="man-02.jpg" description="away" />
      </li>
    </ul>
  )
}

export default ProfileList;

