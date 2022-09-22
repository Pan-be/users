import React from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"

import styles from "./modal.module.css"

const Modal = (props) => {
	return (<div>
		<div onClick={props.onCloseModal} className={styles.backdrop}/>
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h1>{props.title}</h1>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onCloseModal}>Okay</Button>
			</footer>
		</Card></div>
	)
}

export default Modal
