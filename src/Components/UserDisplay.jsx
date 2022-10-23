import USERS from "../data/USERS.json"

const UserDisplay = (props) => {
    const { showName, userClass, showStatus,
        hoverEffect, userId, customName } = props

    const placeholderImg = "https://st4.depositphotos.com/11634452/41441/v/600/depositphotos_414416674-stock-illustration-picture-profile-icon-male-icon.jpg"

    const checkHover = hoverEffect ? "cursor-pointer hover:bg-gray-700" : ""

    // console.log(`this ID is ${userId}`)

    return (
        <div className={`flex w-fit m-auto rounded-t-lg items-center ${userClass}`}>

            <div className={`flex px-4 py-1 rounded-lg ${checkHover}`}>

                <img className="w-12 h-12 rounded-full object-cover"
                    // src={userImg ? userImg : placeholderImg}
                    src={userId >= 0 ? USERS[userId].userImg : null}
                    // src={userImg}
                    alt={``} />

                {showStatus ?
                    <div className="w-3.5 h-3.5 bg-lime-500 rounded-full -translate-x-1/4" />
                    : null}

                {showName ?
                    <p className="text-white text-lg px-4">
                        {userId >= 0 ? USERS[userId].userName : customName}
                    </p>
                    : null}

            </div>

        </div>
    );
}

export default UserDisplay;