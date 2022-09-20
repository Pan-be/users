import React from "react"
import styles from "./user.module.css"
import Card from "../UI/Card"

const User = (props) => {
	return (
		<Card>
			<ul>
				{props.users.map((user) => {
					return (
						<li>
							{user.userName} ({user.userAge} years old)
						</li>
					)
				})}
				<li>
					{props.users[0].userName} ({props.users[0].userAge} years old)
				</li>
			</ul>
		</Card>
	)
}

export default User
