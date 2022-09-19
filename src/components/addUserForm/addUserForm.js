import React from "react"
import styles from "./addUserForm.module.css"

const AddUserForm = (props) => {
	return (
		<div>
			<form onSubmit={submitHadler}>
				<div>
					<label>Username</label>
					<input type='text'></input>
				</div>
				<div>
					<label>Age (years)</label>
					<input type='text'></input>
				</div>
				<div>
					<button type='submit'>Add User</button>
				</div>
			</form>
		</div>
	)
}

export default AddUserForm
