export default function Body(){
    return(
        <main>
            <section 
            className="flex flex-col  justify-center items-center gap-[60px] mt-20" 
            >
                
                <h1 
                className="text-[#1F2937] font-bold text-3xl" 
                >
                    Our Features:
                </h1>
                <section
                className="flex flex-row gap-[60px] "
                >

                    <article className="flex w-[200px] flex-col ">
                        <img
                        className="border-4 rounded-2xl w-[200px] border-[#3882F6]"
                        src="/orange.png" alt="orange" />
                        <p className="text-[rgb(148,135,158)] text-center">this is some subtext
                        under an illustration
                        or Image
                        </p>
                    </article>

                    <article className="flex w-[200px] flex-col  ">
                        <img
                        className="border-4 rounded-2xl w-[200px] border-[#3882F6]"
                        src="/orange.png" alt="orange" />

                        <p className="text-[rgb(148,135,158)] text-center">this is some subtext
                        under an illustration
                        or Image
                        </p>
                    </article>

                    <article className="flex w-[200px] flex-col ">
                        <img
                        className="border-4 rounded-2xl w-[200px] border-[#3882F6]"
                        src="/orange.png" alt="orange" />
                        <p className="text-[rgb(148,135,158)] text-center">this is some subtext
                        under an illustration
                        or Image
                        </p>
                    </article>

                    <article className="flex w-[200px] flex-col ">
                        <img
                        className="border-4 rounded-2xl w-[200px] border-[#3882F6]"
                        src="/orange.png" alt="orange" />
                        <p className="text-[rgb(148,135,158)] text-center">this is some subtext
                        under an illustration
                        or Image
                        </p>
                    </article>
                </section>
            </section>
            <section 
            className="flex flex-col items-center justify-center my-60"
            >
                <article
                className="flex flex-col bg-[#E5E7EB]  gap-[10px] p-40"
                >
                    <p
                    className="text-[36px] italic font-extralight w-[900px] text-[#1F2937] "
                    >
                    This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know
                    is that it looks nice.
                    </p>
                    <p
                    className=" self-end font-bold "
                    >
                        -Bob, A topper
                    </p>

                </article>
                <article
                className="bg-[#3882F6] flex flex-row rounded-xl box-border gap-30 w-[1000px] px-30 py-10 "
                >
                    <div className="flex flex-col">
                        <p
                        className="font-bold text-white text-xl"
                        >
                            Call to action! It's time!  
                        </p>
                        <p
                        className="text-white text-lg"
                        >
                            Sign up for our product by clicking that button right over there!
                        </p>
                    </div>

                    <button
                    className="border-2 border-white rounded-xl font-bold text-white h-auto px-2 hover:cursor-pointer"
                    >
                        Sign up
                    </button>
                </article>
            </section>
        </main>
    )
}