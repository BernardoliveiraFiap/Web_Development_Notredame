'use client';

import styles from '@/styles/about/about.module.scss';
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
							<h1 className={styles.title}>SOBRE NÓS</h1>
							<p className={styles.text}>Nosso objetivo é conectar nossos clientes a bons médicos especialistas, nos quais confiamos. Facilitando assim a qualidade das consultas. Além de ajudar em causas nobres através atos filantrópicos.</p>
							<p className={styles.text}>~ Projetos 100</p>
							<p className={styles.textContact}>projeto100@nrtdmft.com <br /> 0800 055 0055</p>
						</div>
						
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
