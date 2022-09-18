import React from 'react'
import styled from 'styled-components'
import Slider from '../Feature/Slider/Slider'



const MainVision = () => {

    // fake Data
    const SliderImageTempData= [
        {
            id: 0,
            name: 'test1',
            src: 'https://th.bing.com/th/id/OIP.J8uktCRVET2arbFcH_PivwHaE6?pid=ImgDet&rs=1'
        },
        {
            id: 1,
            name: 'test2',
            src: 'https://th.bing.com/th/id/OIP.87GvEvfwTEJ4jyTXYHZBogHaE8?pid=ImgDet&w=640&h=427&rs=1'
        },
        {
            id: 2,
            name: 'test3',
            src: 'https://th.bing.com/th/id/OIP.vjhkvf0cdQm-IxwHgv2zRgHaEc?pid=ImgDet&w=1000&h=600&rs=1'
        },
    ]

  return (
    <MainVisionContainer>
        <Slider sliderData={SliderImageTempData}/>
        <LiveContainer>
            <span>
                ON AIR
            </span>
            <LiveTvBtn>電視</LiveTvBtn>
            <LiveBcBtn>廣播</LiveBcBtn>
        </LiveContainer>
    </MainVisionContainer>
  )
}

const MainVisionContainer = styled.div`
    width: 100vw;
    
    position: relative;
    &::before{
        position: absolute;
        content: '';
        width: 100vw;
        height: 100%;
        bottom: 0px;
        background-image: linear-gradient(0deg, #fff 0%, rgba(255,255,255,0.344975) 11%, rgba(255,255,255,0.165704) 18%, rgba(255,255,255,0.0648634) 22%, rgba(255,255,255,0) 26%);
    }
`
const LiveContainer = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 20px;
    justify-content: center;
    gap: 20px;
    span {
        font-weight: 800;
        font-size: 1.4rem;
    }
`
const LiveTvBtn = styled.div`

    border: 1px solid #fff;
    padding: 5px 25px;
    color: #fff;
    background-color: #4664e6;
`
const LiveBcBtn = styled.div`

    border: 1px solid #fff;
    padding: 5px 25px;
    color: #8d8b8b;
`
export default MainVision