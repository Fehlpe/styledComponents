import React from "react";
import styled from "styled-components";

const StyledBoxImage = styled.div`
    display: flex;
    height: 70vh;

    h1{
        margin: 0;
        font-size: 2.5rem;
    }

    p{
        margin: 0;
        font-size: 1.5rem;
    }

    img{
        width: 100%;
        height: 100%;
    }
`

let ImgDiv = styled.div`
    width: 50%;
    height: 100%;
`

const TextDiv = styled.div`
    width: 50%;
    height: 100%;
    padding: 100px;
    box-sizing: border-box;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

interface Props {
    title:string;
    text:string;
    url:string;
    side:string;
}

function BoxImage(props: Props){

    switch (props.side) {
        case "left":
            return(
                <StyledBoxImage>
                    <ImgDiv>
                        <img src={props.url} alt="" />
                    </ImgDiv>
                    <TextDiv>
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                    </TextDiv>
                </StyledBoxImage>
            );
        case "right":
            return(
                <StyledBoxImage>                   
                    <TextDiv>
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                    </TextDiv>
                    <ImgDiv>
                    <img src={props.url} alt="" />
                    </ImgDiv>
                </StyledBoxImage>
            );
        default:
            return(
                <StyledBoxImage>
                    <ImgDiv>
                    <img src={props.url} alt="" />
                    </ImgDiv>
                    <TextDiv>
                        <h1>{props.title}</h1>
                        <p>{props.text}</p>
                    </TextDiv>
                </StyledBoxImage>
            )
    }
}
    
export default BoxImage;
