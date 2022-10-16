import UserDisplay from "./UserDisplay";

const Status = () => {
    return (
        <>
            <div className="text-white flex
            lg:w-50rem">

                {/* <UserDisplay
                    userClass="py-4"
                 /> */}

                <input
                    className="text w-7/12 m-auto rounded-full h-2/4 bg-gray-600 my-4 px-4"
                    type="text"
                    placeholder="Set your status here"
                />

                {/* <hr className="" /> */}

                {/* <ul className="flex justify-between px-8 py-2">
                    <li>Live Video</li>
                    <li>Upload Photo</li>
                    <li>Set Activity</li>
                </ul> */}

            </div>
        </>
    );
}

export default Status;