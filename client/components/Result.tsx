import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchResult, postResult } from '../apis/results'
import * as type from '../../models/types'

import AnimatedPage from './AnimatedPage' // added james for page transition

import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from '../utilities/Authenticated'

function Result() {
  const { id } = useParams()
  const [pet, setPet] = useState({} as type.Result)
  const { user, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    async function resultPromise() {
      const res = await fetchResult(Number(id))
      setPet(res)
      return res
    }
    resultPromise()
  }, [id])

  const handleSave = async () => {
    const token = await getAccessTokenSilently()
    const userPet = {
      petId: pet.id,
      username: user?.nickname,
      petNickname: pet.name,
      userAuthId: user?.sub,
    }
    console.log(userPet)
    postResult(userPet, token)
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
