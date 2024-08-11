import "../../css/Footer.css"
import logo from '../../img/logo-softtek.png'


function Footer() {
    return (
        <footer className="footer">
            <a href="/">
                <img src={logo} width={108} height={82} />
            </a>

            <div>
                <p>Desenvolvido por{" "}
                    <span>Eduardo Fronza</span>
                    <span>João Trein</span>
                </p>
            </div>

        </footer>
    )
}

export default Footer