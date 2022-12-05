import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TombolPenjelasan from '../buttondetail'

const CardPendidikan = () => {
  const [users, setUsers] = useState([])

  const getCardPendidikan = async () => {
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
      console.log(response.data);
      setUsers(response.data);
    } catch {
      console.log("Error");
    }
  }
  useEffect(() => {
    getCardPendidikan();
  }, [])
  return (
    <>
      <div className='grid grid-rows-auto grid-cols-4 gap-4'>
        {users.map(user=>(
          <div key={user.id}>
            <div className='w-72 h-80 rounded-lg border shadow-xl bg-sky-400 border-slate-500'>
              <img src={require('./child.png')} className='w-40 ml-14' alt='child'></img>
              <div className=' w-full h-32'>
                <a className='text-lg'>{user.name}</a>
                <p className='text-xs'>{user.username}</p>
                <p className='mt-2 font-semibold'>{user.email}</p>
              </div>
            </div>
            <TombolPenjelasan/>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardPendidikan