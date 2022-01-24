/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const Footer = () => {

    const footer = css`
        color: #e3d9c8;
        background-color: black;
        text-align: center;
    `

    return (
        <footer css={footer}>
            <p>Thanks to Wikipedia, On this Day API</p>
            <p>App by SaraAlexie</p>
        </footer>
    );
}
 
export default Footer;