import { useState } from "react";
import UserDisplay from "./UserDisplay";
import USERS from "../data/USERS.json"

const Contacts = (props) => {
    const [display, setDisplay] = useState("hidden")

    const userFilter = USERS.slice(0, 6)

    return (
        <>
            <section className="fixed right-5 mt-40 pb-8 w-40 xl:border-y">
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
            </section>
        </>
    );
}

export default Contacts;