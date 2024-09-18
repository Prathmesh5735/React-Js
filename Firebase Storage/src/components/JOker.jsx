import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../service/firebase';

const JOker = () => {
    async function getfiredata(){
        
        // console.log(datafire.docs)

    }
    useEffect(()=>{
        getfiredata()
    },[])
  return (
    <div>

    </div>
  )
}

export default JOker