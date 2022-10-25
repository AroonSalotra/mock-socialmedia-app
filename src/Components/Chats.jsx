import { useState } from "react";
import UserDisplay from "./UserDisplay";
import InputText from "./InputText";
import USERS from "../data/USERS.json"

const Chats = (props) => {

    const { userId } = props;

    const [size, setSize] = useState({
        width: 40,
        height: 16,
        showName: false,
        setText: "hidden"
    })

    const changeSize = () => {
        const sizeSmall = {
            width: 40, height: 16,
            showName: false, setText: "hidden"
        }
        const sizeLarge = {
            width: 80, height: 80,
            showName: true, setText: "block"
        }

        if (size.width === 40) return setSize(state => sizeLarge)
        setSize(state => sizeSmall)

    }

    // console.log(USERS[userId].userName)
    return (
        <div
            className={`w-full h-${size.height} bg-slate-600 m-auto rounded-lg transition-all my-2`}
        >

            <span
                className={`h-14 absolute w-full cursor-pointer hover:bg-gray-200 opacity-10`}
                id={`User ${USERS[userId].userName}`}
                onClick={() => changeSize()} />

            <UserDisplay
                userId={userId}
                showName={size.showName}
            />

            <InputText
                setPlaceholder={"send message"}
                addClass={`${size.setText} pl-4`}
                userId={userId}
            />

        </div>
    );
}

export default Chats;