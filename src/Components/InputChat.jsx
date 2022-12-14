import { useState } from "react"
import ChatDisplay from "./ChatDisplay"
import CHATS from "../data/CHATS.json"

const InputChat = (props) => {


    const { addClass, userId } = props;

    const [msg, setMsg] = useState("")

    const handleChange = (e) => {
        setMsg(e.target.value)
    }

    const getIndex = (elem) => elem.userId === userId
    const index = CHATS.findIndex(getIndex)

    const handleSubmit = () => {
        if (msg.length) {
            CHATS[index].to.push(msg)
            setMsg("")
        }
    }

    return (
        <>
            <section
                className={`text-center w-50 overflow-y-auto m-auto pr-4 ${addClass}`}>

                <ChatDisplay data={[, CHATS[index],]} />

                <form
                    action=""
                    onSubmit={(e) => e.preventDefault(e)}>

                    <input
                        className="text-white w-full my-4 bg-gray-800 pl-2 py-1 rounded-md"
                        value={msg}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name=""
                        id="" />

                    <button
                        onClick={() => handleSubmit()}
                        type="submit">
                    </button>

                </form>

            </section>
        </>
    );
}

export default InputChat;