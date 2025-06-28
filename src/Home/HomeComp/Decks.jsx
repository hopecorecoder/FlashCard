import React from "react"
export default function Decks(){
    const [deckCreate,setDeckCreate ] = React.useState(false)
    const [sub, setSub] = React.useState("")
    const [ch, setCh] = React.useState("")
    function OpenCreateDeck(){
        setDeckCreate(val => !val)
    }
    function createDeck(e){
        e.preventDefault()
        const subj= sub.value
        const cha = ch.value
        if(sub === "" || ch === ""){
            alert("Please fill all the fields")
            
        }
        setCh(cha)
        setSub(subj)
        console.log(sub )
        console.log(ch)
        
    }
    return(
        <>
            <section
            className="bg-[#E5E7EB] flex items-center mt-40 p-10 flex-row justify-between px-52 w-full "
            >
                <h1 
                className="text-xl font-bold  ">
                    Your Decks :
                </h1>
                <button
                onClick={OpenCreateDeck}
                className="bg-[#3882F6] border-0 rounded-4xl text-white font-bold px-2.5 py-1   hover:cursor-pointer">
                    +
                </button>
            </section>
                {deckCreate ?
                <div className="fixed top-0 left-0 bg-gray-900/50 w-screen h-screen  flex justify-center items-center">
                    <div className="w-[60%] h-[50%] bg-[#d7dae1] rounded-xl p-6  shadow-xl relative">
                    <button
                    onClick={OpenCreateDeck}
                    className="bg-red-600 border-0 rounded-4xl text-white font-bold px-2 py-0.5  absolute top-3 right-3 text-center hover:cursor-pointer">
                        x
                    </button>
                        <p className="font-bold text-3xl mb-10  text-shadow-xs">Create New Deck</p>
                            <form
                            onSubmit={createDeck}
                            className="gap-5 flex flex-col ">
                                <p  className="font-bold text-xl  text-shadow-xs"
                                >Enter Subject:</p> 
                                <input name="sub" className="bg-white rounded-2xl py-1 px-3 border-0  " type="text"></input>
                                <p className="font-bold text-xl  text-shadow-xs"
                                >Enter Chapter:</p> 
                                <input name="ch" className="bg-white rounded-2xl py-1 px-3 border-0  " type="text"></input>
                                <input type="submit"  value="Create Deck" className="bg-[#3882F6] border-0 rounded-4xl text-white  px-2.5 py-1 w-40 self-center  hover:cursor-pointer"></input>
                            </form>
                        
                    </div>

                </div>
                : null}
        </>
    )
}