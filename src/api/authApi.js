// import config from "../config/script"

// post login
export const login = async ({email, password}) => {
    return fetch("http://localhost:8081/api/v1/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'Application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    })
}

// post sign up
export const SignUp = async({username, name, email, password}) =>{
    console.log(`${username}-${email}-${name}-${password}`)
    return fetch("http://localhost:8081/api/v1/auth/register", {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }, 
        body : JSON.stringify({
            username, 
            email, 
            password, 
        })
    })
}
// forgot pass
export const ForgotPass = async({email}) =>{
    console.log(`${email}`)
    return fetch("https://charolette-unmasterful-unpliably.ngrok-free.dev", {
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }, 
        body : JSON.stringify({
            email, 
        })
    })
}



// Post Survey
// export const submitSurvey = async (domisili, salary, status) => {
//         return fetch(config.Base_URL_SURVEY, {
//             method : 'POST',
//             headers : {
//                 'Content-Type' : 'application/json',
//                 'Accept' : 'application/json'
//             },
//             body : JSON.stringify({
//                 domisili, 
//                 salary, 
//                 status, 
//         })
//         })
// };

//post change password
export const changePass = async({password, token}) =>{
    return fetch("https://charolette-unmasterful-unpliably.ngrok-free.dev", {
        method : 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            "Authorization": `Bearer ${token}`
        }, 
        body : JSON.stringify({password})
    })
}
