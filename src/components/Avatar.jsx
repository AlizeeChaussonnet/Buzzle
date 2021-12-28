const Avatar = ({ randomName }) => {
  
  return (
    <img
      className="avatar-img"
      src={"https://avatars.dicebear.com/api/personas/" + randomName + ".svg"}
      alt="avatar"
    />
  );
};

export default Avatar;
