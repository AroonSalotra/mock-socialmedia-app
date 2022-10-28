import Chats from "./Chats";
import InputChat from "./InputChat";
import CHATS from "../data/CHATS.json"

const ViewChats = () => {

    return (
        <>
            <div className="fixed bottom-0 right-10 transition-all">

                <div className="flex flex-col gap-5 transition-all">
                    {/* {TEMPDATA.map((elem) => {
                        return <Chats
                            userId={elem}
                        />
                    })} */}

                    {CHATS.map(({ userId }) => {
                        return <Chats
                            userId={userId}
                        />
                    })}

                </div>

            </div>
        </>
    );
}

export default ViewChats;