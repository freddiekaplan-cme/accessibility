"use client"
import React, { ChangeEvent, useState } from "react"
import { FormDataType } from "../Types"

const LabelledFormSimple = () => {
	const [formDataSimple, setFormDataSimple] = useState<FormDataType>({
		name: "",
	})
	const [formMessage, setFormMessage] = useState<string>("")

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormDataSimple((prevState) => ({
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
			<div>Required *</div>

			<div className="flex flex-row gap-2">
				<label className="flex items-center" htmlFor="nameSimpleForm">
					Name&nbsp;*
				</label>
				<input
					className="p-2 border-black border-solid border-2"
					type="text"
					id="nameSimpleForm"
					name="nameSimpleForm"
					value={formDataSimple.name}
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

export default LabelledFormSimple
