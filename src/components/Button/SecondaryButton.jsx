import "../../css/Button.css"

function SecondaryButton({ text }) {
    return (
        <button className="btn-secondary">
            {text}
        </button>
    )
}

export default SecondaryButton