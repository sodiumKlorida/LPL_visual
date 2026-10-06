import { Link } from "react-router-dom";

function ListTanggal() {
    return (
        <main className="w-full h-screen p-6">
            <section className="w-full flex justify-between">
                <div className=" w-[18%] flex justify-center items-center py-2 gap-6">
                    <Link
                        className="border-2"
                        to="/form-dana">
                        06/10/2026
                    </Link>

                    <Link
                        className="border-2"
                        to="/kas">
                        06/10/2026
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default ListTanggal;