import Button from "../Button/index"
import "./ModalRegistered.scss"

export default function ModalRegistered({ closeModal, onclick }) {

    return (
        <div className="modal-container">

            <img src="\assets\images\icon-success.svg" alt="image icon sucess" />

            <h1>Thanks for subscribing!</h1>
            <div className="modal-description">
                <p>A confirmation email has been sent to ash@loremcompany.com. </p>
                <p>Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <Button
                onclick={closeModal}
                message="Dismiss message"
            />
        </div>
    )

}