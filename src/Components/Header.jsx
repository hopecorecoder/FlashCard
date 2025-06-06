export default function Header(){
    return(
        <main className="flex flex-col bg-[#1F2937] justify-center gap-40 p-10 pb-40 ">
            <header
            className="flex justify-around p-2 bg-[#1F2937] items-center f"
            >
                <h1
                className="font-bold text-3xl f text-[#F9FAF8]"
                >Smart Study</h1>
                <ul
                className="flex gap-4
                 text-[#E5E7EB] list-none decoration-none hover:cursor-pointer f"
                >
                    <a><li>Header link one</li></a>
                    <a><li>Header link two</li></a>
                    <a><li>Header link three</li></a>
                </ul>
            </header>

            <section
            className="flex flex-row items-center justify-center gap-10 "
            >
                <div
                className=" flex flex-col gap-4 w-[500px]"
                >
                    <h1
                    className="font-bold text-6xl  text-[#F9FAF8]  "
                    >
                        Study Smart. Study Better.
                    </h1>
                    <p
                    className="text-[#E5E7EB]"
                    >
                        This website has some subtext that goes here under the main title. It's a smaller font and the color is lower
                        contrast
                    </p>
                    <button
                    className="bg-[#3882F6] text-white font-bold px-4  py-1.5 w-[100px] rounded "
                    >
                        Sign Up
                    </button>
                </div>
                <div
                
                >
                    <img
                    className="w-[400px]"
                    src="/orange.png" alt="orange" />
                </div>

            </section>
        </main>
    )
}