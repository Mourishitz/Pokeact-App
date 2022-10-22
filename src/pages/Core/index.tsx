import React from "react"
import Header from "../../components/Header"

type CoreProps = {
	children: React.ReactNode;
}

export default function Core({children}: CoreProps): JSX.Element {
	return (
		<div>
			<Header />
			<div className="coreChildren">
				{children}
			</div>
		</div>
	)
}