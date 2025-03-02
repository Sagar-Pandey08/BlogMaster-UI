import { createContext, useEffect, useState } from "react"
import app from "../Firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const register = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email, password)
  }

  const profileUpdate = (name, image) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image
    })
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }


  useEffect(() => {
    const UnSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      // console.log(currentUser)
    })
    return () => {
      UnSubscribe()
      setLoading(false)
    }
  }, [])

  const userInfo = {
    user,
    loading,
    register,
    login,
    logOut,
    profileUpdate,
    googleLogin,
  }

  return (
    <div>
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider