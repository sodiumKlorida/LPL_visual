import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Jika Anda menggunakan react-router

const DataKasMasuk = () => {
    // 1. Data Dummy
    const dataDummy = [
        { id: 1, kode: 'KM-202610-001', akun: '110201 - BCA 363-2900900', tgl: '01-10-2026', ket: 'Pembayaran Invoice INV/2026/09/001', nominal: 'Rp 15.000.000', dari: 'PT Maju Jaya', cek: '-', user: 'Ezra Gilang' },
        { id: 2, kode: 'KM-202610-002', akun: '110101 - Kas Kecil SBY', tgl: '02-10-2026', ket: 'Sisa Uang Muka Operasional', nominal: 'Rp 500.000', dari: 'Budi Santoso', cek: '-', user: 'Admin Pusat' },
        { id: 3, kode: 'KM-202610-003', akun: '110202 - Mandiri 666999', tgl: '03-10-2026', ket: 'Pelunasan Tagihan Bulan Lalu', nominal: 'Rp 32.500.000', dari: 'CV Samudra Abadi', cek: 'CEK-998877', user: 'Ezra Gilang' },
        { id: 4, kode: 'KM-202610-004', akun: '110104 - Kas Kecil WGP', tgl: '04-10-2026', ket: 'Pengembalian Kas Bon', nominal: 'Rp 1.200.000', dari: 'Ahmad Staff', cek: '-', user: 'Admin WGP' },
        { id: 5, kode: 'KM-202610-005', akun: '110204 - OCBC - 642800013749', tgl: '05-10-2026', ket: 'Uang Muka Proyek Pembangunan A', nominal: 'Rp 10.000.000', dari: 'PT Lintas Bangun', cek: 'CEK-112233', user: 'Ezra Gilang' },
    ];

    // 2. State Management
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    // Referensi untuk klik di luar dropdown
    const dropdownRef = useRef(null);

    // 3. Logic Checkbox
    const handleCheckAll = (e) => {
        if (e.target.checked) {
            // Pilih semua ID
            setSelectedRows(dataDummy.map(item => item.id));
        } else {
            // Kosongkan pilihan
            setSelectedRows([]);
        }
    };

    const handleCheckItem = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const isAllChecked = selectedRows.length === dataDummy.length && dataDummy.length > 0;

    // 4. Logic Dropdown (Tutup saat klik di luar)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 5. Submit Search Form
    const handleSearch = (e) => {
        e.preventDefault();
        // Lakukan logika pencarian / fetch API di sini
        alert('Melakukan pencarian...');
    };

    return (
        <div className="bg-gray-100 p-4 md:p-8 font-sans text-gray-800 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                    
                    {/* HEADER & TOMBOL TAMBAH */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <h3 className="text-2xl font-bold text-gray-800">Data Kas Masuk</h3>
                        <Link to="/kas-masuk/add" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow transition-all duration-200">
                            <i className="fa fa-plus-circle mr-2"></i> Tambah Data
                        </Link>
                    </div>
                        
                    {/* FILTER PENCARIAN */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 mb-6 bg-gray-50">
                        <form onSubmit={handleSearch}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
                                
                                {/* Tanggal Awal & Akhir */}
                                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                            Tanggal Awal
                                            <button type="button" className="text-red-500 ml-1 hover:text-red-700" onClick={() => setDateFrom('')} title="Kosongkan">
                                                <i className="fa fa-history"></i>
                                            </button>
                                        </label>
                                        <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} name="date_from" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                                            Tanggal Akhir
                                            <button type="button" className="text-red-500 ml-1 hover:text-red-700" onClick={() => setDateTo('')} title="Kosongkan">
                                                <i className="fa fa-history"></i>
                                            </button>
                                        </label>
                                        <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} name="date_to" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white" />
                                    </div>
                                </div>

                                {/* Metode Pembayaran */}
                                <div className="lg:col-span-1">
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Metode</label>
                                    <select name="payment_method" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white">
                                        <option value="">SEMUA</option>
                                        <option value="2">110101 - Kas Kecil SBY</option>
                                        <option value="3">110102 - Ayat Silang</option>
                                        <option value="4">110103 - Kas Bongkar Muat</option>
                                        <option value="5">110104 - Kas Kecil WGP</option>
                                        <option value="7">110206 - Deposito Bank</option>
                                        <option value="8">110201 - BCA 363-2900900</option>
                                        <option value="9">110202 - Mandiri 666999</option>
                                    </select>
                                </div>

                                {/* Cari Keyword */}
                                <div className="lg:col-span-1">
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Cari Keyword</label>
                                    <input type="text" name="search_keyword" placeholder="Kata kunci..." className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white" />
                                </div>

                                {/* Cari No Cek */}
                                <div className="lg:col-span-1">
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Cari No Cek</label>
                                    <input type="text" name="search_no_cek" placeholder="No cek..." className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none bg-white" />
                                </div>

                                {/* Tombol Cari */}
                                <div className="lg:col-span-1">
                                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold rounded-full p-2 text-sm transition-all shadow">
                                        <i className="fa fa-search mr-1"></i> Cari
                                    </button>
                                </div>
                                
                            </div>
                        </form>
                    </div>

                    {/* TABEL DATA KAS MASUK */}
                    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="px-4 py-3 font-semibold w-16 text-center relative" ref={dropdownRef}>
                                        <div className="flex items-center justify-center space-x-2">
                                            <input 
                                                type="checkbox" 
                                                checked={isAllChecked}
                                                onChange={handleCheckAll}
                                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                                            />
                                            <button 
                                                type="button" 
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                            >
                                                <i className="fas fa-caret-down"></i>
                                            </button>
                                        </div>
                                        {/* Dropdown Menu (Hapus) */}
                                        {isDropdownOpen && (
                                            <div className="absolute left-4 top-10 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10 text-left">
                                                <button 
                                                    type="button"
                                                    onClick={() => alert(`Menghapus data ID: ${selectedRows.join(', ')}`)}
                                                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition"
                                                >
                                                    <i className="fa fa-trash mr-2"></i> Hapus Data
                                                </button>
                                            </div>
                                        )}
                                    </th>
                                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Kode</th>
                                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Akun Bank/Kas</th>
                                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Tanggal</th>
                                    <th className="px-4 py-3 font-semibold min-w-[200px]">Keterangan</th>
                                    <th className="px-4 py-3 font-semibold text-right whitespace-nowrap">Nominal</th>
                                    <th className="px-4 py-3 font-semibold whitespace-nowrap">Dari</th>
                                    <th className="px-4 py-3 font-semibold whitespace-nowrap">No. Cek</th>
                                    <th className="px-4 py-3 font-semibold whitespace-nowrap">User</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                
                                {dataDummy.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50 transition">
                                        <td className="px-4 py-3 text-center align-middle">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedRows.includes(item.id)}
                                                onChange={() => handleCheckItem(item.id)}
                                                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer" 
                                            />
                                        </td>
                                        <td className="px-4 py-3 font-medium text-gray-900">{item.kode}</td>
                                        <td className="px-4 py-3">{item.akun}</td>
                                        <td className="px-4 py-3">{item.tgl}</td>
                                        <td className="px-4 py-3 text-gray-600">{item.ket}</td>
                                        <td className="px-4 py-3 text-right font-semibold text-gray-800">{item.nominal}</td>
                                        <td className="px-4 py-3">{item.dari}</td>
                                        <td className={`px-4 py-3 ${item.cek !== '-' ? 'font-medium text-blue-600' : 'text-gray-500'}`}>
                                            {item.cek}
                                        </td>
                                        <td className="px-4 py-3">{item.user}</td>
                                    </tr>
                                ))}

                                {dataDummy.length === 0 && (
                                    <tr>
                                        <td colSpan="9" className="text-center text-gray-500 py-4">Tidak ada data ditemukan</td>
                                    </tr>
                                )}
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DataKasMasuk;