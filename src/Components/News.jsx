import LocalData from "../data/API-Local.json"
import Post from "./Post";

const News = () => {

    const data = LocalData
    console.log(data)

    return (
        <>
            {data.map(({ author, title, description, url, source, image, published_at }) => {
                return <Post
                    postText={title}
                    postImg={image}
                    postDate={published_at}
                    userName={`from ${source} by ${author}`}
                />
            })}
        </>
    );
}

export default News;