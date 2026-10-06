import Header from "../../components/header"
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"

function BerandaPage() {
    return (
        <main className="flex justify-between w-full h-screen">

            {/* sidebar */}
            <div className="relative h-full w-[20%]">
                <Sidebar />
            </div>

            <div className="pl-3 h-full w-full flex flex-col gap-4">
                {/* header */}
                <div className="relative w-full h-[13vh] shrink-0">
                    <Header />
                </div>

                {/* content */}
                <div className="relative w-full flex-1">
                    <Content />
                </div>
            </div>

        </main>
    )
}

export default BerandaPage