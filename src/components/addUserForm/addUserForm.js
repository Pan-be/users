import React, { useState } from "react"
import styles from "./addUserForm.module.css"

import Card from "../UI/Card"
import Button from "../UI/Button"

const AddUserForm = (props) => {
	const [userName, setUserName] = useState("")
	const [userAge, setUserAge] = useState("")

	const setUserNameHandler = (e) => {
		setUserName(e.target.value)
	}
	const setUserAgeHandler = (e) => {
		setUserAge(e.target.value)
	}

	const submitHadler = (e) => {
		e.preventDefault()

		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			return
		}

		if (userAge < 0) {
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

	return (
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
		</Card>
	)
}

export default AddUserForm
