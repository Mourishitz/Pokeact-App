import { HeaderStyle } from './styles'
import { Link, } from "react-router-dom"
import ToggleDrawer from '../Drawer'

export default function Header(): JSX.Element {

	return (
		<HeaderStyle>
			<Link to={`/`} className='link logo'><ToggleDrawer /></Link>
		</HeaderStyle>
	)
}