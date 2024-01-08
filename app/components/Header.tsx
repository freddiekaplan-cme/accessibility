import Link from "next/link"
import React from "react"

const Header = () => {
	return (
		<header className="flex flex-col p-8 justify-center">
			<h1 className="flex flex-row font-bold text-xl">
				Accessibility Project
			</h1>
			<nav className="flex flex-row gap-4 pt-2">
				<Link href="/percievable">Percievable</Link>
				<Link href="/operable">Operable</Link>
				<Link href="/understandable">Understandable</Link>
				<Link href="/robust">Robust</Link>
			</nav>
		</header>
	)
}

export default Header
