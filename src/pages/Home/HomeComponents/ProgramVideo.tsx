import React from 'react'
import styled from 'styled-components'
type VideoData = {
    videoData:{
        id: number
        programName: string
        imgUrl: string
        startTxt: string
        restartTxt: string
        category: string
    }[]
}
type imgUrlProp = {
    imgUrl:string
}
type ProgramContainerSizeProp = {
    reWidth:number
}
const ProgramVideo = ({videoData}:VideoData) => {
    return (
    <ProgramVideoContainer>
        {
            videoData.map((item,i) => (
                <ProgramVideoCard reWidth = {i}>
                    <ProgramImage imgUrl={item.imgUrl}/>
                    <ProgramInfo>
                        <ProgramTitle>{item.programName}</ProgramTitle>
                        <ProgramStartTime>
                            <span>首播</span>
                            　{item.startTxt}
                        </ProgramStartTime>
                        <ProgramRestartTime>
                            <span>重播</span>
                            　{item.restartTxt}
                        </ProgramRestartTime>
                        <Category>{item.category}</Category>
                    </ProgramInfo>
                </ProgramVideoCard>
            ))
        }
       
    </ProgramVideoContainer>
  )
}

const ProgramVideoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
`
const ProgramVideoCard = styled.div<ProgramContainerSizeProp>`
    width: ${(prop)=>  prop.reWidth === 1 ? `calc(100% / 2 - 20px)`: `calc(100% / 4 - 20px) ` };
    margin: 0px 20px 40px 0px;
    overflow: hidden;

`
const ProgramImage = styled.div<imgUrlProp>`
    
    background-image: ${prop => `url(${prop.imgUrl})`};
    background-position: center center ;
    background-repeat: no-repeat;
    padding-bottom: 50%;
    background-size: cover;
    transition: 0.2s;
    
    &:hover{
        transform: scale(1.1);
    }

`
const ProgramInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background-color: #fbfbfb;
`
const ProgramTitle = styled.div`
    font-size: 1.2rem;
`
const ProgramStartTime = styled.div`
    span{
        font-weight: 700;
        color: #7a7a7a;
    }
    margin-top: 10px;
    color: #7a7a7a;
    font-weight: 400;
`
const ProgramRestartTime = styled.div`
    span{
        font-weight: 700;
        color: #7a7a7a;
    }
    margin-top: 5px;
    color: #7a7a7a;
    font-weight: 400;
`
const Category= styled.div`
    margin-top: 10px;
    color: #f9a20c;
    font-size: 0.8rem;
`
export default ProgramVideo