"use client"
import React, { ChangeEvent, useState } from "react"
import { FormDataType } from "../Types"

const LabelledFormErrorSuggestion = () => {
	const [formDataErrorSuggestion, setFormDataErrorSuggestion] =
		useState<FormDataType>({
			name: "",
		})
	const [formMessage, setFormMessage] = useState<string>("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormDataErrorSuggestion((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { name } = formDataErrorSuggestion

		if (name.includes(" ")) {
			setFormMessage("Name sent!")
		} else {
			setFormMessage(
				"Please enter your full name in the format: First Last",
			)
		}
	}

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
			<div className="font-bold mb-4">Name Form</div>
			<div>Required *</div>

			<div className="flex flex-row gap-2">
				<label className="flex items-center" htmlFor="name">
					Full&nbsp;Name&nbsp;*
				</label>
				<input
					className="p-2 border-black border-solid border-2"
					type="text"
					id="name"
					name="name"
					value={formDataErrorSuggestion.name}
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

export default LabelledFormErrorSuggestion
