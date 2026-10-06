import { Link } from "react-router-dom";

function ListTanggal() {
    return (
        <main className="w-full h-screen p-6">
            <section className="w-full flex justify-between">
                <div className="border-2 w-[18%] flex justify-center items-center py-2">
                    <Link
                        to="/form-dana">
                        06/10/2026
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default ListTanggal;