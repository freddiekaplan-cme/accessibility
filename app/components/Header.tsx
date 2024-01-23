"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"

const Header = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const handleClick = () => {
		setShowMenu(!showMenu)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 640) {
				setShowMenu(false)
			}
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<header className="p-4 sm:p-8">
			<div className="flex flex-row sm:flex-col justify-between">
				<h1 className="flex flex-row font-bold text-3xl items-center">
					<Link href={"/"}>Accessibility Project</Link>
				</h1>
				<button
					className="flex sm:hidden flex-col gap-1 items-end h-12 w-12 justify-center"
					onClick={handleClick}
					aria-label="Navigation menu"
				>
					<div className="headerMenuBar"></div>
					<div className="headerMenuBar"></div>
					<div className="headerMenuBar"></div>
				</button>
			</div>
			<nav
				className={`${
					showMenu ? "flex" : "hidden"
				} sm:flex flex-col sm:flex-row gap-4 pt-4 sm:pt-2 pl-4 sm:pl-0`}
				// 	showMenu ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
				// } flex flex-col sm:flex-row gap-4 pt-4 sm:pt-2 pl-4 sm:pl-0 transition ease-in-out duration-300`}
			>
				<Link onClick={handleClick} href="/" className="headerLink">
					Home
				</Link>
				<Link
					onClick={handleClick}
					href="/percievable"
					className="headerLink"
				>
					Percievable
				</Link>
				<Link
					onClick={handleClick}
					className="headerLink"
					href="/operable"
				>
					Operable
				</Link>
				<Link
					onClick={handleClick}
					className="headerLink"
					href="/understandable"
				>
					Understandable
				</Link>
				<Link
					onClick={handleClick}
					className="headerLink"
					href="/robust"
				>
					Robust
				</Link>
				<Link
					onClick={handleClick}
					className="headerLink"
					href="/criteria"
				>
					WCAG Criteria
				</Link>
			</nav>
		</header>
	)
}

export default Header
