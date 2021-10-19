import React, { useEffect, useRef } from 'react'
import Navigations from './Navigations/Navigations'
import { LogBox } from 'react-native'

import {startNotifications} from './utils/actions'

LogBox.ignoreAllLogs()


export default function App() {

  const notificationListener = useRef()
  const responseListener = useRef()

  useEffect(() => {
    startNotifications(notificationListener, responseListener)
  }, [])
  return (

    <Navigations/>

    
  )
}

