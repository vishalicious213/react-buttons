import Button from "./Button"

export default function MenuButton({ onClick, children }) {
    return (
        <Button size="lg" variant="success" onClick={onClick}>{children}</Button>
    )
}