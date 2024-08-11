import "../../css/Button.css"

function SecondaryButton({ text, link }) {
    return (
        <button className="btn-secondary">
            <a href={link}>{text}</a>
        </button>
    )
}

export default SecondaryButton