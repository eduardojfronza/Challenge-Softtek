import "../../css/Button.css"

function Button({ text, link }) {
    return (
        <button className="btn">
            <a href={link}>{text}</a>
        </button>
    )
}

export default Button