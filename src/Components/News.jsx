import LocalData from "../data/API-Local.json"
import Post from "./Post";
import StyledButton from "./StyledButton";
import { Link } from "react-router-dom";

const News = (props) => {
    const { imgClass, customClass, showLink } = props;
    const data = LocalData
    // console.log(data)

    return (
        <section className="flex flex-col p-5 gap-14">

            {showLink ? <Link className="m-auto"
                to="mock-socialmedia-app/news">
                <StyledButton>
                    Go to News
                </StyledButton>
            </Link> : null}

            {data.map(({ author, title, description, url,
                source, image, published_at }) => {
                return <Post
                    key={title}
                    postText={title}
                    postImg={image}
                    postDate={source}
                    // userName={`from ${source} by ${author}`}
                    // customName={author ? `from ${source} by ${author}`
                    //     : `from ${source}`}
                    // customName={`via ${source}`}
                    userImg={image}
                    // userId={2}
                    imgClass={imgClass}
                    customClass={customClass}
                />
            })}

            <p className="text-center font-semibold text-2xl">
            You're all caught up!</p>
        </section>
    );
}

export default News;