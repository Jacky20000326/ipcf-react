import React, { useEffect,useState } from 'react'
import { VSliderFakeData } from "../../assets/VSliderFakeData"
import styled from 'styled-components'
import {BsChevronUp,BsChevronDown} from "react-icons/bs"
const VSlider = () => {
    const DataCount = VSliderFakeData.length
    const [VSliderIndex,setVSliderIndex] = useState<number>(0)

    const AutoSliderSwitch = ()=>{
        setVSliderIndex(item => item < DataCount-1 ? item + 1 : item = 0)
        console.log(VSliderIndex)
    }
    const preSlider = ()=>{
        setVSliderIndex(item => item == 0 ? item = DataCount-1 : item -1)
    }


    useEffect(()=>{
        let timeOut = setInterval(AutoSliderSwitch,1000)
        return ()=>{
            clearTimeout(timeOut)
        }
    },[VSliderIndex])
    return (
        <VSliderContainer>
            <VSliderWrapper>
                <ContentContainer>
                    <ContentTitle>{VSliderFakeData[VSliderIndex].title}</ContentTitle> 
                    <ContentText> 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</ContentText>
                </ContentContainer>
                <VSliderControl>
                    <VSliderPaginationContainer>
                        <VSliderPagination>{VSliderIndex+1}/{DataCount}</VSliderPagination>
                    </VSliderPaginationContainer>
                    <VSliderArrowContainer>
                        <VSliderArrowLeft onClick={()=>{AutoSliderSwitch()}}/>
                        <VSliderArrowRight onClick={()=>{preSlider()}}/>
                    </VSliderArrowContainer>
                </VSliderControl>
            </VSliderWrapper>
            
        </VSliderContainer>
        
    )
   
}

const VSliderContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    min-height: 100px;
`
const VSliderWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 0.8em;
    
`   
const ContentContainer = styled.div`
    display: flex;
    align-items: center;
`
const ContentTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: #d7d700;
    margin-right: 30px;
`
const ContentText = styled.div`

`
const VSliderControl = styled.div`
    display: flex;
    align-items: center;
`
const VSliderPaginationContainer = styled.div`
    margin-right: 20px;
`
const VSliderPagination= styled.div`

`
const VSliderArrowContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const VSliderArrowLeft = styled(BsChevronUp)``
const VSliderArrowRight = styled(BsChevronDown)``

export default VSlider