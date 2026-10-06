import { ArrowLeft } from "lucide-react";

function HandleButton() {

    console.log("press")

}


function Header() {
    return (
        <main className="absolute top-2 left-0 right-3 h-full p-1">
            {/* Tambahkan flex, flex-col, bg-white, dan overflow-hidden agar rapi */}
            <div className="h-full w-full border-2 border-black rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col bg-white overflow-hidden">

                {/* HEADER SECTION */}
                <header className="flex justify-between items-center p-5 border-b-2 border-black bg-gray-50 shrink-0">

                    {/* Bagian Kiri: Logo / Judul */}
                    <div className="font-bold text-xl tracking-wide">
                        <button
                            onClick={HandleButton}
                            className="flex items-center justify-center w-11 h-11 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                            title="Kembali"
                        >
                            <ArrowLeft size={24} strokeWidth={3} />
                        </button>
                    </div>

                    {/* Bagian Kanan: Tombol Dark Mode */}
                    {/* Tombol ini memiliki efek ditekan (hover:translate) yang cocok dengan tema shadow tebal */}
                    <div className="flex gap-3">
                        <button
                            className="flex items-center gap-2 px-4 py-2 font-bold bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                            title="Toggle Dark Mode"
                        >
                            {/* Anda bisa mengganti emoji ini dengan icon sungguhan (misal dari Lucide React / Heroicons) */}
                            {/* <span className="text-lg">🌙</span> */}
                            <span className="hidden sm:block">Tampilan</span>
                        </button>

                        <button
                            className="flex justify-center items-center w-11 h-11 bg-white border-2 border-black rounded-xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                            title="Toggle Dark Mode"
                        >
                            <span className="text-xl leading-none">🌙</span>
                        </button>
                    </div>
                </header>
            </div>
        </main>
    )
}

export default Header