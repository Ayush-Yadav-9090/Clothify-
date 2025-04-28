import './video.css'
import React from 'react'

export const Video = () => {
    return (
        <div className="videos">
            <div className="video">
                <video controls loop>
                    <source src="https://videos.pexels.com/video-files/4912889/4912889-sd_640_360_24fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium eos fuga reiciendis
                    facere sint possimus soluta nam consequatur dolore obcaecati at veniam nostrum beatae quo, nobis quos
                    esse ullam illo omnis deleniti ea iure tempore. Veniam, velit ut deleniti dolores porro accusamus eum
                    culpa! Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis maiores fugit consectetur odit esse. Modi placeat quae corporis tempore sit! Quas accusantium asperiores dolorum aut cupiditate accusamus aliquam odio, officiis ipsam eligendi consequuntur odit animi quam ut recusandae omnis voluptatibus impedit debitis, itaque ea in.</p>
            </div>
        </div>
    )
}
