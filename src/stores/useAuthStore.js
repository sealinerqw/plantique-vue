import { auth } from '../main'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { defineStore } from 'pinia'
import router from '@/router/index.js'


export const useAuthStore = defineStore('authStore',{
  state: () => ({
    error: null,
    isLoggedIn: false,
    user:{

    }
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
      this.user.email = ''
      this.user.uid = ''
    },

    init(){
      onAuthStateChanged(auth, (user) =>{
        if (user){
          this.isLoggedIn = true
          this.user.id = user.uid
          this.user.email = user.email
          this.user.displayName = user.displayName
        }
        else{
          this.isLoggedIn = false
          this.user = {}
          router.push('/login')
        }
      })
    }
  }
})