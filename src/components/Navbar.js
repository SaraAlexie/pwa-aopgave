/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from "react-router-dom";


const Navbar = () => {

    const navigation = css`
        text-align: center;
    `

    const linkItem = css`
        text-decoration: none;
        color: #e3d9c8;
        font-weight: bold;
        margin: 0 0.5em;
        padding-bottom: 0.5em;
        &:hover {
            text-decoration: underline;
        }
    `

    return (
        <nav css={navigation}>
            <Link css={linkItem} to="/">Today</Link>
            <Link css={linkItem} to="/births">Births</Link>
            <Link css={linkItem} to="/deaths">Deaths</Link>
        </nav>
    );
}
 
export default Navbar;