import { IoPersonSharp } from "react-icons/io5"

export default function Avatar(props) {
    if (props.src) {
        return (<img className="avatar" src={props.src} alt={props.alt} />)
    } else if (props.children) {
        return (<h2 className="avatar">{props.children}</h2>)
    } else return (<h2 className="avatar"><IoPersonSharp /></h2>)
}

// * With image: `avatar`
// * With initials: `avatar avatar-letters`
// * Anonymous: `avatar avatar-icon`