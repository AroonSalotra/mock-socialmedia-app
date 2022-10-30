import { useEffect, useState } from "react";
import UserDisplay from "./UserDisplay";
import { AiFillMessage } from "react-icons/ai"
import USERS from "../data/USERS.json"

const Contacts = (props) => {
    const [display, setDisplay] = useState("hidden")
    const { users } = props;

    const userFilter = USERS.slice(0, 6)

    const handleClick = () => {
        display === "hidden" ?
            setDisplay(state => "") :
            setDisplay(state => "hidden")
    }


    // fixed bg-gray-800 transition-all xl:relative flex flex-col gap-5 py-4
    return (
        <>
            <section className="fixed right-5 mt-24">
                {/* <h3>Online Contacts</h3> */}
                <div className={`flex flex-col ${display} bg-gray-800 xl:flex :translate-y-0 mt-10`}>
                    {userFilter.map(({ userId }) => {
                        return <UserDisplay
                            showStatus={true}
                            hoverEffect={true}
                            userClass={"lg:w-64"}
                            userId={userId}
                            key={userId}
                            showName={true}
                        />
                    })}
                </div>

                <button
                    className="fixed top-20 right-10 xl:hidden"
                    onClick={() => handleClick()}>
                    <AiFillMessage className="text-5xl" />
                </button>

            </section>
        </>
    );
}

export default Contacts;