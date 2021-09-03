import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { isuserLogged } from '../../utils/actions'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import  firebase from 'firebase/app'
import { getCurrentUser } from '../../utils/actions'
import Loading from '../../components/Loading'

export default function Account() {
     const [login, setLogin] = useState(false)
     
         
     useEffect(() => {
        setLogin(isuserLogged())     
      }, [])


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
