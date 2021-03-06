import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const VideoDetail = ({video, player}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  //console.log(player)

  return (
    <section className="video_container">
    <Link to={`/teams/${JSON.parse(localStorage.getItem('player')).teamId}`} className="back btn btn-primary">
      Back
    </Link>
    <div className="video-detail">
      <div className="video-wrap embed-responsive embed-responsive-16by9">
        <iframe className="video embed-responsive-item" src={url}></iframe>
      </div>
    </div>
    </section>
  )
}

export default VideoDetail;
