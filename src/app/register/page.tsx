'use client';

import { v4 as uuidv4 } from 'uuid';
import styles from '@/styles/Login/Login.module.scss';
import { useRouter } from 'next/navigation';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import api from '@/api/axios';
import { useState, useEffect } from 'react';

export default function RegisterPage() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [error, setError] = useState(null);

	async function handleLogin() {
		try {
			const response = await api.post('/cadastro', {
				id_cd: uuidv4(),
				nm_cd: name,
				email_cd: email,
				senha_cd: password,
				fone_cd: phone,
			});
			if (response.status == 201) {
				alert('Cadastro efetuado, faça seu login!');
				router.push('/home');
			}
		} catch (err: any) {
			alert('Erro ao cadastrar!');
			setError(err.response ? err.response.data : err.message);
		}
	}

	return (
		<>
			<Header />
			<div className={styles.loginContainer}>
				<form className={styles.form}>
					<h3>Faça seu cadastro!</h3>

					<label htmlFor="email">E-mail</label>
					<input
						type="text"
						placeholder="Insira seu e-mail"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="password">Senha</label>
					<input
						type="password"
						placeholder="Insira sua senha"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<label htmlFor="name">Nome</label>
					<input
						type="text"
						placeholder="Insira seu nome"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<label htmlFor="phone">Telefone</label>
					<input
						type="text"
						placeholder="Insira seu telefone"
						id="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>

					<button type="button" onClick={handleLogin}>
						Entrar
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
}
