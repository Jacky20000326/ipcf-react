import React from 'react'
import styled from 'styled-components'
import ProgramFilterBtn from './ProgramFilterBtn'
import ProgramPagination from './ProgramPagination'
import ProgramVideo from './ProgramVideo'
import { VideoData } from "../../../assets/VideoData"
const Program = () => {
    
    return (
    <ProgramContainer>
        <ProgramFilterWrapper>
            <ProgramTitle>原視節目</ProgramTitle>
            <ProgramFilterBtn/>
            <ProgramPagination/>
        </ProgramFilterWrapper>
        <ProgramVideoContainer>
            <ProgramVideo videoData={VideoData}/>
        </ProgramVideoContainer>
    </ProgramContainer>
    )
}
const ProgramContainer = styled.div`
    width: 1140px;
    max-width: calc(100% - 40px);
    margin: 0px auto;
    margin-top: 70px;

    

`
const ProgramFilterWrapper= styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const ProgramTitle = styled.div`
    font-size: 1.4rem;
    font-weight: 800;
`
const ProgramVideoContainer = styled.div``

export default Program