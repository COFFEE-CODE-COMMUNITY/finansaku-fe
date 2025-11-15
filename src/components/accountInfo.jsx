    import React from 'react'
    import { ChevronRight} from "lucide-react"
    import { useNavigate } from 'react-router-dom'
    import { useUser } from "../hooks/useUser"

    function AccountSettings() {

        const navigate = useNavigate();
        const {user, loading} = useUser()

        console.log(user)
        if (loading) {
            return (
                <div className="flex justify-center items-center h-screen text-white">
                    <p>Loading...</p>
                </div>
            );
         }

        if (!user) {
            return (
            <div className="flex justify-center items-center h-screen text-white">
                <p>User tidak ditemukan</p>
            </div>
            );
        }

        const handleEmailClicked = async (e) => {
            e.preventDefault()

            navigate('/change-email')
        }


        const handleePasswordClicked = async (e) => {
            e.preventDefault()

            navigate('/change-password')
        }

        return (
        <div className="flex flex-col w-full relative h-[500px] max-w-4xl p-12 border border-white text-white shadow-2xl rounded-xl mx-auto">
        
            <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Account Info</h2>

                {/* email */}
                <div onClick={handleEmailClicked} className="flex justify-between items-center py-4 cursor-pointer hover:bg-[#1f253a] transition-colors px-2 -mx-2 rounded">
                    <span className="text-lg text-white">Email</span>
                    <div className="flex items-center space-x-3">
                        <span className="text-lg font-medium text-gray-400">{user.email}</span>
                        <ChevronRight className="w-5 h-5 text-gray-500" /> 
                    </div>
                </div>
            
                <div className="border-t border-gray-700/50"></div>

                {/* password */}
                <div onClick={handleePasswordClicked} className="flex justify-between items-center py-4 cursor-pointer hover:bg-[#1f253a] transition-colors px-2 -mx-2 rounded">
                    <span className="text-lg text-white">Password</span>
                    <div className="flex items-center space-x-3">
                        <span className="text-lg font-medium text-gray-400">************</span>
                        <ChevronRight className="w-5 h-5 text-gray-500" /> 
                    </div>
                </div>
            
                <div className="border-t border-gray-700/50"></div>

            </div>
        
        </div>
        );
    };

    export default AccountSettings;