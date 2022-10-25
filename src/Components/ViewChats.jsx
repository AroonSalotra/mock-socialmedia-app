import Chats from "./Chats";

const ViewChats = () => {
    const TEMPDATA = [
        2, 3, 4
    ]


    return (
        <>
            <div className="fixed bottom-0 right-10">

                <div className="">

                    {TEMPDATA.map((elem) => {
                        return <Chats
                            userId={elem}
                        />
                    })}

                </div>

            </div>
        </>
    );
}

export default ViewChats;