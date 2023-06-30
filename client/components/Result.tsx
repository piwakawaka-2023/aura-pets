import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchResult } from '../apis/results'
import * as type from '../../models/types'

function Result() {
  const { id } = useParams()
  const [pet, setPet] = useState({} as type.Result)

  useEffect(() => {
    async function resultPromsie() {
      const res = await fetchResult(Number(id))
      setPet(res)
    }
    resultPromsie()
  }, [id])

  return (
    <>
      <h1>YOU GOT:</h1>
      <h2>{pet.name}</h2>
      <img src={`/imgs/${pet.sprite}`} alt={pet.name}></img>
      <p>{pet.bio}</p>
    </>
  )
}

export default Result
