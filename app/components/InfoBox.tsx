"use client"
import React, { useState } from "react"

const InfoBox = () => {
	const [showArea, setShowArea] = useState<string>("default")

	const handleClickDefault = () => {
		setShowArea("default")
	}

	const handleClickMinimum = () => {
		setShowArea("minumum")
	}

	const handleClickEnhanced = () => {
		setShowArea("enhanced")
	}

	return (
		<div className="flex flex-col">
			<div className="flex flex-col sm:flex-row sm:gap-4">
				<button
					onClick={handleClickDefault}
					className="flex w-full justify-center items-center rounded p-4 mb-4 bg-white text-black border-orange-700 border-4 hover:bg-orange-700 hover:text-white"
					style={
						showArea === "default"
							? {
									backgroundColor: "rgb(194, 65, 12)",
									color: "white",
								}
							: {}
					}
				>
					Default Size
				</button>

				<button
					onClick={handleClickMinimum}
					className="flex w-full justify-center items-center rounded p-4 mb-4 bg-white text-black border-orange-700 border-4 hover:bg-orange-700 hover:text-white"
					style={
						showArea === "minimum"
							? {
									backgroundColor: "rgb(194, 65, 12)",
									color: "white",
								}
							: {}
					}
				>
					Minimum Size
				</button>
				<button
					onClick={handleClickEnhanced}
					className="flex w-full justify-center items-center rounded p-4 mb-4 bg-white text-black border-orange-700 border-4 hover:bg-orange-700 hover:text-white"
					style={
						showArea === "enhanced"
							? {
									backgroundColor: "rgb(194, 65, 12)",
									color: "white",
								}
							: {}
					}
				>
					Enhanced Size
				</button>
			</div>
			<div className="border-black border-4 p-4 bg-white text-black flex flex-col">
				<div
					className="flex font-bold justify-center items-center border-orange-700 border-2 w-min ml-auto active:text-white active:bg-orange-700 hover:text-white hover:bg-orange-700"
					style={
						showArea === "minumum"
							? { width: "24px", height: "24px" }
							: showArea === "enhanced"
								? { width: "44px", height: "44px" }
								: {}
					}
					aria-label="Looks like a close symbol, but doesn't do anything."
				>
					X
				</div>

				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		</div>
	)
}

export default InfoBox
