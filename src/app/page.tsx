'use client';

import styles from '@/styles/Login/Login.module.scss';
import { useRouter } from 'next/navigation';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { useState } from 'react';
import api from '@/api/axios';

export default function LoginPage() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin() {
		try {
			const response = await api.post('/login', {
				id_lg: '',
				email_lg: email,
				senha_lg: password,
			});
			if (response.status == 201) {
				alert('Login efetuado!');
				await localStorage.setItem('isAuthenticated', 'true');
				router.push('/home');
			}
		} catch (err: any) {
			alert('Erro ao fazer login!');
		}
	}

	return (
		<>
			<Header />
			<div className={styles.loginContainer}>
				<form className={styles.form}>
					<h3>Bem vindo(a) de volta!</h3>

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

					<button type="button" onClick={handleLogin}>
						Entrar
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
}
