import React from "react";
import { Link } from "react-router-dom";
import {Box, BoxFundo} from "../../components/Box";
import BoxImage from "../../components/BoxImage";
import Card from "../../components/Card";
import BoxFooter from "../../components/Footer";

const Home: React.FC = () => {
    return (
        <>
            <BoxFundo>
                Minha primeira página com React 
            </BoxFundo>  
            <Box>
                <Card url="https://cdn-icons-png.flaticon.com/512/3381/3381949.png" title="Somente para desktop" text="Vamos aprender como utilizar um framework"></Card>
                <Card url="https://cdn-icons-png.flaticon.com/512/0/843.png" title="Criado com components" text="Utilizamos o Styled Components"></Card>
                <Card url="https://www.iconpacks.net/icons/2/free-check-mark-icon-3279-thumb.png" title="Fácil aproveitamento" text="Vamos aprender como utilizar um framework"></Card>
            </Box>   
            <BoxImage url="https://images7.alphacoders.com/527/527526.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum commodo nibh at sollicitudin. Nam consequat arcu ligula, et finibus urna pulvinar eu. 
            Proin viverra aliquam velit, ac facilisis justo volutpat et. Suspendisse in consequat lorem, id scelerisque neque. In suscipit enim at pulvinar accumsan. Aliquam sit 
            amet pulvinar urna, vel bibendum nunc. Cras mattis lectus est, eget auctor nunc posuere ut. Nam ac dui a turpis pharetra dictum et a enim. Nam maximus mi a nunc tempus 
            sollicitudin. Phasellus efficitur placerat ipsum, sit amet interdum urna dignissim ac." 
            title="Lorem" 
            side="right"></BoxImage>
            <BoxImage url="https://images7.alphacoders.com/360/360290.jpg"
            text="Cras facilisis placerat ipsum ac ultrices. Fusce gravida, sapien faucibus tempus dictum, purus urna mattis augue, nec ullamcorper ante massa ac augue. ~
            Curabitur pulvinar risus eu sapien elementum, id lobortis tortor tempor. Vestibulum suscipit risus ac nunc iaculis eleifend. Maecenas finibus vitae ligula 
            sed egestas. Mauris auctor pharetra justo, non efficitur diam mollis blandit. Fusce eget tempor dui. Suspendisse potenti. Quisque pulvinar ipsum in vestibulum 
            lacinia. Aenean a porttitor neque, ut cursus urna." 
            title="Lorem" side="left"></BoxImage>
            <BoxImage url="https://images2.alphacoders.com/270/270040.jpg"
            text="Ut finibus, metus non malesuada feugiat, massa nunc bibendum lacus, nec gravida mauris massa et nisi. Nulla condimentum lectus risus, 
            vel molestie libero euismod feugiat. Nullam finibus eu sapien eu elementum. Ut dapibus vulputate auctor. In sit amet sem eu ante rutrum efficitur. 
            Morbi a odio vel est varius pretium. Quisque vel elit turpis. Nulla iaculis at neque ac lobortis. Phasellus iaculis porta mauris, a blandit odio 
            luctus id. Nunc vestibulum hendrerit felis sit amet bibendum." 
            title="Lorem" side="right"></BoxImage>
            <BoxFundo>
                Contato
            </BoxFundo> 
            <BoxFooter/>

        </>
    )
}

export default Home;