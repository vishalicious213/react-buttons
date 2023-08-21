import Button from "../components/Button"
import ButtonChildren from "../components/Button-Children"
import { FaMoneyBill } from "react-icons/fa"

export default function App() {
    return (
        <main>
            <Button text="Click here" />
            <ButtonChildren><FaMoneyBill /> Buy Now!</ButtonChildren>
        </main>
    )
}