import axios from "axios";

class HelloWorldService {
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
        // console.log('executed service');
    }

    executeHelloWorldBean(){
        return axios.get('http://localhost:8080/hello-world-bean')
        // console.log('executed service');
    }

    executeHelloWorlPathVarible(name){
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
        // console.log('executed service');
    }
    
}

export default new HelloWorldService();