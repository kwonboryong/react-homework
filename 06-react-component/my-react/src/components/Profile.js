import { createElement as h, React } from "react";

// props = {
//   img: "이미지 경로",
//   label: "aria-label",
//   description: "alt",
//   name: "프로필 네임",
// };

function Profile({ name, description, img }) {
  // return h(
  //   "div",
  //   { className: "profile" },

  //   h ("img", {
  //     className: "profile__img",
  //     src: `/img-${img}`,
  //     alt: description
  //   }),

  //   h ("span", {
  //     className: "profile__name", name
  //   })
  // );
  
  return (
    <div className="profile">
      <img src={`/img-${img}`} alt={description} className="profile__img" />
      <span className="profile__name">
        {name}
      </span>
    </div>
  );
}


export default Profile;
