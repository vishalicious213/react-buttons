import Button from "../components/Button"
import ButtonChildren from "../components/Button-Children"
import { FaMoneyBill } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export default function App() {
    function handleLogin() {
        console.log("Logging in...")
    }

    return (
        <main>
            <Button text="Click here" />

            <ButtonChildren>
                <FaMoneyBill /> Buy Now!
            </ButtonChildren>

            <ButtonChildren onClick={handleLogin}>
                <FcGoogle /> Log in with Google
            </ButtonChildren>
        </main>
    )
}