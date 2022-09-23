import React from "react"
import { ReactDOM } from "react"

import Card from "../UI/Card"
import Button from "../UI/Button"

import styles from "./modal.module.css"

const Backdrop = (props) => {
	return <div onClick={props.onCloseModal} className={styles.backdrop} />
}

const ModalOverlay = (props) => {
	return (
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
		</Card>
	)
}

const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onCloseModal={props.onCloseModal}
				/>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	)
}

export default Modal
