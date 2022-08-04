import colors from "./colors"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
	html, body {npm i --save-dev @types/styled-components
		margin: 0;
		padding: 0;
		padding-bottom: 0;
		height: 100%;
		overflow-x: hidden;
		color: ${colors.PenguinBlack};
	}

	body {
		background-color: ${colors.IceWhite};
	}

	body, textarea, button{
		font-family: 'Heebo', sans-serif;
		font-weight: 400;
	}

	input, label {
		font-family: 'Heebo', sans-serif;
		font-weight: 400;
	}

	input {
		font-size: 16px;
		width: 100%;
		height: 30px;
		padding-left: 10px;
		background-color: ${colors.IceWhite};
		border: 2px solid ${colors.OceanLightBlue};
		border-bottom: 2px solid ${colors.OceanLightBlue};
	}

	input:focus {
		outline: none;
	}

	.btn {
		cursor: pointer;
		width: 100%;
		height: 60px;
		background-color: ${colors.OceanLightBlue};
		color: ${colors.IceWhite};
		border-radius: 50px;
		padding: 5px 10px;
		font-size: 16px;
		border: none;
	}

	.btn:hover {
		background-color: ${colors.OceanDarkBlue};
		color: ${colors.IceWhite};
	}

	.btn-link {
		cursor: pointer;
		width: auto;
		height: 30px;
		line-height: 30px;
		margin: 10px 0;
		background-color: ${colors.OceanDarkBlue};
		color: ${colors.IceWhite};
		border: none;
		border-radius: 50px;
		padding: 10px 20px;
		font-size: 16px;
		text-align: center;
	}

	.btn-link:hover {
		background-color: ${colors.PenguinBlack};
		color: ${colors.IceWhite};
	}


	a {
		text-decoration: none;
		color: ${colors.OceanLightBlue};
	}

	a:hover {
		color: ${colors.OceanDarkBlue};
	}

`

export default GlobalStyles