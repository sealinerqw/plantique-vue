import { auth } from '../main'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { defineStore } from 'pinia'
import router from '@/router/index.js'


export const useAuthStore = defineStore('authStore',{
  state: () => ({
    error: null,
    isLoggedIn: false,
    user: null
  }),
  actions: {
    async register(email, password){
      try{
        const user = await createUserWithEmailAndPassword(auth, email, password)
        if(user){
          router.push('/')
        }
      } catch (err){
        this.error = err
      }
    },

    async login(email, password){
      try{
        const res = await signInWithEmailAndPassword(auth, email, password)
        if(res){
          router.push('/')
        }
      } catch(err){
        this.error = err
      }
    },

    async logout(){
      await signOut(auth)
    },
    
    init(){
      onAuthStateChanged(auth, (user) =>{
        let userData = {id: user.uid, email: user.email, username: user.displayName, profilePicture: user.photoURL }

        if (user){
          this.isLoggedIn = true
          this.user = user
          sessionStorage.setItem('user', JSON.stringify(userData))
        }
        else{
          this.isLoggedIn = false
          this.user = null
          sessionStorage.removeItem('user')
          router.push('/login')
        }
      })
    }
  }
})