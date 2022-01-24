/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
const GlobalStyles = () => {

	return (
		<Global
			styles={css`
				#root {
					box-sizing: border-box;
					margin: 0;
				}
				html, body {
					margin: 0;
					padding: 0;
					background-color: black;
				}
				h1, h2, h3, h4, h5, h6 {
					color: #262024;
				}
				h1, h2 {
					text-align: center;
				}
			`}>
        </Global>
	);
};

export default GlobalStyles;