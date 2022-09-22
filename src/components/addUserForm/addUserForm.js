import React, { useState } from "react"
import styles from "./addUserForm.module.css"

import Card from "../UI/Card"
import Button from "../UI/Button"
import Modal from "../modal/modal"

const AddUserForm = (props) => {
	const [userName, setUserName] = useState("")
	const [userAge, setUserAge] = useState("")
	const [error, setError] = useState()

	const setUserNameHandler = (e) => {
		setUserName(e.target.value)
	}
	const setUserAgeHandler = (e) => {
		setUserAge(e.target.value)
	}

	const submitHadler = (e) => {
		e.preventDefault()
		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-emnpty values)."
			})
			return
		}
		
		if (+userAge < 0) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (> 0)."
			})

			return
		}

		const userData = {
			id: Math.random().toString(),
			userName: userName,
			userAge: userAge,
		}

		props.onAddUser(userData)

		setUserName("")
		setUserAge("")
	}

	const errorHandler = () => {
		setError(null)
	}
	return (<div>
		{error && <Modal onCloseModal={errorHandler} title={error.title} message={error.message}/>}
		<Card className={styles.input}>
			<form onSubmit={submitHadler}>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					type='text'
					value={userName}
					onChange={setUserNameHandler}></input>

				<label htmlFor='age'>Age (years)</label>
				<input
					id='age'
					type='number'
					value={userAge}
					onChange={setUserAgeHandler}></input>

				<Button type='submit'>Add User</Button>
			</form>
		</Card></div>
	)
}

export default AddUserForm
