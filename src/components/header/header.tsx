'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from '@/styles/header/header.module.scss';
import { FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
	const pathname = usePathname();
	const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
	const router = useRouter();

	const handleLogout = () => {
		localStorage.removeItem('isAuthenticated');
		router.push('/');
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo}>Projeto 100 - GS</div>
			<nav className={styles.nav}>
				{isAuthenticated ? (
					<>
						<Link
							href="/home"
							passHref
							className={pathname === '/home' ? styles.active : ''}
						>
							Home
						</Link>
						<Link
							href="/specialists"
							passHref
							className={pathname === '/specialists' ? styles.active : ''}
						>
							Especialistas/Agendamento
						</Link>
						<Link
							href="/users"
							passHref
							className={pathname === '/users' ? styles.active : ''}
						>
							Usuários
						</Link>
						<Link
							href="/schedule"
							passHref
							className={pathname === '/schedule' ? styles.active : ''}
						>
							Criar agendamento
						</Link>
						<Link
							href="/about"
							passHref
							className={pathname === '/about' ? styles.active : ''}
						>
							Sobre nós
						</Link>

						<button className={styles.logoutButton} onClick={handleLogout}>
							<FaSignOutAlt className={styles.logoutIcon} />
							Sair
						</button>
					</>
				) : (
					<>
						<Link href="/" className={pathname === '/' ? styles.active : ''}>
							Login
						</Link>
						<Link
							href="/register"
							passHref
							className={pathname === '/register' ? styles.active : ''}
						>
							Cadastro
						</Link>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
