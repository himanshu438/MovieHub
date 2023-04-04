import React from 'react'

import "./HeroBanner.scss";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] =useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  
  const { data, Loading } = useFetch("/movie/upcoming");
  
  useEffect(() => {
    const bg =
          url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
          setBackground(bg);
  }, [data]);
  

  const searchQueryHandler = (event) => {
          if( event.key === "Enter" && query.length > 0 )
        {
          navigate(`/search/${query}`);
        }
  }
  return (
    <div className="heroBanner">
      {!Loading && (
                <div className="backdrop-img">
                      <Img src={background} />
                </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">welcome.</span>
          <span className="subTitle">Millions of movies, Tv shows and people to discover.
              Explore now.</span>
              <div className="searchInput">
                <input type="text"
                placeholder=" Search for a movie and tv shows..."
                onChange={(event)=> setQuery(event.target.value)}
                onKeyUp={searchQueryHandler}
                />
                <button>Search</button>
              </div>
        </div>
        </ContentWrapper>
    </div>
  );
}

export default HeroBanner