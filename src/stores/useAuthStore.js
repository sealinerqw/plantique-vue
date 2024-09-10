import { auth } from '../main'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { defineStore } from 'pinia'
import router from '@/router/index.js'


export const useAuthStore = defineStore('authStore',{
  state: () => ({
    error: null,
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

    },

    init(){
      onAuthStateChanged(auth, (user) =>{
        if (user){
          this.user.id = user.uid
          this.user.email = user.email
          router.push('/')
        }
        else{
          this.user = {}
          router.push('/login')
        }
      })
    }
  }
})