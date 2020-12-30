import Axios from 'axios'
import {API_URL} from "./Constants";

export const USERNAME_SESSION_ATTRIBUTE="username"

class Authentification {
    registerSuccessfulLogin(username, password) {

        sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE, username)
        this.setupAxiosInterceptors(this.createBasicAuthenfication(username,password))
    }

    logout() {
        sessionStorage.removeItem(USERNAME_SESSION_ATTRIBUTE)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE)

        if (user === null) return false
        return true
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem(USERNAME_SESSION_ATTRIBUTE)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        Axios.interceptors.request.use(
            (config)=>{

                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

    createBasicAuthenfication(username,password){
        return "Basic " + window.btoa(username+":"+password)
    }

    executeBasicAuthentificationservice(username,password){
        return Axios.get(`${API_URL}/basicAuth`,{
            headers:{
                authorization:this.createBasicAuthenfication(username,password)
            }
        })
    }

    executeJWTAuthentificationService(username,password){
        return Axios.post(`${API_URL}/authenticate`,{
            username:username,
            password:password
        })

    }

    executeJWTAuthentificationToken(username,token){
        sessionStorage.setItem(USERNAME_SESSION_ATTRIBUTE,username)
        this.setupAxiosInterceptors(this.createBearerToken(token))
    }
    createBearerToken(token){
        return 'Bearer '+token
    }

}

export default  new Authentification()
