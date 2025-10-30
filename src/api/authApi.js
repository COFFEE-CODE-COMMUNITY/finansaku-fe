import config from "../config/script"

// === POST Login ===
export const login = async ({ email, password }) => {
  return fetch(`${config.BASE_URL}/auth/login` , { // sesuaikan URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'include', // ✅ important: send & receive cookies
    body: JSON.stringify({ email, password }),
  })
}

// === POST Sign Up ===
export const SignUp = async ({name, username, email, password }) => {
  return fetch(`${config.BASE_URL}/auth/register`, { // sesuaikan URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name,
      username,
      email,
      password,
    }),
  })
}

// forgot pass
export const ForgotPass = async({email}) =>{
    return fetch(`${config.BASE_URL}/auth/forgotpassowrd`, { // sesuaikan URL
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }, 
        // credentials: 'include', tidak butuh token
        body : JSON.stringify({
            email, 
        })
    })
}

// change pass
export const changePass = async({token, password}) =>{
    return fetch(`${config.BASE_URL}/auth/forgotpassowrd`, { // sesuaikan URL
        method : 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        }, 
        body : JSON.stringify({token, password})
    })
}

  // === GET Verify Token ===
  export const verify = async () => {
    return fetch(`${config.BASE_URL}/auth/verify`, { // sesuaikan URL
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      credentials: 'include', // cookie dikirim otomatis
    });
};


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

