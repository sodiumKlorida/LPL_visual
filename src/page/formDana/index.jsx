import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RequestForm = () => {
    // State untuk Jenis Pengajuan (menentukan form mana yang tampil)
    const [requestType, setRequestType] = useState('');

    // State untuk List Barang
    const [itemsBarang, setItemsBarang] = useState([
        { name: '', qty: '', unit: '', note: '' }
    ]);

    // State untuk List Dana
    const [itemsDana, setItemsDana] = useState([
        { type: '', nominal: '', unit: 'IDR', note: '' }
    ]);

    // === HANDLER BARANG ===
    const addBarang = () => {
        setItemsBarang([...itemsBarang, { name: '', qty: '', unit: '', note: '' }]);
    };

    const removeBarang = (index) => {
        if (itemsBarang.length > 1) {
            const newItems = itemsBarang.filter((_, i) => i !== index);
            setItemsBarang(newItems);
        } else {
            alert('Minimal harus ada 1 item barang!');
        }
    };

    const handleBarangChange = (index, field, value) => {
        const newItems = [...itemsBarang];
        newItems[index][field] = value;
        setItemsBarang(newItems);
    };

    // === HANDLER DANA ===
    const addDana = () => {
        setItemsDana([...itemsDana, { type: '', nominal: '', unit: 'IDR', note: '' }]);
    };

    const removeDana = (index) => {
        if (itemsDana.length > 1) {
            const newItems = itemsDana.filter((_, i) => i !== index);
            setItemsDana(newItems);
        } else {
            alert('Minimal harus ada 1 item pengajuan dana!');
        }
    };

    const handleDanaChange = (index, field, value) => {
        const newItems = [...itemsDana];

        if (field === 'nominal') {
            // Format Rupiah (Ribuan)
            const numberString = value.replace(/[^0-9]/g, '');
            let sisa = numberString.length % 3;
            let rupiah = numberString.substring(0, sisa);
            let ribuan = numberString.substring(sisa).match(/\d{3}/g);

            if (ribuan) {
                let separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            newItems[index][field] = rupiah;
        } else {
            newItems[index][field] = value;
        }

        setItemsDana(newItems);
    };

    return (
        <div className="bg-gray-100 p-4 md:p-8 font-sans text-gray-800 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    
                    {/* Header */}
                    <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-gray-700">Form Pengajuan Request</h3>
                        <Link to={"/"} className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
                            <i className="fa fa-arrow-circle-left mr-2"></i> Kembali
                        </Link>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                        <form id="form-add" encType="multipart/form-data">
                            
                            {/* Top Info Section */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal <span className="text-red-500">*</span></label>
                                    <input type="date" name="date" defaultValue="2026-10-06" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 outline-none" required />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pegawai <span className="text-red-500">*</span></label>
                                    <select name="id_employee" defaultValue="46" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 outline-none bg-white" required>
                                        <option value="">Pilih Pegawai</option>
                                        <option value="1">joenanta refandi</option>
                                        <option value="46">Ezra Gilang Raharjo</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Pengajuan <span className="text-red-500">*</span></label>
                                    <select 
                                        name="id_request_type" 
                                        value={requestType}
                                        onChange={(e) => setRequestType(e.target.value)}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 outline-none bg-white" 
                                        required
                                    >
                                        <option value="">Pilih Jenis Pengajuan</option>
                                        <option value="4">HRD</option>
                                        <option value="3">Pengajuan Amprahan</option>
                                        <option value="1">Pengajuan Dana Cash / Pengurusan Perijinan</option>
                                        <option value="2">Pengajuan Pembelian</option>
                                    </select>
                                </div>

                                <div className="md:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Catatan</label>
                                    <textarea name="note" rows="2" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="Masukkan keterangan tambahan..."></textarea>
                                </div>
                            </div>

                            {/* ========================================== */}
                            {/* BAGIAN 1: TABEL BARANG (Tampil jika BUKAN 1 dan BUKAN kosong) */}
                            {/* ========================================== */}
                            {requestType !== '' && requestType !== '1' && (
                                <div>
                                    <hr className="border-gray-200 mb-6" />
                                    <label className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold tracking-wide uppercase mb-2">DAFTAR ITEM BARANG</label>

                                    <div className="overflow-x-auto border border-gray-200 rounded-md mb-4">
                                        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                                            <thead className="bg-gray-50 text-gray-700">
                                                <tr>
                                                    <th className="px-4 py-3 font-semibold text-center w-12">No</th>
                                                    <th className="px-4 py-3 font-semibold w-64">Nama Barang</th>
                                                    <th className="px-4 py-3 font-semibold w-24">Qty</th>
                                                    <th className="px-4 py-3 font-semibold w-32">Satuan</th>
                                                    <th className="px-4 py-3 font-semibold">Catatan Item</th>
                                                    <th className="px-4 py-3 font-semibold w-56">Gambar</th>
                                                    <th className="px-4 py-3 font-semibold text-center w-16">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {itemsBarang.map((item, index) => (
                                                    <tr key={index} className="hover:bg-gray-50 transition">
                                                        <td className="px-4 py-3 text-center align-middle font-medium text-gray-500">{index + 1}</td>
                                                        <td className="px-4 py-3 align-top">
                                                            <input type="text" name="item_name[]" value={item.name} onChange={(e) => handleBarangChange(index, 'name', e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none" placeholder="Nama barang..." required />
                                                        </td>
                                                        <td className="px-4 py-3 align-top">
                                                            <input type="number" name="item_qty[]" value={item.qty} onChange={(e) => handleBarangChange(index, 'qty', e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none" placeholder="0" min="1" required />
                                                        </td>
                                                        <td className="px-4 py-3 align-top">
                                                            <select name="item_unit[]" value={item.unit} onChange={(e) => handleBarangChange(index, 'unit', e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none bg-white" required>
                                                                <option value="">-- Pilih --</option>
                                                                <option value="BATANG">BATANG</option>
                                                                <option value="BOX">BOX</option>
                                                                <option value="BTL">BTL</option>
                                                                <option value="PCS">PCS</option>
                                                                <option value="UNIT">UNIT</option>
                                                            </select>
                                                        </td>
                                                        <td className="px-4 py-3 align-top">
                                                            <textarea name="item_note[]" value={item.note} onChange={(e) => handleBarangChange(index, 'note', e.target.value)} rows="2" className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none" placeholder="Catatan..."></textarea>
                                                        </td>
                                                        <td className="px-4 py-3 align-top">
                                                            {/* Input file tidak bisa di-bind dengan value (uncontrolled component) */}
                                                            <input type="file" name={`item_image_${index}[]`} className="w-full text-xs text-gray-500 file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" accept="image/*" multiple />
                                                        </td>
                                                        <td className="px-4 py-3 text-center align-middle">
                                                            <button type="button" onClick={() => removeBarang(index)} className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded transition" title="Hapus">
                                                                <i className="fa fa-trash pointer-events-none"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <button type="button" onClick={addBarang} className="inline-flex items-center bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 px-4 py-2 text-sm font-medium rounded-md transition mb-6">
                                        <i className="fa fa-plus-circle mr-2"></i> Tambah Item Barang
                                    </button>
                                </div>
                            )}

                            {/* ========================================== */}
                            {/* BAGIAN 2: TABEL DANA / CASH (Tampil jika 1) */}
                            {/* ========================================== */}
                            {requestType === '1' && (
                                <div>
                                    <hr className="border-gray-200 mb-6" />
                                    <label className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold tracking-wide uppercase mb-2">DAFTAR PENGAJUAN DANA / CASH</label>

                                    <div className="overflow-x-auto border border-gray-200 rounded-md mb-4">
                                        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                                            <thead className="bg-gray-50 text-gray-700">
                                                <tr>
                                                    <th className="px-4 py-3 font-semibold text-center w-12">No</th>
                                                    <th className="px-4 py-3 font-semibold w-1/4">Jenis Pengajuan</th>
                                                    <th className="px-4 py-3 font-semibold w-1/4">Nominal</th>
                                                    <th className="px-4 py-3 font-semibold w-32">Satuan</th>
                                                    <th className="px-4 py-3 font-semibold">Catatan</th>
                                                    <th className="px-4 py-3 font-semibold text-center w-16">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {itemsDana.map((item, index) => (
                                                    <tr key={index} className="hover:bg-gray-50 transition">
                                                        <td className="px-4 py-3 text-center align-middle font-medium text-gray-500">{index + 1}</td>
                                                        <td className="px-4 py-3 align-top">
                                                            <select name="dana_type[]" value={item.type} onChange={(e) => handleDanaChange(index, 'type', e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none bg-white" required>
                                                                <option value="">-- Pilih --</option>
                                                                <option value="Saldo">Saldo</option>
                                                                <option value="Cash">Cash</option>
                                                            </select>
                                                        </td>
                                                        <td className="px-4 py-3 align-top">
                                                            <div className="flex rounded-md shadow-sm">
                                                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">Rp</span>
                                                                <input type="text" name="dana_nominal[]" value={item.nominal} onChange={(e) => handleDanaChange(index, 'nominal', e.target.value)} className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 border p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none" placeholder="0" required />
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 align-top">
                                                            <select name="dana_unit[]" value={item.unit} onChange={(e) => handleDanaChange(index, 'unit', e.target.value)} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none bg-white" required>
                                                                <option value="">-- Pilih --</option>
                                                                <option value="IDR">IDR</option>
                                                                <option value="USD">USD</option>
                                                            </select>
                                                        </td>
                                                        <td className="px-4 py-3 align-top">
                                                            <textarea name="dana_note[]" value={item.note} onChange={(e) => handleDanaChange(index, 'note', e.target.value)} rows="2" className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none" placeholder="Keperluan..."></textarea>
                                                        </td>
                                                        <td className="px-4 py-3 text-center align-middle">
                                                            <button type="button" onClick={() => removeDana(index)} className="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white p-2 rounded transition" title="Hapus">
                                                                <i className="fa fa-trash pointer-events-none"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <button type="button" onClick={addDana} className="inline-flex items-center bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 px-4 py-2 text-sm font-medium rounded-md transition mb-6">
                                        <i className="fa fa-plus-circle mr-2"></i> Tambah Item Dana
                                    </button>
                                </div>
                            )}

                            <hr className="border-gray-200 mb-6" />
                            
                            {/* Action Buttons */}
                            <div className="flex justify-end space-x-3">
                                <a href="https://lotusprakasalines.com/admin/request_pr" className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium transition text-sm">Batal</a>
                                <button type="submit" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-md font-medium shadow-sm transition text-sm flex items-center">
                                    <i className="fa fa-save mr-2"></i> Simpan Pengajuan
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestForm;