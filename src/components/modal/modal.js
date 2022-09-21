import React from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"

const Modal = (props) => {
	return (
		<Card>
			<header>
				<h1>{props.title}</h1>
			</header>
			<div>
				<p>{props.message}</p>
			</div>
			<footer>
				<Button></Button>
			</footer>
		</Card>
	)
}

export default Modal
