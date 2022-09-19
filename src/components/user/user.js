import React from "react"
import styles from "./user.module.css"

const User = (props) => {
	return (
		<div>
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
		</div>
	)
}

export default User
