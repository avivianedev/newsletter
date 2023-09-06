import { useState } from "react"
import "./Input.scss"

export default function Input({ msgError, onchange }) {
    const [emailValue, SetEmailValue] = useState()

    return (
        <div className="container-input">
            <div className="input-label">
                <label>Email address</label>
                <span>{msgError}</span>
            </div>
            <input
                type="email"
                placeholder="email@company.com"
                onChange={(event) => console.log(event.target)}

                required={true}

            />
        </div>
    )
}