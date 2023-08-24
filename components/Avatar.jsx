import { IoPersonSharp } from "react-icons/io5"

export default function Avatar(props) {
    let colorIndex = Math.floor(Math.random() * 5) + 1
    let color = ""

    if (colorIndex === 1) color = "navy"
    if (colorIndex === 2) color = "pink"
    if (colorIndex === 3) color = "red"
    if (colorIndex === 4) color = "blue"
    if (colorIndex === 5) color = "green"

    if (props.src) {
        return (
            <div className="avatar">
                <img src={props.src} alt={props.alt} />
            </div>
        )
    } else if (props.children) {
        return (
            <div className="avatar avatar-letters">{props.children}</div>
        )
    } else return (
        <div className={`avatar avatar-icon ${color}`}><IoPersonSharp /></div>
        )
}

// * With image: `avatar`
// * With initials: `avatar avatar-letters`
// * Anonymous: `avatar avatar-icon`