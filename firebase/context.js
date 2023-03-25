/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from './firebase'
import 'firebase/firestore'
import 'firebase/storage'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  return context
}

export function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)

  const signUp = (name, email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const logOut = () =>
    signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
  }, [])

  return (
      <authContext.Provider value={{ signUp, login, logOut, user }}>{children}</authContext.Provider>
  )
}
