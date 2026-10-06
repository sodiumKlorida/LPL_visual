function Hero() {
    return (
        <main className="absolute bottom-3 right-3 left-0 top-0 p-1 flex justify-center items-center">
            <div className="flex gap-6 h-[80%] w-[90%] max-w-5xl"> {/* Tambahan max-w agar tidak terlalu melar di layar ultra-wide */}

                {/* KIRI: Bagian Foto */}
                {/* shrink-0 mencegah kotak ini ikut mengecil, overflow-hidden agar sudut foto melengkung */}
                <div className="border-2 border-black h-full w-[35%] rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] overflow-hidden shrink-0 bg-gray-100">
                    {/* Ganti src dengan link foto asli Anda */}
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                        alt="Foto Profil"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* KANAN: Bagian Nama & Tentang */}
                {/* Hapus w-[35%], biarkan flex-1 yang bekerja. Tambah p-8 untuk jarak teks (padding) */}
                <div className="flex-1 flex flex-col border-2 border-black h-full rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-8 bg-white">

                    {/* Nama */}
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        John Doe
                    </h1>
                    <h2 className="text-xl font-medium text-gray-500 mb-6 pb-6 border-b-2 border-gray-200">
                        Frontend Developer
                    </h2>

                    {/* Tentang */}
                    <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">Tentang Saya</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Halo! Saya adalah seorang pengembang web yang antusias dengan desain UI/UX. Saya sangat suka merancang antarmuka yang tidak hanya terlihat bagus, tetapi juga mudah digunakan. Saat ini saya berfokus pada ekosistem React dan Tailwind CSS.
                        </p>
                    </div>

                    {/* Tombol Aksi (Opsional, merapat ke bawah karena flex-1 pada teks di atasnya) */}
                    <div className="flex gap-3 mt-6">
                        <button className="border-2 border-black px-6 py-2 rounded-xl font-bold bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
                            Hire Me
                        </button>
                        <button className="border-2 border-black px-6 py-2 rounded-xl font-bold bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
                            Portfolio
                        </button>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Hero