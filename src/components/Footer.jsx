import React from 'react';
import '../styles/footer.scss';

const Footer=() => {
    return(
    <footer>
        <div>
            <h1>Disclaimer</h1>
            <p>@all rights reserved</p>
        </div>

        <div>
            <h5>Follow Us</h5>
            <a href='https://www.youtube.com/'target={"blank"}>Youtube</a>
            <a href='https://www.google.com/'target={"blank"}>Google</a>
            <a href='https://www.instagram.com/'target={"blank"}>Instagram</a>

        </div>
    </footer>
    )
}
export default Footer;