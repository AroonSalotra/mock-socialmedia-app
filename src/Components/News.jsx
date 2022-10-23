import LocalData from "../data/API-Local.json"
import Post from "./Post";

const News = (props) => {
    const { imgClass, customClass } = props;
    const data = LocalData
    // console.log(data)

    return (
        <section className="flex flex-col">
            {data.map(({ author, title, description, url,
                source, image, published_at }) => {
                return <Post
                    key={title}
                    postText={title}
                    postImg={image}
                    postDate={published_at}
                    // userName={`from ${source} by ${author}`}
                    customName={author ? `from ${source} by ${author}`
                        : `from ${source}`}
                    // userImg={image}
                    userID={2}
                    imgClass={imgClass}
                    customClass={customClass}
                />
            })}
        </section>
    );
}

export default News;