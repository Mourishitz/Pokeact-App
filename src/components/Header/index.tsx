import ToggleDrawer from '../Drawer'
import { HeaderStyle } from './styles'

export default function Header(): JSX.Element {

	return (
		<HeaderStyle>
			<ToggleDrawer />
		</HeaderStyle>
	)
}