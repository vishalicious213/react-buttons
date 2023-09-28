import Menu from "../components/Menu/index"
import CompoundStar from "../components/StarCompound"
// import Button from "../components/Button"
// import ButtonChildren from "../components/Button-Children"
// import Avatar from "../components/Avatar"
// import MenuButton from "../components/Menu/MenuButton"
// import MenuDropdown from "../components/Menu/MenuDropdown"
// import MenuItem from "../components/Menu/MenuItem"
// import Star from "../components/Star"
import Toggle from "../components/Toggle/index"
// import { BsStar, BsStarFill } from "react-icons/bs"
// import { FaMoneyBill } from "react-icons/fa"
// import { FcGoogle } from "react-icons/fc"

export default function App() {
    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

    function handleLogin() {
        console.log("Logging in...")
    }

    return (
        <main>
            <CompoundStar onChange={() => console.log("CompoundStar: on")} />

            <Menu onOpen={() => console.log("Menu: onOpen")}>
                <Menu.Button>Sports</Menu.Button>
                <Menu.Dropdown>
                    {sports.map(sport => <Menu.Item key={sport}>{sport}</Menu.Item>)}
                </Menu.Dropdown>
            </Menu>

            <Toggle>
                <Toggle.Button>
                    <Toggle.On>
                        <div className="box filled"></div>
                    </Toggle.On>
                    <Toggle.Off>
                        <div className="box"></div>
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle>

            {/* <Button text="Click here" />

            <ButtonChildren>
                <FaMoneyBill /> Buy Now!
            </ButtonChildren>

            <ButtonChildren onClick={handleLogin}>
                <FcGoogle /> Log in with Google
            </ButtonChildren>

            <ButtonChildren onClick={handleLogin} size="sm">
                <FcGoogle /> Log in with Google
            </ButtonChildren>

            <ButtonChildren onClick={handleLogin} size="lg">
                <FcGoogle /> Log in with Google
            </ButtonChildren>
            
            <ButtonChildren onClick={handleLogin} size="lg" green="true">
                <FcGoogle /> Log in with Google
            </ButtonChildren> */}

            {/* <ButtonChildren variant="success">
                <FcGoogle /> Log in with Google
            </ButtonChildren>

            <ButtonChildren variant="warning">
                <FcGoogle /> Log in with Google
            </ButtonChildren>

            <ButtonChildren variant="danger">
                <FcGoogle /> Log in with Google
            </ButtonChildren> */}

            {/* <Avatar src="./bob.jpg" alt="Bob Ziroll" />
            <Avatar>BZ</Avatar>
            <Avatar /> */}

            {/* <Toggle>
                <Toggle.Button>
                    <Toggle.On>
                        <BsStarFill className="star filled" />
                    </Toggle.On>
                    <Toggle.Off>
                        <BsStar className="star " />
                    </Toggle.Off>
                </Toggle.Button>
            </Toggle> */}

            {/* <Menu>
                <Menu.Button>Sports</Menu.Button>
                <Menu.Dropdown>
                    {sports.map(sport => <Menu.Item key={sport}>{sport}</Menu.Item>)}
                </Menu.Dropdown>
            </Menu> */}
        </main>
    )
}