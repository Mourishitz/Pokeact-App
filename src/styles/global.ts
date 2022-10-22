import colors from "./colors"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow-x: hidden;
		color: ${colors.BlackShades};
	}

	body {
		background-color: ${colors.TintWhite};
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
		background-color: ${colors.TintWhite};
		border: 2px solid ${colors.LightPurple};
		border-bottom: 2px solid ${colors.LightPurple};
	}

	input:focus {
		outline: none;
	}

	.btn {
		cursor: pointer;
		width: 100%;
		height: 60px;
		background-color: ${colors.LightPurple};
		color: ${colors.TintWhite};
		border-radius: 50px;
		padding: 5px 10px;
		font-size: 16px;
		border: none;
	}

	.btn:hover {
		background-color: ${colors.DeepPurple};
		color: ${colors.TintWhite};
	}

	.btn-link {
		cursor: pointer;
		width: auto;
		height: 30px;
		line-height: 30px;
		margin: 10px 0;
		background-color: ${colors.DeepPurple};
		color: ${colors.TintWhite};
		border: none;
		border-radius: 50px;
		padding: 10px 20px;
		font-size: 16px;
		text-align: center;
	}

	.btn-link:hover {
		background-color: ${colors.BlackShades};
		color: ${colors.TintWhite};
	}


	a {
		text-decoration: none;
		color: ${colors.LightPurple};
	}

	a:hover {
		color: ${colors.DeepPurple};
	}

	.pl-9 {
		padding-left: 90px;
	}

    .ml-2{
      margin-left: 20px;
    }
    
	.mr-2 {
		margin-right: 20px;
	}
    
    .coreChildren{
      margin-top: 84px;
      margin-right: 20px;
      margin-left: 20px;
    }
    
    .cardDisplay{
      padding: 10px;
    }
    
	.headerIcon{
		height: 32px;
		width: 32px;
		padding: 10px;
		border-radius: 1em;
		color: ${colors.DesaturatedPink};
	}

	.headerIcon:hover {
		color: ${colors.DeepPurple};
		background-color: ${colors.LightPurple};
	}
    
    .debug{
      border: 2px solid red !important;
    }
`

export default GlobalStyles