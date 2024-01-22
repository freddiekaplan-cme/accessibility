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
		<header>
			<div className="flex flex-row sm:flex-col p-4 sm:p-8 justify-between">
				<h1 className="flex flex-row font-bold text-3xl">
					Accessibility Project
				</h1>
				<button
					className="flex sm:hidden flex-col gap-1 justify-center"
					onClick={handleClick}
				>
					<div className="h-1 w-8 bg-white"></div>
					<div className="h-1 w-8 bg-white"></div>
					<div className="h-1 w-8 bg-white"></div>
				</button>
			</div>
			<nav
				className={`${
					showMenu ? "flex" : "hidden"
				} sm:flex flex-col sm:flex-row gap-4 pt-2`}
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
			</nav>
		</header>
	)
}

export default Header
