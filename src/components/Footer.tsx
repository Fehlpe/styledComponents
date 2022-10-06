import styled from "styled-components"
import { StyledBoxFooter } from "./Box"

const DivIcons = styled.div`
    display: flex;
    gap: 20px;
`

function BoxFooter(){
    return(
        <StyledBoxFooter>
            <div>
                <a href="">About</a><span><a href="">Contact</a></span><span><a href="">Terms of Use</a></span><span><a href="">Privacy Policy</a></span>
                <p>© Your website 2020. All rights reserved.</p>
            </div>
            <DivIcons>
                <a href=""><img width="48px" src="https://cdn-icons-png.flaticon.com/512/49/49354.png" alt=""/></a>
                <a href=""><img width="48px" src="https://cdn.icon-icons.com/icons2/2715/PNG/512/instagram_logo_icon_172387.png" alt=""/></a>
                <a href=""><img width="48px" src="https://cdn-icons-png.flaticon.com/512/49/49351.png" alt=""/></a>
            </DivIcons>
        </StyledBoxFooter>
    )
}

export default BoxFooter;