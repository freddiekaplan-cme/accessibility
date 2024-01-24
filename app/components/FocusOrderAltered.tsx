"use client"
import React, { useEffect, useRef, useState } from "react"

const FocusOrderAltered = () => {
	const [text, setText] = useState<string>("")
	const [showDialog, setShowDialog] = useState<boolean>(false)
	const homeButtonRef = useRef<any>(null)
	const closeBtnRef = useRef<any>(null)

	const focusHomeButton = () => {
		homeButtonRef.current?.focus()
	}

	useEffect(() => {
		if (showDialog && closeBtnRef.current) {
			closeBtnRef.current.focus()
		}
	}, [showDialog])

	return (
		<div className="flex flex-col relative">
			<button
				onClick={focusHomeButton}
				className="mx-auto mb-4 flex w-fit justify-center items-center bg-orange-700 text-white rounded p-4 hover:bg-orange-600"
			>
				Bring focus to the example site
			</button>
			<div className="mb-12 mx-auto">
				{text !== "" ? "You clicked on " + text : ""}
			</div>
			<h2 className="font-bold text-lg mb-4">
				Example Altered Focus Order Site
			</h2>
			<nav className="flex flex-row gap-4">
				<button
					ref={homeButtonRef}
					onClick={() => setText("Home")}
					className="border-orange-700 border-b-4 focus:bg-orange-700 focus:text-white p-2"
				>
					Home
				</button>
				<button
					onClick={() => setText("About")}
					className="border-orange-700 border-b-4 focus:bg-orange-700 focus:text-white p-2"
				>
					About
				</button>
				<button
					onClick={() => setText("Contact")}
					className="border-orange-700 border-b-4 focus:bg-orange-700 focus:text-white p-2"
				>
					Contact
				</button>
			</nav>
			<hr className="border-black border-1 my-8"></hr>
			<div className="flex justify-items-center">
				{showDialog && (
					<div className="flex flex-col p-16 absolute bottom-1/3 bg-white border-orange-700 border-4 items-center  left-1/2 transform -translate-x-1/2">
						<p>Example Message</p>
						<button
							ref={closeBtnRef}
							onClick={() => setShowDialog(false)}
							className="focus:bg-orange-700 focus:text-white border-orange-700 border-4 flex max-w-fit justify-center items-center bg-white text-black rounded p-4 mb-4"
						>
							Close
						</button>
					</div>
				)}

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Laboriosam, eius.
				</p>
			</div>

			<div className="flex flex-col w-fit my-4">
				<label
					id="dropdownLabel"
					htmlFor="dropdown"
					className="font-bold"
				>
					Choose an option:
				</label>
				<select id="dropdown" name="dropdown">
					<option value="Option 1">Option 1</option>
					<option value="Option 2">Option 2</option>
					<option value="Option 3">Option 3</option>
				</select>
			</div>

			<button
				onClick={() => setShowDialog(true)}
				className="focus:bg-orange-700 focus:text-white border-orange-700 border-4 flex max-w-fit justify-center items-center bg-white text-black rounded p-4 mb-4"
			>
				Open Dialog
			</button>

			<hr className="border-black border-1 my-8"></hr>
			<button
				onClick={() => setText("Email me!")}
				className="border-orange-700 border-b-4 focus:bg-orange-700 focus:text-white p-2 max-w-fit"
			>
				Email me!
			</button>
		</div>
	)
}

export default FocusOrderAltered
