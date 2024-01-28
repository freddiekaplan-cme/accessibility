"use client"
import React, { ChangeEvent, useState } from "react"
import { LabelledFormRequiredDataType } from "../Types"

const LabelledFormRequired = () => {
	const [formData, setFormData] = useState<LabelledFormRequiredDataType>({
		givenName: "",
		familyName: "",
		title: "",
	})
	const [formMessage, setFormMessage] = useState<string>("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setFormMessage("Name sent!")
	}

	return (
		<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
			<div className="font-bold mb-4">Name Form</div>
			<div>* Required</div>

			<div className="flex flex-col gap-2">
				<label className="flex items-center" htmlFor="title">
					Title:
				</label>
				<input
					className="p-2 border-black border-solid border-2"
					type="text"
					id="title"
					name="title"
					value={formData.title}
					onChange={handleChange}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<label className="flex items-center" htmlFor="givenName">
					Given&nbsp;Name:&nbsp;*
				</label>
				<input
					className="p-2 border-black border-solid border-2"
					type="text"
					id="givenName"
					name="givenName"
					value={formData.givenName}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label className="flex items-center" htmlFor="familyName">
					Family&nbsp;Name:&nbsp;*
				</label>
				<input
					className="p-2 border-black border-solid border-2"
					type="text"
					id="familyName"
					name="familyName"
					value={formData.familyName}
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

export default LabelledFormRequired
