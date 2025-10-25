import config from "../config/script"

// post login
export const login = async ({email, password}) => {
    return fetch(config.BASE_URL_LOGIN, {
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
export const SignUp = async({username, email, password}) =>{
    console.log(`${username}-${email}-${password}`)
    return fetch(config.BASE_URL_REGISTER, {
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

// post change password
// export const changePass = async({userName, name, email, password, status}) =>{
//     return fetch(`${config.BASE_URL}/auth/register`, {
//         method : 'POST',
//         headers: {
//             'Content-Type' : 'application/json',
//             'Accept' : 'application/json'
//         }, 
//         body : JSON.stringify({
//             userName, 
//             name, 
//             email, 
//             password, 
//             status
//         })
//     })
// }