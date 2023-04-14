import React from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";

/* import Cast from "./cast/Cast"; */
/* import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation"; */

const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    
    return  <div>
    <DetailsBanner />
 </div>;
};

export default Details;