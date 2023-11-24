'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/header/header';
import styles from '@/styles/specialist/specialist.module.scss';
import CadastroForm from '@/components/cadastro-form/cadastro-form';
import Footer from '@/components/footer/footer';

const CadastroPage = () => {
	const [cadastroData, setCadastroData] = useState([]);
	const [selectedRow, setSelectedRow] = useState<any>(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				'http://localhost:8080/07-WebApi/api/cadastro'
			);
			setCadastroData(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const handleEditClick = (row: any) => {
		console.log(row);
		setSelectedRow(row);
	};

	const handleUpdateComplete = () => {
		fetchData();
		setSelectedRow(null);
	};

	return (
		<>
			<Header />
			<div className={styles.agendamentoContainer}>
				<h1>Cadastro Page</h1>
				<table className={styles.agendamentoTable}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nome</th>
							<th>Email</th>
							<th>Senha</th>
							<th>Telefone</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{cadastroData.map((row: any, index) => (
							<tr key={index}>
								<td>{row.id_cd}</td>
								<td>{row.nm_cd}</td>
								<td>{row.email_cd}</td>
								<td>{row.senha_cd}</td>
								<td>{row.fone_cd}</td>
								<td>
									<button onClick={() => handleEditClick(row)}>Edit</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<CadastroForm
					selectedRow={selectedRow}
					onUpdateComplete={handleUpdateComplete}
				/>
			</div>
			<Footer />
		</>
	);
};

export default CadastroPage;
