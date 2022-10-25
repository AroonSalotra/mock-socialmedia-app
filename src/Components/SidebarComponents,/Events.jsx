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
        <div className="text-center flex flex-col gap-5">
            {data.map(({ date, userId, text }) => {
                return <div className="p-4 shadow-md shadow-gray-700"
                    key={date}>


                    <UserDisplay
                        userId={userId}
                        showName={true} />

                    <ul className="border-y-4 border-gray-900 py-4">
                        <li className="font-semibold">{text}</li>
                        <li className="text-lg">{date}</li>
                    </ul>

                    <SelectButtons />

                </div>
            })}
        </div>
    );
}

export default Events;
