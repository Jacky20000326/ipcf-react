import React from 'react'
import styled from 'styled-components'
const ProgramFilterBtn = () => {
    return (
        <ProgramFilterBtnWrapper>
            <NewBtn>最新</NewBtn>
            <HotBtn>熱門</HotBtn>
            <RecommendBtn>推薦</RecommendBtn>
        </ProgramFilterBtnWrapper>
    )
}
const ProgramFilterBtnWrapper = styled.div`
    display: flex;
    gap: 20px;
`
const BtnStyle = styled.button`
    
    border-width: 1px;
    border-style: solid;
    border: 1px solid #818789;
    padding: 5px 25px;
    background-color: #4664e6;
    color: #fff;
`
const NewBtn = styled(BtnStyle)``
const HotBtn = styled(BtnStyle)``
const RecommendBtn = styled(BtnStyle)``
export default ProgramFilterBtn