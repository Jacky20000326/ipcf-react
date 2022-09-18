import React,{ useState,useEffect,useRef } from 'react'
import styled from 'styled-components'



type SliderImageTempDataProp = {
    sliderData:{
        id: number
        name: string
        src: string
    }[]   
}

type SliderBtnStyleProp = {
    currId: number
    nowId:number
}

type SliderShowProp = {
    show: number
}



const Slider = ({sliderData}:SliderImageTempDataProp) => {

    const SliderShow = useRef(0)

    // slider image index
    const [SliderIndex,setSliderIndex] = useState<number>(1)


    const autoCarousel = ()=>{
        setSliderIndex(item => item === sliderData.length -1 ? 0 : item+ 1)
        // slider image set show



    }

    // get SliderBtn id
    const getCurrSliderBtn = (imgId:number)=>{
        setSliderIndex(item => item = imgId)
    }


    useEffect(()=>{
    // auto carousel features
        
        const interval = setInterval(autoCarousel,5000)
        SliderShow.current = 1
        return ()=>{
            clearInterval(interval)
            SliderShow.current = 0
        }

    },[SliderIndex])
    
    return (
        <SliderWrapper>
            <SliderImageContainer>
                <MainVisionImg show={SliderShow.current} src={sliderData[SliderIndex]?.src}/>
            </SliderImageContainer>
            <SliderBtnContainer>
                {
                    sliderData.map(item => <SliderBtn nowId={SliderIndex} currId={item.id}  onClick={()=>{getCurrSliderBtn(item.id)}}  key={item.id}/> )
                }
                
            </SliderBtnContainer>
        </SliderWrapper>

    )
}
const SliderWrapper = styled.div`

`
const SliderImageContainer = styled.div`
    background-image: #fff;
    width: 100%;
`
const MainVisionImg = styled.img<SliderShowProp>`
    width: 100%;
    height: auto;
    max-height: 70vh;
    transition: 1s;
    opacity: ${(prop)=> prop.show === 0 ? 0 : 1};

`


const SliderBtnContainer  = styled.div`
    display: flex;
    position: absolute;
    max-width: 50%;
    bottom: 15%;
    right: 30%;
`
const SliderBtn = styled.div<SliderBtnStyleProp>`
    
    transition: 0.3s;
    width: ${(prop)=> prop.currId === prop.nowId ? "30px": "10px"};
    height: 10px;
    border: 2px solid #000;
    border-radius: 50px;
    margin-right: 10px;
    background-color: ${(prop)=> prop.currId === prop.nowId ? "#232323": "none"};
    cursor: pointer;
`

export default Slider