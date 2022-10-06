import StyledCard from "./StyledCard";

interface IProps {
    title:string;
    text:string;
    url:string;
}

function Card(props: IProps) {
    return (
        <StyledCard>
            <img width="72px" src={props.url} alt={props.title} />
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </StyledCard>
    )
}

export default Card;