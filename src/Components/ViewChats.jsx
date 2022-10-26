import Chats from "./Chats";

const ViewChats = () => {
    const TEMPDATA = [
        2, 3, 4
    ]


    return (
        <>
            <div className="fixed bottom-0 right-10">

                <div className="">
                    <h3 className="w-full bg-gray-600 p-2 rounded-t-md font-semibold text-center text-2xl">Chats</h3>
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