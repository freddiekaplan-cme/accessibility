"use client"
import React, { useState, useEffect } from "react"

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	const handleScroll = () => {
		if (window.scrollY > 20) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<button
			className="underLineLink"
			id="scrollToTopButton"
			style={{ display: isVisible ? "flex" : "none" }}
			onClick={scrollToTop}
		>
			Scroll to Top
		</button>
	)
}

export default ScrollToTopButton
