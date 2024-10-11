import React, { useState } from "react";
import { Typography, Carousel, Card, Button, Row, Col } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import Banner1 from "../../images/videoimage1.png";
import Banner2 from "../../images/videoimage2.png";

import "./style.css";

// Example video data
const videoData = [
    {
        id: 1,
        title: "Product Overview",
        url: "https://www.w3schools.com/html/mov_bbb.mp4", 
        thumbnail: Banner1,
    },
    {
        id: 2,
        title: "Product Tutorial",
        url: "https://www.w3schools.com/html/mov_bbb.mp4", 
        thumbnail: Banner2, 
    },
    {
        id: 3,
        title: "Customer Review",
        url: "https://www.w3schools.com/html/mov_bbb.mp4", 
        thumbnail: Banner1,
    },
    {
        id: 4,
        title: "Unboxing Experience",
        url: "https://www.w3schools.com/html/mov_bbb.mp4", 
        thumbnail: Banner2,
    },
    {
        id: 5,
        title: "Unboxing Experience",
        url: "https://www.w3schools.com/html/mov_bbb.mp4", 
        thumbnail: Banner1,
    },
    {
        id: 6,
        title: "Unboxing Experience",
        url: "https://www.w3schools.com/html/mov_bbb.mp4", 
        thumbnail: Banner2,
    },
];

const VideoGallerySlider: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    const handlePlayVideo = (id: number) => {
        setActiveVideo(id);
    };

    return (
        <div className="main-container section-spacing_topp section-spacing_bottom">
           
            <h3 className="component-heading primary-color">Video Gallery</h3>
      
            <div style={{ position: "relative" }} className="videoSlider">
                <Carousel
                    dots={false}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    draggable={true}
                    infinite={true}
                    arrows={true}
                    style={{ margin: "auto" }}
                    
                >
                    {videoData.reduce((rows, key, index) => {
                        return (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
                    }, []).map((videoRow, rowIndex) => (
                        <div key={rowIndex}>
                            <Row gutter={16}>
                                {videoRow.map((video) => (
                                    <Col key={video.id} span={8}>
                                        <div>
                                            
                                        {
                                                <div style={{ position: "relative" }} className="custom-height">
                                                    {activeVideo === video.id ? (
                                                        <video
                                                            controls
                                                            autoPlay
                                                            style={{ width: "100%", height: "100%" }}
                                                            
                                                        >
                                                            <source src={video.url} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    ) : (
                                                        <img
                                                            alt={video.title}
                                                            src={video.thumbnail}
                                                            style={{ width: "100%", height: "100%" }}
                                                           
                                                        />
                                                    )}
                                                    {activeVideo !== video.id && (
                                                        <Button
                                                            type="primary"
                                                            className="custom-play-btn"
                                                            icon={<PlayCircleOutlined style={{fontSize: "20px"}}/>}
                                                            size="large"
                                                            onClick={() => handlePlayVideo(video.id)}
                                                            style={{
                                                                position: "absolute",
                                                                top: "80%",
                                                                left: "50%",
                                                                transform: "translate(-50%, -50%)",
                                                                opacity: 1,
                                                                fontSize:"12px",
                                                                padding: "0 16px"
                                                            }}
                                                        >Play Video</Button>
                                                    )}
                                                </div>
                                            }
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default VideoGallerySlider;
