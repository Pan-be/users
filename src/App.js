import React, { useState } from "react"
import AddUserForm from "./components/addUserForm/addUserForm"
import User from "./components/user/user"

const DUMMY_USERS = [
	{ key: "u1", userName: "Konrad", userAge: 33 },
	{ key: "u2", userName: "Bartek", userAge: 43 },
	{ key: "u3", userName: "Gosia", userAge: 31 },
]

function App() {
	const [users, setUser] = useState(DUMMY_USERS)

	const addUserHandler = (user) => {
		setUser((prevState) => [user, ...prevState])
	}

	return (
		<div>
			<AddUserForm onAddUser={addUserHandler} />
			<User users={users} />
		</div>
	)
}

export default App
