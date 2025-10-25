// import React, { useState } from "react";
// import Background from "../../../assets/bg-login.png";
// import FinansakuLogo from "../../../assets/fix-Logo.svg";
// import { Jwt } from "../../utils/jwt";
// import { Sleep } from "../../utils/sleep";
// import { useUser } from "../../hooks/useUser";
// import { changePass } from "../../api/authApi";
// import { Loader2 } from "lucide-react";

// function Login() {
//     const [email, setEmail] = useState("");
//     const [errors, setErrors] = useState({});
//     const { saveUser } = useUser();
//     const [loading, setLoading] = useState(false);

//     const validasi = () => {
//         const newErrors = {};
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         if (!email) {
//             newErrors.email = "Email wajib diisi";
//         } else if (!emailRegex.test(email)) {
//             newErrors.email = "Format email tidak valid";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validasi()) return;

//         setLoading(true);
//         try {
//             const response = await changePass({ email });
//             const body = await response.json();
//             console.log(body);

//             await Sleep(1000);
//             const payload = Jwt(body.data.token);
//             saveUser(payload);
//         } catch (err) {
//             console.log("Terjadi error:", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//   return (
//     <div className="flex h-screen w-full text-white">
//         <div className="flex flex-col justify-center items-center w-1/2 bg-white text-black gap-8 px-8">
//             <div className="text-center flex flex-col gap-2.5">
//                 <h1 className="text-5xl font-bold mb-4">Lupa Password</h1>
//                 <p className="text-lg text-black">Halaman untuk mengirim tautan reset <br /> lewat email saat lupa kata sandi</p>
//             </div>

//             <form className="flex flex-col gap-8 w-3/4 max-w-sm" onSubmit={handleSubmit} >
//                 <div className="flex flex-col text-left">
//                     <label className="mb-2 font-semibold text-black" htmlFor="userEmail"> Email : </label>
//                     <input type="email" name="userEmail" onChange={(e) => setEmail(e.target.value)} value={email}  placeholder="Masukkan email" id="userEmail" className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"  />
//                     {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
//                 </div>

//                 <button type="submit" className="bg-[#1B263B] hover:bg-[#15224A] text-white font-semibold py-2 rounded-full transition flex justify-center items-center" disabled={loading}>
//                     {loading ? (
//                     <>
//                         <Loader2 className="animate-spin mr-2 h-4 w-4" /> Mengirim...
//                     </>
//                     ) : (
//                         "Submit"
//                     )}
//                 </button>
//             </form>
//         </div>

//         <div className="relative w-1/2 h-full flex justify-center items-center">
//             <img src={Background} alt="Background Finansaku" className="absolute inset-0 w-full h-full object-cover"/>
//             <div className="relative z-10 gap-2.5 flex flex-col items-start justify-around text-white">
//                 <img src={FinansakuLogo} alt="Logo Finansaku" className="mb-6 h-[60px]"  />
//                 <h1 className="text-4xl font-bold mb-8 text-center"> Kelola keuanganmu <br /> capai impianmu  </h1>
//                 <p className="text-lg text-white text-center"> Dari gaji ke alokasi kebutuhan, Finansaku <br /> mempermudahmu membagi uang dengan <br /> bijak tanpa repot menghitung manual.
//                 </p>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Login;
