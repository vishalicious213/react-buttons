export default function ButtonChildren({children, size, green, ...rest}) {
    let buttonClass = ""

    if (size === "sm") buttonClass += "button-small"
    if (size === "lg") buttonClass += "button-large"
    if (green) buttonClass += " green"

    return (
        <button 
            className={buttonClass}
            onClick={rest.onClick}
        >
            {children}
        </button>
    )
}