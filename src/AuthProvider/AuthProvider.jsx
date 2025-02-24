import { createContext, useEffect, useState } from "react"
import app from "../Firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
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

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  useEffect(() => {
    const UnSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      console.log(currentUser)
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
    logOut
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