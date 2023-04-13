import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './_watchScreen.scss'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import Comments from '../../components/comments/Comments'


const WatchScreen = () => {
    return (
        <Row className='cont'>
            <Col lg={8}>
                <div className='watchScreen_player'>
                    <iframe
                        src='https://www.youtube.com/embed/tgbNymZ7vqY'
                        border={0}
                        title='My Video'
                        allowFullScreen
                        width='100%'
                        height='100%'>


                    </iframe>
                </div>

                <VideoMetaData />
                <Comments />
            </Col>
            <Col lg={4}>
                {
                    [...Array(10)].map(() => <VideoHorizontal />)
                }
            </Col>
        </Row>
    )
}

export default WatchScreen