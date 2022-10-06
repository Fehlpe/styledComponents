import styled from 'styled-components';

const Box = styled.div`
    padding: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #222;
    background-color: #f8f0f0;
`
const StyledBoxFooter = styled.div`
    padding: 80px 120px;
    display: flex;
    justify-content: space-between;

    span{
        margin-left: 15px;
    }

    a{
        text-decoration: none;
        color: blue;
    }
`

const BoxFundo = styled(Box)`
    background-image: url("https://images6.alphacoders.com/386/386015.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #222;
    font-size: 2.5rem;
    font-weight: 600;
`;

export {Box, BoxFundo, StyledBoxFooter}; 