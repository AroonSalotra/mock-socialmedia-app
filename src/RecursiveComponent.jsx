const isObject = elem => typeof elem === "object" && elem !== null

const RecursiveComponent = (props) => {

    const { data } = props;

    if (!isObject(data)) {
        console.log(data === "Hello")
        return (
            // <li>{`val: ${data}`}</li>
            data === "Hello" ? <li>{data}</li> : null
        )
    }

    //    console.log(data.message)

    if (data.message === "Hi") return <h1 className="text-3xl">{data.message}</h1>

    const ENTRIES = Object.entries(data)

    return (
        <ul className="">
            {ENTRIES.map(([key, value]) => {
                <li>
                    {`key: ${key}`}:
                    <ul>
                        <RecursiveComponent data={value} />
                    </ul>
                </li>
            })}
        </ul>
    );
}

export default RecursiveComponent;