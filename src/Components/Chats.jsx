import { useState } from "react";
import UserDisplay from "./UserDisplay";
import InputChat from "./InputChat";

const Chats = (props) => {

    const { userId } = props;

    const [toggleShow, setToggleShow] = useState(false)

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