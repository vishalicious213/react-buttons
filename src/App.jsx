import React from "react"
import ReactDOM from "react-dom/client"
import Button from "../components/Button"

function App() {
    console.log("React Buttons")

    return (
        <main>
            <Button text="button" />
        </main>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)