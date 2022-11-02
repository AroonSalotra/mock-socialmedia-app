import Chats from "./Chats";
import CHATS from "../data/CHATS.json"

const ViewChats = () => {

    return (
        <>
            <div className="w-full right-0 sm:w-fit fixed bottom-10 sm:right-10 z-30">

                <div className="justify-center flex items-end gap-1">
                    {CHATS.map(({ userId }) => {
                        return <Chats userId={userId} />
                    })}
                </div>
            </div>
        </>
    );
}

export default ViewChats;