import React from "react"
import styles from "./user.module.css"
import Card from "../UI/Card"

const User = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => {
					return (
						<li key={user.id}>
							{user.userName} ({user.userAge} years old)
						</li>
					)
				})}
			</ul>
		</Card>
	)
}

export default User
