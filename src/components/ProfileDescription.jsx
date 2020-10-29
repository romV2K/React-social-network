
const ProfileDescription = () => {
  return (
    <div className="avatar-derscription-posts">
      <div className="avatar-profile-derscription">
        <div className="avatar-description">
        <div className="avatar-container">
          <img className="avatar" alt="profile avatar"></img>
        </div>
        <div className="description">
          <p className="user-name">Roman Konopelko</p>
          <p className="">City: <span> Lviv</span></p>
          <p className="">Education: <span>NuLp</span></p>
          <p className="">Contacts: <span>konopelkoroman@gmail.com</span></p>
        </div>
        </div>
      </div>
        <div className="new-post-block">
          <div className="new-post-input-block">
            <p className="new-post">New post</p>
            <textarea className="new-post-input"></textarea>
          </div>
            <button className="new-post-send">
              SEND
            </button>
        </div>
      </div>
  );
}

export default ProfileDescription;