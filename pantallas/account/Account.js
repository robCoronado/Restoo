import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { isuserLogged } from '../../utils/actions'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import  firebase from 'firebase/app'
import { getCurrentUser } from '../../utils/actions'
import Loading from '../../components/Loading'
import { useFocusEffect } from '@react-navigation/native'

export default function Account() {
     const [login, setLogin] = useState(null)
     
     useFocusEffect(
        useCallback(() => {
            const user = getCurrentUser()
            user ? setLogin(true) : setLogin(false)    
          }, [])
    

     )
         
     

    //   let isLogged = false
    //   firebase.auth().onAuthStateChanged((user) => {
    //       user !== null ? (setLogin(true)) : setLogin(false)

    //  })

     if (login == null){
         return <Loading isVisible={true} text="Cargando..."/>
     }

    return login ? <UserLogged/> : <UserGuest/>
        
    
}

const styles = StyleSheet.create({})
