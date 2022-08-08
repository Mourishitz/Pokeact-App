import styled from "styled-components"
import colors from "../../styles/colors"

export const HeaderStyle = styled.div`
	overflow: hidden;
	background-color: ${colors.BlackShades};
	padding: 10px;
	position: fixed;
	width: 100%;
	top: 0;
	color: ${colors.TintWhite};

	.link {
		float: left;
		color: ${colors.TintWhite};
		text-align: center;
		font-size: 18px;
		line-height: 25px;
		border-radius: 4px;
	}

	.link.logo {
		font-size: 25px;
		font-weight: bold;
		img{
			margin-left: -20px;
			max-height: 150px;
			max-width: 200px;
			width: 90px;
			height: 50px;
		}

	}

	.link:hover {
		background-color: ${colors.DesaturatedPink};
	}

	.header-right {
		margin-right: 10px;
		float: right;
	}

	@media screen and () {
		.link {
			float: none;
			display: block;
			text-align: left;
		}

		.header-right {
			float: none;
		}
	}


	.cookieName {
		margin-top: 25px;
		margin-right: 10px;
		float: right;
	}

	@media screen and () {
		.link {
			float: none;
			display: block;
			text-align: left;
		}

		.cookieName {
			float: none;
		}
	}
`