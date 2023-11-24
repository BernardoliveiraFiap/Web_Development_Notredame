import { useState, useEffect } from 'react';
import styles from '@/styles/schedule/schedule.module.scss';
import api from '@/api/axios';

const CadastroForm = ({ selectedRow, onUpdateComplete }: any) => {
	const [nm_cd, setNome] = useState('');
	const [email_cd, setEmail] = useState('');
	const [senha_cd, setSenha] = useState('');
	const [fone_cd, setTelefone] = useState('');

	useEffect(() => {
		if (selectedRow) {
			setNome(selectedRow.nm_cd || '');
			setEmail(selectedRow.email_cd || '');
			setSenha(selectedRow.senha_cd || '');
			setTelefone(selectedRow.fone_cd || '');
		}
	}, [selectedRow]);

	const handleUpdate = async () => {
		try {
			await api.put(`/cadastro/${selectedRow.id_cd}`, {
				id_cd: selectedRow.id_cd,
				nm_cd,
				email_cd,
				senha_cd,
				fone_cd,
			});
			alert('Usuário atualizado!');
			onUpdateComplete();
		} catch (err: any) {
			alert('Erro atualizando o usuário:' + err);
		}
	};

	return (
		<div className={styles.agendamentoContainer}>
			<h1>Editar Cadastro</h1>
			<form className={styles.form}>
				<label htmlFor="nome">Nome:</label>
				<input
					type="text"
					id="nome"
					value={nm_cd}
					onChange={(e) => setNome(e.target.value)}
				/>

				<label htmlFor="email">Email:</label>
				<input
					type="text"
					id="email"
					value={email_cd}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label htmlFor="senha">Senha:</label>
				<input
					type="text"
					id="senha"
					value={senha_cd}
					onChange={(e) => setSenha(e.target.value)}
				/>

				<label htmlFor="telefone">Telefone:</label>
				<input
					type="text"
					id="telefone"
					value={fone_cd}
					onChange={(e) => setTelefone(e.target.value)}
				/>

				<button type="button" onClick={handleUpdate}>
					Atualizar Cadastro
				</button>
			</form>
		</div>
	);
};

export default CadastroForm;
