import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchResult, postResult } from '../apis/results'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from '../utilities/Authenticated'
import * as type from '../../models/types'

import AnimatedPage from './AnimatedPage' // added james for page transition

function Result() {
  const { id } = useParams()
  const [pet, setPet] = useState({} as type.Result)
  const { user } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    async function resultPromise() {
      const res = await fetchResult(Number(id))
      setPet(res)
      return res
    }
    resultPromise()
  }, [id])

  const handleSave = async () => {
    const userPet = {
      petId: pet.id,
      username: user?.nickname,
      petNickname: pet.name,
      userAuthId: user?.sub,
    }
    postResult(userPet)
    navigate('/profile')
  }

  return (
    <>
      <AnimatedPage>
        <h1>YOU GOT:</h1>
        <h2>{pet.name}</h2>
        <img src={`/imgs/${pet.sprite}`} alt={pet.name}></img>
        <p>{pet.bio}</p>
        <IfAuthenticated>
          <button onClick={() => handleSave()}>
            Save your pet and continue
          </button>
        </IfAuthenticated>
      </AnimatedPage>
    </>
  )
}

export default Result
