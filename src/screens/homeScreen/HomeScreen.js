import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import './_homeScreen.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";


const HomeScreen = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideos)

    const fetchData = () => {
        if (activeCategory === 'All') {
            dispatch(getPopularVideos())
        }
        else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
        <Container className="con">
            <CategoriesBar />
            <Row className="sec">
                <InfiniteScroll
                    dataLength={videos.length}
                    next={fetchData}
                    hasMore={true}
                    loader={
                        <div className="spinner-border text-danger d-block mx-auto"></div>
                    }
                    className="row"
                >
                    {!loading ? videos.map((video) => (
                        <Col lg={3} md={4} >
                            <Video video={video} key={video.id} className='video' />
                        </Col>
                    ))
                        :
                        [...Array(20)].map(() => {
                            <Col lg={3} md={4} >
                                <SkeletonVideo className='video' />
                            </Col>
                        })

                    }
                </InfiniteScroll>
            </Row>
        </Container >
    )
}

export default HomeScreen