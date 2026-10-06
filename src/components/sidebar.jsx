

function Sidebar() {
    return (
        <main className="absolute top-2 left-2 bottom-3 right-0 p-1">
            {/* Tambahkan bg-white dan overflow-hidden */}
            <div className="border-2 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] w-full h-full rounded-2xl overflow-hidden flex flex-col">

                {/* BAGIAN ATAS (Logo & Menu) */}
                {/* flex-1 agar mengambil semua sisa ruang kosong, dan overflow-y-auto agar aman di layar kecil */}
                <div className="flex flex-col flex-1 overflow-y-auto">

                    {/* Logo - Tambahkan border-black dan tebalkan font */}
                    <div className="border-b-2 border-black py-6 text-center font-black text-2xl tracking-widest uppercase bg-gray-50">
                        Logo
                    </div>

                    {/* Menu Links */}
                    <div className="flex flex-col gap-4 p-6">
                        <a
                            href="#"
                            className="block border-2 border-black bg-white rounded-xl py-3 text-center font-bold shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                        >
                            Beranda
                        </a>
                        <a
                            href="#"
                            className="block border-2 border-black bg-white rounded-xl py-3 text-center font-bold shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                        >
                            Tentang
                        </a>
                        <a
                            href="#"
                            className="block border-2 border-black bg-white rounded-xl py-3 text-center font-bold shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                        >
                            Contact
                        </a>
                    </div>

                </div>

                {/* BAGIAN BAWAH (Log Out) */}
                {/* Dibungkus dalam container bergaris batas agar selalu rapi di paling bawah */}
                <div className="p-6 border-t-2 border-black bg-gray-50">
                    <a
                        href="#"
                        // Tombol logout biasanya punya warna peringatan (merah). 
                        // Hover efeknya saya balik: bayangan hilang dan tombol seakan "ditekan" ke dalam.
                        className="block border-2 border-black bg-white rounded-xl py-3 text-center font-bold shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                    >
                        Log out
                    </a>
                </div>

            </div>
        </main>
    )
}

export default Sidebar