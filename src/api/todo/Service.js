import Axios from "axios";
import {API_URL} from "../../component/todo/Constants";

class Service{


    //Get Message
    executeservice(){
        return Axios.get(`${API_URL}/todo-app-bean`)
        //console.log("Test")
    }
    //Get Message with passing a path variable
    executeservicewithpathvariable(name){
        return Axios.get(`${API_URL}/todo-app-bean/${name}`)
    }

    //GetErrorMessage
    executeserviceError(){
        return Axios.get(`${API_URL}/todo-app-bean-error`)
    }
}

export default new Service()