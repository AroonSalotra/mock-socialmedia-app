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

    const [toggleShow, setToggleShow] = useState(false)

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

    return (
        <div
            className={`bg-gray-700 ${toggleShow ? "rounded-md pb-2" : "rounded-lg pb-3 w-20"}`}>

            <InputChat
                userId={userId}
                addClass={`pl-4 mt-4 transition-opacity duration-300 ${toggleShow ? "show-chat" : "hide-chat"}`} />

            <div className="cursor-pointer"
                onClick={() => setToggleShow(state => !toggleShow)} >
                <UserDisplay
                    userId={userId}
                    showName={toggleShow ? true : false} />
            </div>

        </div>
    );
}

export default Chats;