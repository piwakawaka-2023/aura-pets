import { useState, useEffect } from 'react'
import { fetchProfile } from '../apis/users'
import { UserProfile } from '../../models/types'


const MAX_TIMER = 100;
//const ACTION_GAIN = 500  >>>to be fixed to add 500 not add and limit the bar to max 500

type Props = { username: string | undefined }

const Pet = (props: Props) => {
  const [feedTimer, setFeedTimer] = useState(0)
  const [sleepTimer, setSleepTimer] = useState(0)
  const [playTimer, setPlayTimer] = useState(0)
  const [vibesTimer, setVibesTimer] = useState(0)
  const [profileInfo, setProfileInfo] = useState({} as UserProfile)

  useEffect(() => {
    async function getProfileData() {
      const profileData = await fetchProfile(props.username)
      return profileData
    }
    getProfileData()
      .then((profileData) => {
        const profile = profileData[0]
        setProfileInfo(profile)
      })
      .catch(() => 'oh no error!')
  }, [props.username])

  // Function to handle feeding action
  const handleFeed = () => {
    setFeedTimer(MAX_TIMER)
    playSound('sfx-button-1.mp3')
  }

  // Function to handle sleeping action
  const handleSleep = () => {
    setSleepTimer(MAX_TIMER)
    playSound('sfx-button-2.mp3')
  }

  // Function to handle playing action
  const handlePlay = () => {
    setPlayTimer(MAX_TIMER)
    playSound('sfx-button-3.mp3')
  }

  // Function to handle vibes action
  const handleVibes = () => {
    setVibesTimer(MAX_TIMER)
    playSound('sfx-button-4.mp3')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0))
      setSleepTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 0.5 : 0))
      setPlayTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 2 : 0))
      setVibesTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 4 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const playSound = (soundFileName: string) => {
    const audio = new Audio(`/snds/${soundFileName}`);
    audio.play()
  }

  return (
    <div className="pet-container">
      <h1>{profileInfo.petNickname}</h1>
      <img className='dashBox' src={`/imgs/${profileInfo.petSprite}`} alt="Pet sprite"></img>
      <div className="buttons-container">
        <button className='needs-button' onClick={handleFeed}>Feed</button>
        <button className='needs-button' onClick={handleSleep}>Sleep</button>
        <button className='needs-button' onClick={handlePlay}>Play</button>
        <button className='needs-button' onClick={handleVibes}>Vibe With</button>
      </div>
      <div className="timers">
        <div className="timer">
          <h3>Hunger</h3>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(feedTimer / MAX_TIMER) * 100}%` }}
            ></div>
          </div>
          {/* <div>Time Remaining: {feedTimer}</div> */}
        </div>
        <div className="timer">
          <h3>Energy</h3>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(sleepTimer / MAX_TIMER) * 100}%` }}
            ></div>
          </div>
          {/* <div>Time Remaining: {sleepTimer}</div> */}
        </div>
        <div className="timer">
          <h3>Fun</h3>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(playTimer / MAX_TIMER) * 100}%` }}
            ></div>
          </div>
          {/* <div>Time Remaining: {playTimer}</div> */}
        </div>
        <div className="timer">
          <h3>Vibes</h3>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(vibesTimer / MAX_TIMER) * 100}%` }}
            ></div>
          </div>
          {/* <div>Time Remaining: {vibesTimer}</div> */}
        </div>
      </div>
    </div>
  )
}

export default Pet
