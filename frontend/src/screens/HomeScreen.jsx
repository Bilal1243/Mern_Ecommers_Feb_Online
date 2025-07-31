import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function HomeScreen() {

  const {userInfo} = useSelector((state)=>state.auth)

  const navigate = useNavigate()

  useEffect(()=>{
    if(!userInfo){
      navigate('/login')
    }
  },[])

  return (
    <>
    HomeScreen
    </>
  )
}

export default HomeScreen