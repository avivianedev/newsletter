import "./Button.scss";

export default function Button({ onclick, message }) {

    return (
        <div className="btn-newsletter">
            <button onClick={() => onclick()}>
                {message}
            </button>
        </div>
    )
}