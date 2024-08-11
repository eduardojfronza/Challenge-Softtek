import "../../css/Header.css"
import logo from '../../img/logo-softtek.png'
import Button from "../Button"
import SecondaryButton from "../Button/SecondaryButton"

function Header() {
    return (
        <header className="container">
            <a href="/">
                <img src={logo} width={108} height={82} />
            </a>

            <nav className="menu">
                <SecondaryButton link={"/preview"} text={"Preview"} />
                <Button text={"Sobre o projeto"} link={"/sobre"} />
            </nav>
        </header>
    )
}

export default Header