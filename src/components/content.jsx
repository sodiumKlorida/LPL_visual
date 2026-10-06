import Hero from "./hero"

function Content() {
    return (
        <main className="absolute bottom-3 right-3 left-0 top-0 p-1">
            <div className="border-2 h-full w-full rounded-2xl shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                <Hero />
            </div>
        </main>
    )
}

export default Content