import { useEffect, useState } from "react";
import UserDisplay from "./UserDisplay";
import { AiFillMessage } from "react-icons/ai"

const Contacts = (props) => {
    const [display, setDisplay] = useState("hidden")
    const { users } = props;

    const userFilter = users.slice(0, 6)

    const handleClick = () => {
        display === "hidden" ?
            setDisplay(state => "") :
            setDisplay(state => "hidden")
    }


    // fixed bg-gray-800 transition-all xl:relative flex flex-col gap-5 py-4
    return (
        <>
            <section className="fixed right-5 py-2">
                {/* <h3>Online Contacts</h3> */}

                <div className={`flex flex-col ${display} translate-y-72 bg-gray-800 xl:flex xl:translate-y-0 mt-10`}>
                    {userFilter.map(({ userName, userImg, userId }) => {
                        return <UserDisplay
                            userImg={userImg}
                            showStatus={true}
                            userName={userName}
                            hoverEffect={true}
                            userClass={"lg:w-64"}
                            key={userId}
                        />
                    })}
                </div>

                <button
                    className="fixed bottom-20 right-10 xl:hidden"
                    onClick={() => handleClick()}
                >
                    <AiFillMessage className="text-5xl" />
                </button>

            </section>
        </>
    );
}

export default Contacts;