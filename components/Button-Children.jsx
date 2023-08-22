export default function ButtonChildren({children, size, green, variant, ...rest}) {
    let buttonClass = ""

    if (size === "sm") buttonClass += "button-small"
    if (size === "lg") buttonClass += "button-large"
    if (green) buttonClass += " green"

    if (variant === "success") buttonClass += "success"
    if (variant === "warning") buttonClass += "warning"
    if (variant === "danger") buttonClass += "danger"

    return (
        <button 
            className={buttonClass}
            onClick={rest.onClick}
        >
            {children}
        </button>
    )
}