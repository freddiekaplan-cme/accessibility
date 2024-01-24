"use client"
import React, { ChangeEvent, useState } from "react"
import { FormDataType } from "../Types"

const RegularForm = () => {
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
			<div>
				<div className="font-bold mb-4">Name Form</div>
				<label className="mr-4" htmlFor="name">
					Name:
				</label>
				<input
					className="p-2 border-black border-solid border-2"
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<button
					className="text-white p-2 my-8 rounded bg-green-700"
					type="submit"
				>
					Submit
				</button>
			</div>

			{formMessage}
		</form>
	)
}

export default RegularForm
