import React from "react";
import { useSelector } from "react-redux";
import RenderedContentCard from "./RenderedContentCard";

const useTrendingContent = () => {
  const trendingMovies = useSelector((state) => {
    return state.trending.movies || [];
  });

  const trendingTv = useSelector((state) => {
    return state.trending.tv || [];
  });

  const trendingPeople = useSelector((state) => {
    return state.trending.people || [];
  });

  //get jsx of rendered movies,tv and people
  const renderedMovies = trendingMovies.map((media) => {
    return <RenderedContentCard data={media} key={media.id} />;
  });

  const renderedTv = trendingTv.map((media) => {
    return <RenderedContentCard data={media} key={media.id} />;
  });

  const renderedPeople = trendingPeople.map((media) => {
    return <RenderedContentCard data={media} key={media.id} />;
  });

  return [renderedMovies, renderedTv, renderedPeople];
};

export default useTrendingContent;
