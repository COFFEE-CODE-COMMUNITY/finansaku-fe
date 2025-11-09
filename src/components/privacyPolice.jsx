import React from "react";
import {NavLink} from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

export default function PrivacyPolicy() {

    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        // seed back the data to signUp
        navigate("/signUp", { state: location.state });
    }
    
    return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex justify-center gap-4 items-center p-8">
        <div className="w-6xl bg-gray-800 shadow-xl rounded-2xl p-10">
            <h1 className="text-2xl font-bold mb-2">Kebijakan Privasi</h1>
            <p className="text-sm text-white mb-6"> Kebijakan Privasi ini terakhir diperbarui pada 21 Oktober 2025. </p>

            <section className="flex flex-col gap-8 text-sm">
                <div>
                    <h2 className="font-semibold text-lg mb-2">Informasi yang Kami Kumpulkan</h2>
                    <p> Kami mengumpulkan data pribadi yang Anda berikan secara langsung kepada kami, seperti nama, alamat email, dan informasi keuangan yang Anda masukkan untuk tujuan perencanaan anggaran. Selain itu, kami juga mengumpulkan data teknis secara otomatis, seperti alamat IP, jenis perangkat, dan aktivitas penggunaan aplikasi, untuk meningkatkan pengalaman pengguna. </p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Penggunaan Informasi</h2>
                    <p>Informasi yang kami kumpulkan digunakan untuk:</p>
                    <ol className="list-decimal ml-6 mt-2">
                        <li>Menyediakan dan mempersonalisasi layanan kami.</li>
                        <li>Mengirimkan pembaruan, notifikasi, dan informasi terkait layanan.</li>
                        <li>Menganalisis dan meningkatkan kinerja aplikasi.</li>
                        <li>Mematuhi kewajiban hukum yang berlaku.</li>
                    </ol>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Perlindungan Data</h2>
                    <p>Kami berkomitmen untuk melindungi data pribadi Anda dengan menggunakan teknologi enkripsi dan prosedur keamanan yang sesuai. Data Anda tidak akan dijual atau dibagikan kepada pihak ketiga tanpa izin eksplisit dari Anda, kecuali jika diwajibkan oleh hukum.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Hak Pengguna</h2>
                    <p>Anda memiliki hak untuk:</p>
                    <ol className="list-decimal ml-6 mt-2 space-y-1">
                        <li>Mengakses, memperbarui, atau menghapus informasi pribadi Anda.</li>
                        <li>Menarik persetujuan Anda kapan saja tanpa memengaruhi keabsahan pemrosesan sebelumnya.</li>
                        <li>Menghubungi kami untuk pertanyaan atau keluhan terkait privasi.</li>
                    </ol>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Pembaruan Kebijakan</h2>
                    <p> Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. Setiap perubahan akan diumumkan melalui aplikasi atau situs web kami dengan tanggal pembaruan yang jelas.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Penggunaan Layanan</h2>
                    <p>Layanan Finansaku hanya boleh digunakan untuk tujuan pribadi dan non-komersial. Anda setuju untuk tidak menggunakan layanan kami untuk aktivitas ilegal atau yang melanggar hak pihak ketiga.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Akun Pengguna</h2>
                    <p>Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun Anda, termasuk nama pengguna dan kata sandi. Anda setuju untuk segera memberitahukan kami jika ada penggunaan akun Anda yang tidak sah.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Konten Pengguna</h2>
                    <p>Anda mempertahankan hak atas konten yang Anda unggah ke aplikasi kami, namun memberikan izin kepada kami untuk menggunakan konten tersebut dalam konteks penyediaan layanan. Anda setuju untuk tidak mengunggah konten yang melanggar hak cipta, pornografi, atau materi ilegal lainnya.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Pembatasan Tanggung Jawab</h2>
                    <p>Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari penggunaan layanan kami. Layanan kami disediakan "sebagaimana adanya", tanpa jaminan apapun, baik tersurat maupun tersirat.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Kebijakan Perubahan Layanan</h2>
                    <p>Kami berhak untuk mengubah atau menghentikan layanan kami kapan saja tanpa pemberitahuan sebelumnya. Setiap perubahan akan diumumkan melalui aplikasi atau situs web kami.</p>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-2">Hukum yang Berlaku</h2>
                    <p>Syarat dan Ketentuan ini diatur oleh hukum yang berlaku di Indonesia. Setiap sengketa yang timbul akan diselesaikan melalui mediasi atau arbitrase sesuai dengan peraturan yang berlaku.</p>
                </div>
            </section>

            <div className="mt-8 flex w-full justify-end items-end">
                <button onClick={handleBack} className='bg-[#778DA9] w-[100px] text-center p-2.5 rounded-xl border-white border hover:bg-[#4C5E73]'>Daftar</button>
            </div>
        </div>
    </div>
    );
}
