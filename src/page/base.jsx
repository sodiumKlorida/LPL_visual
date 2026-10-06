import BerandaPage from "./Beranda"
import RequestForm from "./formDana"
import ListTanggal from "./ListTanggal"

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

export {Base, FormPengajuan, Tanggal}