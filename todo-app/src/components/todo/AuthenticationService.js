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

    getLoggedInUsername() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) return '';
        return user;
    }

}

export default new AuthenticationService();