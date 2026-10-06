import BerandaPage from "./Beranda"
import RequestForm from "./formDana"
import ListTanggal from "./ListTanggal"
import DataKasMasuk from "./formKas"

function Base() {
    return (
        <BerandaPage />
    )
}

function FormPengajuan() {
    
    return (
        <RequestForm />
    )
}

function Tanggal() {
    
    return (
        <ListTanggal />
    )
}

function Kas() {
    
    return (
        <DataKasMasuk />
    )
}

export {Base, FormPengajuan, Tanggal, Kas}