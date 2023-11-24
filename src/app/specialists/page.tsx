'use client';

import { useEffect, useState } from 'react';
import api from '@/api/axios';
import styles from '@/styles/specialist/specialist.module.scss';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { FaTrashAlt } from 'react-icons/fa';
const AgendamentoPage = () => {
	const [agendamentos, setAgendamentos] = useState([]);
	const [specialists, setSpecialists] = useState([]);
	const [error, setError] = useState(null);

	const fetchAgendamentos = async () => {
		try {
			const response = await api.get('/agendamento');
			setAgendamentos(response.data);
		} catch (err: any) {
			setError(err.response ? err.response.data : err.message);
		}
	};

	const fetchSpecialists = async () => {
		try {
			const response = await api.get('/especialista');
			setSpecialists(response.data);
		} catch (err: any) {
			setError(err.response ? err.response.data : err.message);
		}
	};

	useEffect(() => {
		fetchAgendamentos();
		fetchSpecialists();
	}, []);

	const deleteSchedule = async (id: any) => {
		try {
			await api.delete(`/agendamento/${id}`);
			fetchAgendamentos();
		} catch (err: any) {
			setError(err.response ? err.response.data : err.message);
		}
	};
	return (
		<>
			<Header />
			<div className={styles.agendamentoContainer}>
				<div className={styles.specialistContainer}>
					<h1>Lista de Especialistas</h1>
					{error && <div>Error: {error}</div>}
					{specialists.length === 0 && !error && (
						<p>No specialists available.</p>
					)}
					{specialists.length > 0 && (
						<div className={styles.specialistGrid}>
							{specialists.map((specialist: any) => (
								<div key={specialist.crm_md} className={styles.specialistCard}>
									<h3>{specialist.nm_md}</h3>
									<p>CRM: {specialist.crm_md}</p>
									<p>Especialidade: {specialist.espc_md}</p>
									<p>Telefone: {specialist.fone_md}</p>
								</div>
							))}
						</div>
					)}
				</div>
				<h1>Lista de Agendamentos</h1>
				{error && <div>Error: {error}</div>}
				{agendamentos.length === 0 && !error && (
					<p>No agendamentos available.</p>
				)}
				{agendamentos.length > 0 && (
					<table className={styles.agendamentoTable}>
						<thead>
							<tr>
								<th>ID</th>
								<th>Título</th>
								<th>Data e Hora</th>
								<th>Link</th>
								<th>Deletar</th>
							</tr>
						</thead>
						<tbody>
							{agendamentos.map((agendamento: any) => (
								<tr key={agendamento.id_ag}>
									<td>{agendamento.id_ag}</td>
									<td>{agendamento.titulo_ag}</td>
									<td>{agendamento.datahr_ag}</td>
									<td>
										<a href={agendamento.link_ag} target="_blank">
											{agendamento.link_ag}
										</a>
									</td>
									<td
										className={styles.deleteIcon}
										onClick={() => deleteSchedule(agendamento.id_ag)}
									>
										<FaTrashAlt />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
			<Footer />
		</>
	);
};

export default AgendamentoPage;
