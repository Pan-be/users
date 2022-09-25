import React, { useState, useRef } from "react"
import styles from "./addUserForm.module.css"

import Card from "../UI/Card"
import Button from "../UI/Button"
import Modal from "../modal/modal"
import Wrapper from "../helpers/Wrapper"

const AddUserForm = (props) => {
	const nameInputRef = useRef()
	const ageInputRef = useRef()

	const [error, setError] = useState()

	const submitHadler = (e) => {
		e.preventDefault()
		const enteredName = nameInputRef.current.value
		const enteredAge = ageInputRef.current.value

		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-emnpty values).",
			})
			return
		}

		if (+enteredAge < 0) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (> 0).",
			})

			return
		}

		const userData = {
			id: Math.random().toString(),
			userName: enteredAge,
			userAge: enteredAge,
		}

		props.onAddUser(userData)
		nameInputRef.current.value = ""
		ageInputRef.current.value = ""
	}

	const errorHandler = () => {
		setError(null)
	}
	return (
		<Wrapper>
			{error && (
				<Modal
					onCloseModal={errorHandler}
					title={error.title}
					message={error.message}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={submitHadler}>
					<label htmlFor='username'>Username</label>
					<input id='username' type='text' ref={nameInputRef}></input>

					<label htmlFor='age'>Age (years)</label>
					<input id='age' type='number' ref={ageInputRef}></input>

					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	)
}

export default AddUserForm
