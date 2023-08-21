import Button from "../components/Button"
import ButtonChildren from "../components/Button-Children"

export default function App() {
    return (
        <main>
            <Button text="Click here" />
            <ButtonChildren>Buy Now!</ButtonChildren>
        </main>
    )
}