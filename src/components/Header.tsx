
import React from 'react'
import styled from 'styled-components';
import WeatherRealtimeView from '../Feature/Weather/weatherRealtime';

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderTop>
            <HeaderLogo></HeaderLogo>
            <HeaderTopListMenu>
                <li>關於本會</li>
                <li>IPCF 原事好物</li>
                <li>支持我們</li>
                <li>會員登入</li>
                <li>中文 / EN</li>
                <li>字級 AA</li>
                <WeatherRealtimeView/>
            </HeaderTopListMenu>
            
        </HeaderTop>
        <HeaderBottom>
            <ul>
                <li>原視節目</li>
                <li>原視新聞</li>
                <li>Alian 96.3廣播電台</li>
                <li>文化藝術</li>
                <li>LIVE直播 / VOD</li>
                <li>節目表</li>
                <li>
                    <img src="" alt="" />
                </li>
            </ul>
        </HeaderBottom>
    </HeaderContainer>
  )
}

// container

const HeaderContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 148px;
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 50%);
`
const HeaderTop = styled.div`
    flex: 1.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px 0px 30px;
    border-bottom: 1px solid #000;
`
const HeaderBottom = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
        list-style: none;
        display: flex;
        gap: 2em;
        flex-wrap: wrap;
        
    }
    
    
`

// top container content
const HeaderLogo = styled.div`
    background-image: url(${require(`../assets/logoLight.png`)});
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 250px;
`
const HeaderTopListMenu = styled.div`
    display: flex;
    list-style: none;
    gap: 30px;
    align-items: center;
    li {
        font-size: 0.9rem;
    }
`


// Header Bottom content


export default Header