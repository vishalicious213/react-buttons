import { IoPersonSharp } from "react-icons/io5"

export default function Avatar(props) {
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
        <div className="avatar avatar-icon"><IoPersonSharp /></div>
        )
}

// * With image: `avatar`
// * With initials: `avatar avatar-letters`
// * Anonymous: `avatar avatar-icon`