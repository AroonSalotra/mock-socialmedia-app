import Chats from "./Chats";
import InputChat from "./InputChat";
import CHATS from "../data/CHATS.json"

const ViewChats = () => {

    return (
        <>
            <div className="fixed bottom-10 right-10 z-30">

                <div className="flex items-end gap-1">
                    {CHATS.map(({ userId }) => {
                        return <>
                            <Chats userId={userId} />
                        </>
                    })}
                </div>
            </div>
        </>
    );
}

export default ViewChats;