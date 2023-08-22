export default function ButtonChildren({children, size, ...rest}) {
    return (
        <button 
            className={size === "sm" ? "button-small" : size === "lg" ? "button-large" : ""}
            onClick={rest.onClick}
        >
            {children}
        </button>
    )
}