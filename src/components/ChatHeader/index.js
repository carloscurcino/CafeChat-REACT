import * as C from "./style"
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

const ChatHeader = ({ photoURL, name }) => {
    return(
        <C.Container>
            <C.UserInfo>
                {photoURL ? <C.Avatar src={photoURL} alt="Avatar"/> : <MdPerson/>}
                <C.NameContet>
                    <C.Name>{name}</C.Name>
                </C.NameContet>
            </C.UserInfo>
            <C.Options>
                <MdSearch/>
                <MdMoreVert/>
            </C.Options>
        </C.Container>
    )
}

export default ChatHeader;