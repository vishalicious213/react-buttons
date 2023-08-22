export default function ButtonChildren(props) {
    return (
        <button 
            className={props.size === "sm" ? "button-small" : props.size === "lg" ? "button-large" : ""}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}