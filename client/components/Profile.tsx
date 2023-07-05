import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import { UpdateUserInfo, UserProfile } from '../../models/types'
import { IfAuthenticated } from '../utilities/Authenticated'
import * as api from '../apis/users'
import Navbar from './Navbar'

function Profile() {
  const { username } = useParams()
  const [profileInfo, setProfileInfo] = useState({} as UserProfile)
  const [formData, setFormData] = useState({} as UpdateUserInfo)
  const [hiddenForm, setHiddenForm] = useState(true as boolean)

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

  useEffect(() => {
    setFormData({
      petNickname: profileInfo.petNickname,
      bio: profileInfo.userBio,
    } as UpdateUserInfo)
  }, [username, profileInfo])

  const handleHideForm = () => {
    setHiddenForm(!hiddenForm)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    api
      .patchProfile(username, formData)
      .then(() => {
        const profile = api.fetchProfile(username)
        return profile
      })
      .then((profileData) => {
        setProfileInfo(profileData[0])
        handleHideForm()
      })
      .catch((err) => {
        console.error('error!', err)
      })
  }

  return (
    <>
      <Navbar />
      <div className="imgProfile">
        <img
          className="imgprof"
          src={`/imgs/${profileInfo.petSprite}`}
          alt="pet sprite"
        ></img>
      </div>
      <div className="profileContent">
      <h2>
        <strong>Username: </strong>
        {profileInfo.username}
      </h2>
      <h3>Nickname: {profileInfo.petNickname}</h3>
      <p>{profileInfo.userBio}</p>
        <IfAuthenticated>
          <section>
            {hiddenForm ? (
              <button onClick={handleHideForm}>Edit Pet Info</button>
            ) : (
              <>
                <form>
                  <label htmlFor="petNickname">Your Pet&apos;s Nickname</label>
                  <input
                    value={formData.petNickname}
                    placeholder={formData.petNickname}
                    type="text"
                    id="petNickname"
                    name="petNickname"
                    onChange={handleChange}
                  />

                  <label htmlFor="bio">Pet&apos;s Bio</label>
                  <input
                    value={formData.bio}
                    placeholder={formData.bio}
                    type="text"
                    id="bio"
                    name="bio"
                    onChange={handleChange}
                  />

                  <input
                    type="submit"
                    value="Update Pet Information"
                    onClick={handleSubmit}
                  />
                </form>
                <button onClick={() => handleHideForm()}>Back</button>
              </>
            )}
          </section>
        </IfAuthenticated>
      </div>
    </>
  )
}

export default Profile
