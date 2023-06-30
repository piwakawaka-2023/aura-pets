import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchResult } from '../apis/results'
import { Result } from '../../models/types'

function Results() {
  const { result } = useParams()
  const [animals, setAnimals] = useState({} as Result)
  useEffect(() => {
    async function resultPromsie() {
      const apiRes = await fetchResult(Number(result))
      setAnimals(apiRes)
    }
    resultPromsie()
  }, [result])

  return <></>
}

export default Results
