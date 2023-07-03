import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import * as api from '../apis/users'

function Profile() {
  const tempData = {
    username: 'Jo',
    petNickname: 'Scarn2',
    petId: 4,
    sprite: '/imgs/bear-idle.gif',
    bio: 'SAH DUDE',
  }

  const [profileInfo, setProfileInfo] = useState({
    username: '',
    petNickname: '',
    petId: 0,
    sprite: '',
    bio: '',
  })
  const { getAccessTokenSilently } = useAuth0()
  const { id } = useParams()

  useEffect(() => {
    async function getUserProfile() {
      try {
        const token = await getAccessTokenSilently()
        const userProfile = api.fetchProfile(Number(id), token)
        return userProfile
      } catch (err) {
        console.error('oh no error! ', err)
      }
    }
    getUserProfile()
      .then(setProfileInfo)
      .catch((err) => console.error('oh no error! ', err))
  }, [id, getAccessTokenSilently])

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
