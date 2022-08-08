import { Link } from "react-router-dom"
import ToggleDrawer from "../../components/Drawer";
import Header from "../../components/Header"

type CoreProps = {
	children: React.ReactNode;
}

export default function Core({children}: CoreProps): JSX.Element {
	return (
		<div>
			<Header />
			{/* <ToggleDrawer /> */}
			<div className="pl-9 mr-2">
				{children}
			</div>
		</div>
	)
}