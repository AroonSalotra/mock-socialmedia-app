import { useState } from "react";
import UserDisplay from "./UserDisplay";
import InputText from "./InputText";
import USERS from "../data/USERS.json"
import InputChat from "./InputChat";


const Chats = (props) => {

    const { userId } = props;

    const [size, setSize] = useState({
        width: 20,
        height: 10,
        showName: false,
        setText: "hidden"
    })

    const [chatHeight, setChatHeight] = useState(10);
    const [chatWidth, setChatWidth] = useState(20);
    const [chatName, setChatName] = useState(false);
    const [chatDisplay, setChatDisplay] = useState("hidden");

    const changeSize = () => {
        const sizeSmall = {
            width: 20, height: 10,
            showName: false, setText: "hidden"
        }
        const sizeLarge = {
            width: 80, height: 96,
            showName: true, setText: "block"
        }

        if (size.width === 20) return setSize(state => sizeLarge)
        setSize(state => sizeSmall)
    }

    const debugSize = () => {
        if (chatHeight === 10) {
            setChatHeight(height => 96)
            setChatWidth(width => 80)
            setChatName(name => true)
            setChatDisplay(display => "block")
        } else {
            setChatHeight(height => 10)
            setChatWidth(width => 20)
            setChatName(name => false)
            setChatDisplay(display => "hidden")
        }
    }

    return (
        <div
            className={`transition-all w-${chatWidth} h-${chatHeight} bg-slate-600 border-y border-blue-200 m-auto rounded-lg my-2 py-2 flex flex-col-reverse hover:bg-slate-500`}>

            {/* <span
                className={`h-14 absolute w-60 cursor-pointer`}
                id={`User ${USERS[userId].userName}`}
                onClick={() => changeSize()} /> */}

            <div className="cursor-pointer"
                onClick={() => debugSize()}
                >
                <UserDisplay
                    userId={userId}
                    showName={chatName} />
            </div>


            <InputChat
                userId={userId}
                addClass={`${chatDisplay} pl-4 mt-4`} />

        </div>
    );
}

export default Chats;