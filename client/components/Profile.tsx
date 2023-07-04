import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../apis/users'
import { IfAuthenticated } from '../utilities/Authenticated'
import { UserProfile } from '../../models/types'

function Profile() {
  const { username } = useParams()
  const [profileInfo, setProfileInfo] = useState({} as UserProfile)

  useEffect(() => {
    async function getProfileData() {
      const profileData = await api.fetchProfile(username)
      return profileData
    }
    getProfileData()
      .then((profileData) => {
        const profile = profileData[0]
        setProfileInfo(profile)
      })
      .catch(() => 'oh no error!')
  }, [username])

  return (
    <>
      <img src={`/imgs/${profileInfo.petSprite}`} alt="pet sprite"></img>
      <h2>
        <strong>Username:</strong>
        {profileInfo.username}
      </h2>
      <h3>Nickname: {profileInfo.petNickname}</h3>
      <p>{profileInfo.userBio}</p>
      <IfAuthenticated></IfAuthenticated>
    </>
  )
}

export default Profile
