import { useEffect, useState } from "react";


const text = "bg-transparent border border-white rounded-md focus:outline-none focus:border-orange-500";


function SupportPage(params) {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Radio, setRadio] = useState(null);
    const [Description, setDescription] = useState("");
    const [Filled, setFilled] = useState(false);
    const [Submitted, setSubmitted] = useState(false);
    const [Random, setRandom] = useState(null);

    useEffect(() => {

        if (FirstName && LastName && Email && Radio) {
            setFilled(true);
        } else {
            setFilled(false);
        }

    }, [FirstName, LastName, Email, Radio]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Filled) {
            setSubmitted(true);
            const randomNum = Math.floor(Math.random() * 9999) + 1;
            const formattedRandomNum = randomNum.toString().padStart(4, '0');
            setRandom(formattedRandomNum);
        }
    }

    return (

        <div className="h-screen w-full bg-black p-4 text-white text-2xl overflow-hidden " >
            <h1 className="text-4xl font-bold mb-4 text-white border-b pb-5 border-gray-400" >SUPPORT TICKET FORM</h1>
            {!Submitted ? (
                <form onSubmit={handleSubmit} className="mr-5" >
                    <div className="flex flex-row pt-5 gap-[10%] h-[50%]">
                        <div className="w-[40%] flex flex-col gap-4 h-full">
                            <h1 className="text-white" > Name <span className="text-red-600 font-bold" >*</span></h1>
                            <div className="grid grid-cols-2 gap-x-4  " >
                                <input className={text} type="text" name="" id=""
                                    value={FirstName ?? ""}
                                    onChange={(e) => setFirstName(e.target.value || null)} />
                                <input className={text} type="text" name="" id=""
                                    value={LastName ?? ""}
                                    onChange={(e) => setLastName(e.target.value || null)} />
                                <span className="text-[15px] text-gray-400 "  >First</span>
                                <span className="text-[15px] text-gray-400 " >Last</span>

                            </div>
                            <h1 className="text-white" > Email <span className="text-red-600 font-bold" >*</span></h1>
                            <input className="w-full bg-transparent border border-white rounded-md focus:outline-none focus:border-orange-500" type="text"
                                value={Email ?? null}
                                onChange={(e) => setEmail(e.target.value || null)} />

                            <h1 className="" > Topic <span className="text-red-600 font-bold" >*</span></h1>
                            <div className="flex flex-col border border-dashed gap-3 p-5 focus:orange-500" >
                                <span>What can we help you today?</span>
                                <label htmlFor="general" className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="helpOption"
                                        id="general"
                                        className="peer hidden"
                                        checked={Radio === "General"}
                                        onChange={(e) => setRadio("General")}
                                    />
                                    <span className="w-2.5 h-2.5 border-2 border-gray-300 rounded-full inline-block mr-2 transition-all peer-checked:bg-orange-500 peer-checked:border-gray-300 peer-focus:ring-4 peer-focus:ring-gray-500"></span>
                                    General
                                </label>

                                <label htmlFor="bug" className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="helpOption"
                                        id="bug"
                                        className="peer hidden"
                                        checked={Radio === "Bug"}
                                        onChange={(e) => setRadio("Bug")}
                                    />
                                    <span className="w-2.5 h-2.5 border-2 border-gray-300 rounded-full inline-block mr-2 transition-all peer-checked:bg-orange-500 peer-checked:border-gray-300 peer-focus:ring-4 peer-focus:ring-gray-500"></span>
                                    Bug
                                </label>
                            </div>
                        </div>
                        <div className=" flex flex-col w-[40%] gap-4" >
                            <h1 className="text-white" > Description</h1>
                            <textarea
                                placeholder="Description Report"
                                className=" bg-black w-full h-full border border-gray-300 rounded-md p-4 focus:outline-none focus:border-orange-500 resize-none "
                            />
                        </div>
                    </div>
                    <div className="flex mt-10 mr-[10%] justify-end">
                        <button
                            type="submit"
                            className={`w-[10%] py-2 px-4 rounded-full ${Filled ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-400 cursor-not-allowed"
                                } text-white`}
                            disabled={!Filled} // Disable the button if 'Filled' is false
                        >
                            SEND
                        </button>
                    </div>
                </form>

            ) : (
                <div className="flex flex-col items-center justify-center text-center h-full bg-transparent p-8 rounded-lg overflow-none gap-5">
                    <p className="font-bold text-4xl text-orange-500 ">
                        Thank you for sending us your report, we will <br />
                        track the problem now.
                    </p>
                    <p className="text-xl mt-4 text-gray-500 text-center ">
                        Ticket number: <span className="text-white" >{Random}</span>
                    </p>
                    <button
                        onClick={() => window.location.href = '/'} // Replace with the correct route for the calculator page
                        className="absolute bottom-5 right-5 bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600"
                    >
                        Back to Calculator
                    </button>
                </div>

            )}
            <div></div>



        </div>


    );

}

export default SupportPage;