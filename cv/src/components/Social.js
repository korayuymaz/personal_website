import React from "react";
import "../styles/Social.css";

function Social() {
    return (
        <div class="social">
            <ul>
                <li>
                    <a href="https://github.com/korayuymaz">
                        <i className="fa fa-github"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/koray-uymaz-22103a73/">
                        <i className="fa fa-linkedin"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/filozofolcam/">
                        <i className="fa fa-instagram"/>
                    </a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/13016968/koray?tab=profile">
                        <i className="fa fa-stack-overflow"/>
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default Social;
