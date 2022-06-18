export function useUser(){
    if (typeof window !== 'undefined'){
        return {
            loggedIn: localStorage.getItem("auth-token") !== null && localStorage.getItem("username") !== null,
            username: localStorage.getItem("username"),
            authtoken: localStorage.getItem("auth-token")
        }
    }
}