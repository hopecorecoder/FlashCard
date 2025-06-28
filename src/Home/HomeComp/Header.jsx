export default function Header(){
    return(
    <header
            className="flex justify-around p-2 bg-[#1F2937] items-center h-20 f"
            >
                <a
                href=""
                className=" delay-75 ease-in duration-200 hover:scale-120 font-bold text-3xl f text-[#F9FAF8] hover:text-gray-400 "
                >Smart Study</a>
                <ul
                className="flex gap-4
                 text-[#E5E7EB] list-none decoration-none hover:cursor-pointer text-center f"
                >
                    <a className="hover:text-gray-400 delay-75 ease-in duration-200 text-center"><li>About us </li></a>
                    <a className="hover:text-gray-400 delay-75 ease-in duration-200 text-center"><li>Our Plans</li></a>
                    <a className="hover:text-gray-400 delay-75 ease-in duration-200 text-center "><li><img className="w-10 rounded-4xl h-10" src="../../../public/orange.png" ></img></li></a>
                </ul>
    </header>
    )
}