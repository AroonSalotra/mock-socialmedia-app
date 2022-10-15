const UserDisplay = (props) => {
    const { userName, postDate, userImg, postImg, userClass, showName } = props
    // https://st4.depositphotos.com/11634452/41441/v/600/depositphotos_414416674-stock-illustration-picture-profile-icon-male-icon.jpg

    const placeholderImg = "https://st4.depositphotos.com/11634452/41441/v/600/depositphotos_414416674-stock-illustration-picture-profile-icon-male-icon.jpg"

    return (

        <>
            <div className={`flex w-fit m-auto rounded-t-lg items-center ${userClass}`}>

                <img className="w-12 h-12 rounded-full object-cover"
                    src={userImg ? userImg : placeholderImg}
                    alt={`${userImg} profile`} />


                {showName ? <p className="text-white text-2xl px-4">
                    {userName}</p>
                    : null}

            </div>
        </>
    );
}

export default UserDisplay;