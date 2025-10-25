// export const Jwt = (token) => {
//   try {
//     const base64Payload = token.split('.')[1]; // mengambil data ke[1] aka payload isinya data user yg di encode  | JWT (header.paycode.signature)
//     const payload = JSON.parse(atob(base64Payload)); // atob for decode ke string biasa, json ke object js
//     // return agar bisa dipake di another comp
//     return payload;

//   } catch (err) {
//     console.error("Failed to decode token:", err);
//     return null;
//   }
// };


export const Jwt = (token) => {
  // kalau token kosong atau tidak dalam format JWT valid
  if (!token || typeof token !== 'string' || !token.includes('.')) {
    console.warn("Invalid or missing token:", token);
    return null;
  }

  try {
    const base64Payload = token.split('.')[1];
    const payload = JSON.parse(atob(base64Payload));
    return payload;
  } catch (err) {
    console.error("Failed to decode token:", err);
    return null;
  }
};


