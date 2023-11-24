'use client';

import styles from '@/styles/home/home.module.scss';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '@/components/loading/loading';

export default function HomePage() {
	const router = useRouter();
	const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/');
		}
	}, [router, isAuthenticated]);

	return (
		<>
			{isAuthenticated ? (
				<>
					<Header />
					<div className={styles.container}>
						<div className={styles.textContainer}>
							<h2 className={styles.header}>PROJETO 100</h2>
							<h3 className={styles.headerSmall}>GLOBAL SOLUTIONS</h3>
							<p className={styles.text}>
								O projeto visa conectar clientes a médicos especialistas
								confiáveis via um site de acesso após login. Nele, os clientes
								encontram os contatos dos médicos para agendar consultas
								externamente, junto a informações de agendamento e links de web
								conferência. Além disso, a iniciativa inclui uma seção para
								arrecadar fundos, obtidos por doações dos clientes e empresas,
								além da venda de camisetas beneficentes. O site também destaca
								empresas beneficentes e apresenta uma seção de camisetas com
								tabela de tamanhos, possibilitando a compra via contato no
								WhatsApp. Funcionários atuam no atendimento do WhatsApp para a
								venda das camisetas, mas não possuem informações diretas no
								site.
							</p>
						</div>
						<Image
							src="/img/logo.png"
							width={478}
							height={252}
							alt="Logo do site"
						/>
					</div>
					<Footer />
				</>
			) : (
				<>
					<Loading />
				</>
			)}
		</>
	);
}
