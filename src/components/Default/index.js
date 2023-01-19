import * as C from "./style";
import { MdMessage } from "react-icons/md";

const Default = () => {
    return(
        <C.Container>
            <MdMessage/>
            <C.Tittle>Café Chat</C.Tittle>
            <C.Info>
                Agora você pode enviar e receber mensagens sem precisar manter seu celular conectado à internet.
            </C.Info>
        </C.Container>
    )
}

export default Default;
