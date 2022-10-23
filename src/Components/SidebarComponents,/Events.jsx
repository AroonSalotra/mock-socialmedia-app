import UserDisplay from "../UserDisplay";
import SelectButtons from "../SelectButtons";

const Events = () => {

    const data = [
        {
            userId: 5,
            date: "06/11/2022",
            text: "Firework show at Coombe Abbey"
        },
        {
            userId: 0,
            date: "09/11/2022",
            text: "House party -NO FOOD"
        },
        {
            userId: 2,
            date: "10/11/2022",
            text: "Lord of the rings watch-a-thon video call"
        },
    ]

    return (
        <div className="text-center pl-4">
            {data.map(({ date, userId, text }) => {
                return <div key={date}>

                    <p>On: {date}</p>

                    <UserDisplay
                        userId={userId}
                        showName={true} />

                    <p>{text}</p>
                    <p>Are you attending?</p>

                    <SelectButtons />

                </div>
            })}
        </div>
    );
}

export default Events;
