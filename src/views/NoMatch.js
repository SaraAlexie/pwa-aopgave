/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom';
import Main from '../styled/Main'

const NoMatch = () => {

    const headingBack = css`
        padding-top: 0.75em;
    `

    const goBack = css`
        text-align: center;
        color: #262024;
    `

    const linkBack = css`
        text-decoration: none;
        color: #262024;
    `

    const brokenClock = css`
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 95%;
    `

    return (
        <Main>
            <h1 css={headingBack}>This page doesn't exist</h1>
            <p css={goBack}>To go back home click <Link to="/" css={linkBack}>here</Link></p>
            <img css={brokenClock} src="img/brokenclock.jpg" alt="Broken Clock" />
        </Main>
    );
}
 
export default NoMatch;