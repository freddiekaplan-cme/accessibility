"use client"
import React, { useState } from "react"

const DivSite = () => {
	const [text, setText] = useState<string>("")

	return (
		<div className="flex flex-col relative">
			<div className="mb-4 mx-auto">
				{text !== "" ? "You clicked on " + text : ""}
			</div>

			<div className=" border-black border-2">
				<div className="bg-orange-700 p-4">
					<div className="font-bold text-lg mb-4 text-white">
						Example Site
					</div>
					<div className="flex flex-row gap-4">
						<button
							onClick={() => setText("Home")}
							className="text-white p-2 underline font-bold"
						>
							Home
						</button>
						<button
							onClick={() => setText("About")}
							className="text-white p-2 underline font-bold"
						>
							About
						</button>
						<button
							onClick={() => setText("Contact")}
							className="text-white p-2 underline font-bold"
						>
							Contact
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-items-center p-4 my-12">
					<p className="font-bold">Lorem ipsum dolor sit amet</p>
					<div className="mb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laboriosam, eius.
					</div>
					<p className="font-bold">Lorem, ipsum dolor</p>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nihil excepturi maxime distinctio! Quis, ducimus
						sed.
					</div>
				</div>
				<div className="bg-orange-700 text-white text-center p-8">
					&copy; My Site
				</div>
			</div>
		</div>
	)
}

export default DivSite
