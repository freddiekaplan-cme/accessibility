import Link from "next/link"
import React from "react"

const Header = () => {
	return (
		<header className="flex flex-col p-4 sm:p-8 justify-center">
			<h1 className="flex flex-row font-bold text-3xl">
				Accessibility Project
			</h1>
			<nav className="flex flex-row gap-4 pt-2">
				{/* <Link
					className="border-b-4 border-black hover:border-white focus:border-white"
					href="/"
				>
					Home
					hover:border-opacity-100 focus:border-opacity-100
					border-transparent hover:border-bottom focus:border-bottom focus:outline-none transition-colors duration-300
				</Link> */}
				{/* <Link
					href="/"
					className="border-b-4 border-transparent hover:border-opacity-100 focus:border-opacity-100 focus:outline-none transition-opacity duration-300"
					style={{
						borderColor: `rgb(var(--header-underline))`,
					}}
				>
					Home
				</Link> */}
				<Link href="/" className="headerLink">
					Home
				</Link>
				<Link href="/percievable" className="headerLink">
					Percievable
				</Link>
				<Link className="headerLink" href="/operable">
					Operable
				</Link>
				<Link className="headerLink" href="/understandable">
					Understandable
				</Link>
				<Link className="headerLink" href="/robust">
					Robust
				</Link>
			</nav>
		</header>
	)
}

export default Header
