export default function ButtonChildren(props) {
    return (
        <button onClick={props.onClick}>{props.children}</button>
    )
}