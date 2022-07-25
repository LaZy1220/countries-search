import styled from "styled-components"
import {useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { Container } from "./Container"
import {IoMoonOutline, IoMoon} from 'react-icons/io5'
import { selectTheme } from "../store/theme/theme-selector"
import { setTheme } from "../store/theme/theme-actions"
import { clearControls } from "../store/controls/controls-actions"

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: (--color-ui-base);

`
const Wrapper = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
padding:2rem 0;
`
const Title = styled(Link).attrs({
    to:'/'
})`
    color: var(--color-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`
const ModeSwitcher = styled.div`
    color: var(--color-text);
    font-size: var(--fs-sm);
    cursor:pointer;
    text-transform: capitalize;
`

export const Header = ()=>{
    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)
    const handleClear=()=>dispatch(clearControls())
    const toggleTheme =()=>dispatch(setTheme(theme==='light'?'dark':'light'))
    useEffect(()=>{
        document.body.setAttribute('data-theme',theme)
    },[theme])
    return(
            <HeaderEl>
                <Container>
                    <Wrapper>
                        <Title onClick={handleClear}>Where is the world?</Title>
                        <ModeSwitcher onClick={toggleTheme}>
                            {
                                theme==='light'
                                ?(<IoMoonOutline size='14px'/>)
                                :( <IoMoon size='14px'/>)
                            }
                            <span style={{marginLeft:'0.75rem'}}>{theme} Theme</span>
                        </ModeSwitcher>
                    </Wrapper>
                </Container>
            </HeaderEl>
    )
}