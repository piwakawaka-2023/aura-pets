import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../apis/users'

interface ProfileData {
  usersId: number
  username: string
  petNickname: string
  petsTypeId: number
  usersPetId: number
  sprite: string
  userBio: string
}

function Profile() {
  const { id } = useParams()
  const [profileInfo, setProfileInfo] = useState({} as ProfileData)

  useEffect(() => {
    api
      .fetchProfile(Number(id))
      .then(setProfileInfo)
      .catch(() => 'oh no error!')
  }, [id])

  return (
    <>
      <img src={`/imgs/${profileInfo.sprite}`} alt="pet sprite"></img>
      <h2>
        <strong>Username:</strong>
        {profileInfo.username}
      </h2>
      <h3>Nickname: {profileInfo.petNickname}</h3>
      <p>{profileInfo.userBio}</p>
    </>
  )
}

export default Profile
