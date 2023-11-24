'use client';

import '@/styles/globals.scss';
import stylesFooter from '@/styles/footer/footer.module.scss';

export default function Footer() {
	return (
		<footer className={stylesFooter.footer}>
			<div className={stylesFooter.members}>
				<div className={stylesFooter.member}>
					• Matheus Colossal Araujo <b>99572 (Java, Responsive)</b>
				</div>
				<div className={stylesFooter.member}>
					• Enzo Oliveira <b>551356 (IA, Responsive)</b>
				</div>
				<div className={stylesFooter.member}>
					• Macirander <b>551416 (BD, Responsive)</b>
				</div>
				<div className={stylesFooter.member}>
					• Joao Vitor <b>550381 (Python, Responsive)</b>
				</div>
				<div className={stylesFooter.member}>
					• Denise Nascimento <b>550511 (SDTX, Responsive)</b>
				</div>
			</div>
		</footer>
	);
}
