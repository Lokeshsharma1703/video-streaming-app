import React, { useState } from 'react'
import './_channelScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from 'react'
import { getVideosByChannel } from '../../redux/actions/videos.action'
import { getChannelDetails } from '../../redux/actions/channel.action';
import { useParams } from 'react-router-dom'
import Video from '../../components/video/Video'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import numeral from 'numeral';

const ChannelScreen = () => {

    const { channelId } = useParams()

    const [subValue, setSubValue] = useState(true)

    const handleSubValue = () => {
        setSubValue(!subValue)
    }


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideosByChannel(channelId))
        dispatch(getChannelDetails(channelId))
    }, [dispatch, channelId])


    const { videos, loading } = useSelector(state => state.channelVideos)
    const { snippet, statistics } = useSelector(state => state.channelDetails.channel)



    return (
        <>
            <div className='px-5 py-4 my-2 d-flex justify-content-between align-items-center channelHeader'>
                <div className='d-flex align-items-center channelHeader_left'>
                    <img src={snippet?.thumbnails?.default?.url} alt='' />

                    <div className='ml-3 channelHeader_details'>
                        <h3>{snippet?.title}</h3>
                        <span>
                            {numeral(statistics?.subscriberCount).format('0.a')}{' '}subscribers
                        </span>
                    </div>
                </div>
                <button onClick={handleSubValue} className={subValue ? 'subscribe' : 'subscribe nots'} >{subValue ? 'Subscribed' : 'Subscribe'}</button>
            </div>

            <Container>
                <Row className='mt-2'>
                    {
                        !loading ? videos?.map(video => <Col md={3} lg={3}>
                            <Video video={video} channelScreen />
                        </Col>)
                            :
                            [...Array(15)].map(() => {
                                <Col md={3} lg={3}>
                                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                                        <Skeleton width='100%' height='140px' />
                                    </SkeletonTheme>
                                </Col>
                            })
                    }
                </Row>
            </Container>
        </>
    )
}

export default ChannelScreen
