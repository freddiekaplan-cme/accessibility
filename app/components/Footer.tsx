import React from "react"
import ScrollToTopButton from "./ScrollToTop"
import Link from "next/link"

const Footer = () => {
	return (
		<footer className="mt-10 p-10 flex flex-col align-middle items-center">
			<ScrollToTopButton />
			<div className="my-8">
				&copy;{" "}
				<Link
					className="underline"
					href="https://github.com/freddiekaplan-cme"
				>
					Freddie Kaplan
				</Link>{" "}
				2024
			</div>
		</footer>
	)
}

export default Footer
