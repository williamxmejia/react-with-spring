class AuthenticationService{
    registerSuccessfullLogin(username, password){
        console.log('Successful');
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return false;
        return true
    }

}

export default new AuthenticationService();