import { useState } from "react";

const Home = () => {
	const [listaTarea, setlistaTarea] = useState([]);
	const [valor, setvalor] = useState("");

	function handleKeyDown(e) {
		if (e.key === "Enter" && valor.trim() !== "") {
			setlistaTarea([...listaTarea, valor.trim()]);
			setvalor("");
		}
	}

	function handleDelete(index) {
		const newlistaTarea = listaTarea.filter((_, i) => i !== index);
		setlistaTarea(newlistaTarea);
	}

	return (
		<div style={styles.container}>
			<h1>To do List</h1>

			<input
				type="text"
				placeholder="Escribe una tarea y presiona Enter"
				value={valor}
				onChange={(e) => setvalor(e.target.value)}
				onKeyDown={handleKeyDown}
				style={styles.input}
			/>

			<div style={styles.list}>
				{listaTarea.length === 0 ? (
					<p>No hay tareas, añadir tareas</p>
				) : (
					listaTarea.map((task, index) => (
						<div key={index} style={styles.task}>
							{task}
							<button onClick={() => handleDelete(index)}>
								Eliminar
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
};

const styles = {
	container: {
		padding: "20px",
		maxWidth: "400px",
		margin: "0 auto",
	},
	input: {
		width: "100%",
		padding: "10px",
		marginBottom: "20px",
		boxSizing: "border-box",
	},
	list: {
		border: "1px solid #ccc",
		borderRadius: "4px",
	},
	task: {
		padding: "10px",
		borderBottom: "1px solid #eee",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
};

export default Home;