import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchResult, postResult } from '../apis/results'
import * as type from '../../models/types'

import AnimatedPage from './AnimatedPage'// added james for page transition

import { useAuth0 } from '@auth0/auth0-react'


function Result() {
  const { id } = useParams()
  const [pet, setPet] = useState({} as type.Result)
  const { user, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    async function resultPromsie() {
      const res = await fetchResult(Number(id))
      const token = await getAccessTokenSilently()
      setPet(res)
      return { pet, token }
    }
    resultPromsie()
      .then(({ pet, token }) => {
        const userPet = {
          petId: pet.id,
          username: user?.nickname,
          petNickname: pet.name,
          userAuthId: user?.sub,
        }
        postResult(userPet.petId, userPet, token)
      })
      .catch((err) => {
        console.error('oops', err)
      })
  }, [id, pet, getAccessTokenSilently, user])

  return (
    <>
    <AnimatedPage>
      <h1>YOU GOT:</h1>
      <h2>{pet.name}</h2>
      <img src={`/imgs/${pet.sprite}`} alt={pet.name}></img>
      <p>{pet.bio}</p>
    </AnimatedPage>
    </>
  )
}

export default Result
