import React, { useState } from "react"
import styles from "./addUserForm.module.css"

const AddUserForm = (props) => {
	const [userName, setUserName] = useState('')
	const [userAge, setUserAge] = useState('')

	const setUserNameHandler = (e) => {
		setUserName(e.target.value)
	}
	const setUserAgeHandler = (e) => {
		setUserAge(e.target.value)
	}

	const submitHadler = (e) => {
		e.preventDefault()

		const userData = {
			userName: userName,
			userAge: userAge
		}
		props.onAddUser(userData)
	}


	return (
		<div>
			<form onSubmit={submitHadler}>
				<div>
					<label>Username</label>
					<input type='text' value={userName} onChange={setUserNameHandler}></input>
				</div>
				<div>
					<label>Age (years)</label>
					<input type='text' value={userAge} onChange={setUserAgeHandler}></input>
				</div>
				<div>
					<button type='submit'>Add User</button>
				</div>
			</form>
		</div>
	)
}

export default AddUserForm
