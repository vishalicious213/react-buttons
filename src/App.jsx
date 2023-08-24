import Button from "../components/Button"
import ButtonChildren from "../components/Button-Children"
import Avatar from "../components/Avatar"
import Menu from "../components/Menu"
import MenuButton from "../components/MenuButton"
import MenuDropdown from "../components/MenuDropdown"

import { FaMoneyBill } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export default function App() {
    function handleLogin() {
        console.log("Logging in...")
    }

    return (
        <main>
            {/* <Button text="Click here" />

            <ButtonChildren>
                <FaMoneyBill /> Buy Now!
            </ButtonChildren>

            <ButtonChildren onClick={handleLogin}>
                <FcGoogle /> Log in with Google
            </ButtonChildren>

            <ButtonChildren onClick={handleLogin} size="sm">
                <FcGoogle /> Log in with Google
            </ButtonChildren>

            <ButtonChildren onClick={handleLogin} size="lg">
                <FcGoogle /> Log in with Google
            </ButtonChildren>
            
            <ButtonChildren onClick={handleLogin} size="lg" green="true">
                <FcGoogle /> Log in with Google
            </ButtonChildren> */}

            {/* <ButtonChildren variant="success">
                <FcGoogle /> Log in with Google
            </ButtonChildren>

            <ButtonChildren variant="warning">
                <FcGoogle /> Log in with Google
            </ButtonChildren>

            <ButtonChildren variant="danger">
                <FcGoogle /> Log in with Google
            </ButtonChildren> */}

            {/* <Avatar src="./bob.jpg" alt="Bob Ziroll" />
            <Avatar>BZ</Avatar>
            <Avatar /> */}

            <Menu>
                <MenuButton>Sports</MenuButton>
                <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />
            </Menu>
        </main>
    )
}