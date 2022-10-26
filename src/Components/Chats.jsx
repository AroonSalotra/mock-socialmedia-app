import { useState } from "react";
import UserDisplay from "./UserDisplay";
import InputText from "./InputText";
import USERS from "../data/USERS.json"

const Chats = (props) => {

    const { userId } = props;

    const [size, setSize] = useState({
        width: 20,
        height: 10,
        showName: false,
        setText: "hidden"
    })

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

    // console.log(USERS[userId].userName)
    // max-h-${size.height}
    return (
        <div
            className={`w-${size.width} w-40 h-${size.height} bg-slate-600 m-auto rounded-lg my-2 py-2 flex flex-col-reverse hover:bg-slate-500 md:transition-all`}>

            {/* <span
                className={`h-14 absolute w-60 cursor-pointer`}
                id={`User ${USERS[userId].userName}`}
                onClick={() => changeSize()} /> */}

            <div className="cursor-pointer"
                onClick={() => changeSize()}>
                <UserDisplay
                    userId={userId}
                    showName={size.showName} />
            </div>

            <InputText
                setPlaceholder={"send message"}
                addClass={`${size.setText} pl-4`}
                userId={userId}
            />

        </div>
    );
}

export default Chats;