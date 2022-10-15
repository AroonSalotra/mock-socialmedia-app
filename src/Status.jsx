import UserDisplay from "./UserDisplay";

const Status = () => {
    return (
        <>
            <div className="m-auto p-4 bg-gray-800 text-white 
            lg:w-50rem">

                <UserDisplay
                    userClass="py-4"
                 />

                <input
                    className="text w-full p-4 rounded-full h-12 bg-gray-600"
                    type="text"
                    placeholder="Set your status here"
                />

                <hr className="my-3" />

                <ul className="flex justify-between px-8 py-2">
                    <li>Live Video</li>
                    <li>Upload Photo</li>
                    <li>Set Activity</li>
                </ul>

            </div>
        </>
    );
}

export default Status;