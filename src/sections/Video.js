import React from 'react';
import './Video.scss';

const Video = () => {
  return (
    <section id="video" className="video-section">
      <iframe title="video" className="video-iframe" width="560" height="315" src="https://www.youtube.com/embed/L4QYkEpw9pA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
  )
}

export default Video;