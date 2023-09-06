import "./Home.scss"
import validator from 'validator'
import { useState } from "react"

import Button from "../../components/Button"
import Input from "../../components/Input"
import ModalRegistered from "../../components/ModalRegistered"

export default function Home() {

    const [msgError, SetmsgError] = useState("")
    const [showModal, setShowModal] = useState(false)

    const getInputValue = () => {
        var input = document.querySelector(".input-label");

    }

    const validateEmail = (event) => {
        var input = document.querySelector("input")
        var email = input.value
        if (validator.isEmail(email)) {
            SetmsgError('')
            setShowModal(true)
            return
        } else {
            return SetmsgError('Valid email required')
        }

    }

    return (

        <div className="container">
            <div className="container-content">
                <div className="newsletter-content">
                    <div className="newsletter-text">
                        <h1>Stay updated!</h1>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    </div>
                    <ul>
                        <li><img src="assets/images/icon-list.svg" alt="image icon list" /> Product discovery and building what matters</li>
                        <li><img src="assets/images/icon-list.svg" alt="image icon list" /> Measuring to ensure updates are a success</li>
                        <li><img src="assets/images/icon-list.svg" alt="image icon list" /> And much more!</li>
                    </ul>
                    <Input
                        msgError={msgError}
                        onchange={getInputValue}
                    />
                    <Button
                        message="Subscribe to monthly newsletters"
                        onclick={validateEmail}
                    />
                    {showModal && (
                        <ModalRegistered
                            closeModal={() => {
                                setShowModal(false)

                            }}
                        />
                    )}


                </div>
                <div className="newsletter-image">
                    <img src="assets/images/illustration-sign-up-desktop.svg" alt="image newsletter from desktop" />
                </div>
                <div className="newsletter-image-mobile">
                    <img src="assets/images/illustration-sign-up-mobile.svg" alt="mage newsletter from mobile" />
                </div>
            </div>
        </div>


    )
}