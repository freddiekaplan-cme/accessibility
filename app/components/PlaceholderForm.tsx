"use client"
import React, { ChangeEvent, useState } from "react"
import { FormDataType } from "../Types"

const PlaceholderForm = () => {
	const [formData, setFormData] = useState<FormDataType>({ name: "" })
	const [formMessage, setFormMessage] = useState<string>("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(
			(prevState) =>
				({
					...prevState,
					[name]: value,
				}) as FormDataType,
		)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setFormMessage("Name sent!")
	}

	return (
		<form onSubmit={handleSubmit}>
			<div id="nameform" className="font-bold">
				Name Form
			</div>
			<div className="flex items-center gap-4">
				<div>
					<input
						className="p-2 border-black border-solid border-2"
						type="text"
						placeholder="Name"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						aria-labelledby="nameform"
						required
					/>
				</div>
				<div>
					<button
						className="text-white p-2 my-8 mr-2 rounded bg-green-700"
						type="submit"
					>
						Submit
					</button>
				</div>
			</div>
			{formMessage}
		</form>
	)
}

export default PlaceholderForm
