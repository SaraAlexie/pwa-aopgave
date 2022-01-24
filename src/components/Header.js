/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const Header = () => {

    const background = css`
        margin: 0;
        display: flex;
        padding: 1em 1em 0;
        justify-content: center;
    `

    const logo = css`
        height: 8em;
        width: 8em;
        border-radius: 50%;
    `

    const brand = css`
        text-align: center;
        margin-left: 0.5em;
    `

    const title = css`
        font-weight: bold;
        font-size: 1.5em;
        color: #e3d9c8;
    `

    return (
        <header css={background}>
            <Link to="/">
                <img css={logo} src="/img/clock.jpg" alt="logo" />
            </Link>
            <section css={brand}>
                <p css={title}>Today in History</p>
                <Navbar />
            </section>
        </header>
    );
}
 
export default Header;