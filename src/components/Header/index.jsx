import "../../css/Header.css"
import logo from '../../img/logo-softtek.png'
import Button from "../Button"
import SecondaryButton from "../Button/SecondaryButton"

function Header() {
    return (
        <header className="container">
            <img src={logo} width={108} height={82} />

            <nav className="menu">
                <SecondaryButton text={"Preview"} />
                <Button text={"Sobre o projeto"} />
            </nav>
        </header>
    )
}

export default Header