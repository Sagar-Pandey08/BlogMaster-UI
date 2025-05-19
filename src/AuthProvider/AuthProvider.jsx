import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";
import useAxiosPublic from "../components/Hooks/AxiosPublic/useaxiosPublic";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const register = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
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
    return signInWithPopup(auth, googleProvider)
  }


  useEffect(() => {
    const UnSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      // console.log(currentUser)
      const userEmail = { email: currentUser?.email }
      if (currentUser) {
        //create JWT
        axiosPublic.post("/jwt", userEmail)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem("token", res.data.token)
            }
          })
      }else{
        localStorage.removeItem("token")
      }
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