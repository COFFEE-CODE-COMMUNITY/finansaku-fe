import config from "../config/script";

// Login
export const login = async ({email, password}) => {
    return fetch(`${config.BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        credentials: 'include', // ✅ important: send & receive cookies
        body: JSON.stringify({ email, password }),
    })
}

// Sign Up
export const SignUp = async ({name, username, email, password }) => {
    console.log(`${config.BASE_URL}/auth/register`)
    return fetch(`${config.BASE_URL}/auth/register`, { // sesuaikan URL
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, username, email, password}),
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

// change pass satu
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
        credentials: 'include', 
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
// export const SubmitSurvey = async (cityName,  salary,  dependents) => {
//     return fetch(`${config.BASE_URL}/survey/submit`, {
//             method : 'POST',
//             headers : {
//                 'Content-Type' : 'application/json',
//                 'Accept' : 'application/json'
//             },
//             body : JSON.stringify({cityName,  salary,  dependents}),
//             credentials : "include"
//     })
// };

export const SubmitSurvey = async ({city, salary, householdSize}) => {
    return fetch(`${config.BASE_URL}/survey/submit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({city, salary, householdSize}),
        credentials: "include"
    });
};


// change pass 2
export const changePassSetting = async({ currentPass, newPass }) =>{
    return fetch(`${config.BASE_URL}/user/change-password`, { // sesuaikan URL
        method : 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
        },
        credentials: "include",
        body : JSON.stringify({ currentPass, newPass })
    })
}

// Data Dashboard
export const dataDashboard = async () => {
    return fetch(`${config.BASE_URL}/dashboard/me`, { 
        method : "GET",
        headers: {
        'Accept': 'application/json',
        },
        credentials: 'include', 
    });
};


// Data History
export const dataHistory = async () => {
    return fetch(`${config.BASE_URL}/history`, { 
        headers: {
        'Accept': 'application/json',
        },
        credentials: 'include', 
    });
};

// Change email settingz
export const changeEmailSetting = async ({email}) => {
    return fetch(`${config.BASE_URL}/user/change-email`, { 
        method : 'PATCH',
        headers:{
        'Accept': 'application/json',
        },
        credentials: 'include', 
        body : JSON.stringify({ email })
    });
};
