'use client';
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import styles from '@/styles/schedule/schedule.module.scss';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import api from '@/api/axios';
import { useRouter } from 'next/navigation';

const AgendamentoPage = () => {
	const [titulo_ag, setTituloAg] = useState('');
	const [datahr_ag, setDataHrAg] = useState('');
	const [link_ag, setLinkAg] = useState('');
	const [error, setError] = useState(null);
	const router = useRouter();
	const handleFormSubmit = async () => {
		try {
			const response = await api.post(
				'/agendamento',
				{
					id_ag: uuidv4(),
					titulo_ag,
					datahr_ag,
					link_ag,
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			alert('Agendamento com sucesso!');
			router.push('/specialists');
		} catch (err: any) {
			alert('Erro ao criar o agendamento!');
		}
	};

	return (
		<>
			<Header />
			<div className={styles.agendamentoContainer}>
				<h1>Criar Agendamento</h1>
				{error && <div>Error: {error}</div>}
				<form className={styles.form}>
					<label htmlFor="titulo_ag">Título:</label>
					<input
						type="text"
						id="titulo_ag"
						value={titulo_ag}
						onChange={(e) => setTituloAg(e.target.value)}
					/>

					<label htmlFor="datahr_ag">Data e Hora:</label>
					<input
						type="datetime-local"
						id="datahr_ag"
						value={datahr_ag}
						onChange={(e) => setDataHrAg(e.target.value)}
					/>

					<label htmlFor="link_ag">Link:</label>
					<input
						type="text"
						id="link_ag"
						value={link_ag}
						onChange={(e) => setLinkAg(e.target.value)}
					/>

					<button type="button" onClick={handleFormSubmit}>
						Criar Agendamento
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default AgendamentoPage;
