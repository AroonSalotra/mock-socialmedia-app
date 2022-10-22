import { Link } from "react-router-dom";
import MarketDisplay from "./MarketDisplay";
import Friends from "./SidebarComponents,/Friends";
import Market from "./SidebarComponents,/Market";
import useGetApi from "../hooks/useGetApi";
import LocalAPi from "../data/API-Local"

const DebugComponent = (props) => {

    // const KEY = "access_key = 196fc42e501a19add963f044bc4d20d0"
    // const PARAMS = "&languages=en"

    // const { data } = useGetApi("http://api.mediastack.com/v1/news?access_key=196fc42e501a19add963f044bc4d20d0&languages=en&countries=gb")

    
    const data = LocalAPi
    console.log(data)



    return (
        <div>

        </div>
    );
}

export default DebugComponent;