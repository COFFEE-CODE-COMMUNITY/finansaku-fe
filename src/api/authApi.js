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
  console.log(`${config.BASE_URL}/auth/register`)
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
    return fetch(`${config.BASE_URL}/auth/forgot-password`, { // sesuaikan URL
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

// change pass
export const changePass = async({ token, newPassword }) =>{
    return fetch(`${config.BASE_URL}/auth/reset-password`, { // sesuaikan URL
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        },
        credentials: "include",
        body : JSON.stringify({ token, newPassword })
    })
}


  // === GET Verify Token ===
export const verify = async () => {
  return fetch(`${config.BASE_URL}/auth/me`, { // sesuaikan URL
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    credentials: 'include', // cookie dikirim otomatis
  });
};

//Logout?
export const logout = async () => {
  return fetch(`${config.BASE_URL}/auth/logout`, {
    method : 'POST',
    credentials : "include"
  })
}

// Post Survey
export const SubmitSurvey = async (domisili, salary, tanggungan, hasilSurvey) => {
        return fetch(config.Base_URL_SURVEY, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify({
                domisili, 
                salary, 
                tanggungan,
                hasilSurvey
        })
        })
};

