function Profile() {
  const tempData = {
    id: 3999,
    username: 'Jo',
    petNickname: 'Scarn2',
    petId: 4,
    sprite: '/imgs/bear-idle.gif',
    bio: 'SAH DUDE',
    userAuthId: 30000,
  }

  return (
    <>
      <img src={tempData.sprite} alt="pet sprite"></img>
      <h2>
        <strong>Username:</strong>
        {tempData.username}
      </h2>
      <h3>{tempData.petNickname}</h3>
      <p>{tempData.bio}</p>
    </>
  )
}

export default Profile
