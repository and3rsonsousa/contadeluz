import { component$, useStore } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	const store = useStore({ valor: 900, parcela: 18, dono: false });

	return (
		<>
			<div class={`max-w-7xl mx-auto p-8`}>
				<div class="hero">
					<div class={`flex justify-between`}>
						<div class="py-16">
							<h5 class="uppercase font-bold tracking-wider text-sefi-5">
								empréstimo na conta de luz
							</h5>
							<h1 class="text-5xl lg:text-6xl leading-none font-extrabold text-neutral-0">
								Dinheiro <span class="text-yellow">rápido</span>
								!
								<br />{" "}
								<span class="text-yellow">
									Sem comprovar
								</span>{" "}
								renda. <br /> 100% digital e{" "}
								<span class="text-yellow">seguro</span>.
							</h1>
						</div>
						<div>Imagem</div>
					</div>
				</div>
			</div>
			<div class="px-8">
				<div class={`bg-neutral-1 p-8 rounded-3xl max-w-5xl mx-auto`}>
					{/* Valor */}
					<div>
						<h4
							class={`mb-4 text-lg font-bold uppercase tracking-wider text-center text-neutral-4`}
						>
							Quanto você precisa?
						</h4>
						<div class="buttons">
							{[500, 700, 900, 1200, 1500].map((item) => (
								<div class="button-label">
									<input
										id={`valor-${item}`}
										type="radio"
										name="valor"
										value={item}
										checked={store.valor === item}
										onClick$={() => (store.valor = item)}
									/>
									<label for={`valor-${item}`}>
										R${item}
									</label>
								</div>
							))}
						</div>
					</div>
					<hr class="my-8 border-t-neutral-2" />
					{/* Parcelas */}
					<div>
						<h4
							class={`mb-4 text-lg font-bold uppercase tracking-wider text-center text-neutral-4`}
						>
							Em quantas parcelas você prefere pagar?
						</h4>
						<div class="buttons">
							{[12, 14, 16, 18, 20].map((item) => (
								<div class="button-label">
									<input
										id={`parcela-${item}`}
										type="radio"
										name="parcela"
										value={item}
										checked={store.parcela === item}
										onClick$={() => (store.parcela = item)}
									/>
									<label for={`parcela-${item}`}>
										{item}x
									</label>
								</div>
							))}
						</div>
					</div>
					<hr class="my-8 border-t-neutral-2" />
					<div class="flex justify-between">
						<div>
							<div class="text-5xl font-black text-sefi">
								R${store.valor}
							</div>
							<div class="flex gap-1 justify-end">
								<div class="font-bold text-neutral-3 text-2xl">
									EM
								</div>
								<div class="text-4xl font-black text-sefi-4">
									{store.parcela}X
								</div>
							</div>
						</div>
						<div class="text-right">
							<div class="flex items-center gap-2 mb-2">
								<div
									class={`checkbox ${
										store.dono
											? "bg-green text-neutral-1"
											: "bg-neutral-2"
									}`}
								>
									{store.dono && (
										<svg
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7 12L9.89075 14.8907V14.8907C9.95114 14.951 10.049 14.9511 10.1094 14.8907V14.8907L17 8"
												stroke="currentColor"
												stroke-width="3"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									)}
								</div>
								<label
									for="dono"
									onClick$={() => (store.dono = !store.dono)}
									class={`cursor-pointer ${
										!store.dono ? "text-red" : ""
									}`}
								>
									Confirmo que sou o titular da conta de
									Energia.
								</label>
							</div>
							<div>
								<button class="px-8 py-5 rounded-xl inline-flex font-black text-2xl bg-yellow text-sefi-4 hover:bg-green transition hover:text-neutral-1">
									Solicitar Empréstimo
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="max-w-5xl mx-auto md:grid grid-cols-2 p-8">
				<div>
					<h3 class="font-bold text-neutral-1 text-3xl mb-4">
						Já ouviu falar na{" "}
						<span class="text-yellow font-black">SEFI</span>?
					</h3>
					<div class="text-sefi-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laboriosam modi voluptas soluta laborum quidem repellat
						esse laudantium voluptatem iure natus dignissimos
						nostrum, necessitatibus dicta, maiores, aperiam nihil
						minus at fugiat?
					</div>
				</div>
				<div></div>
			</div>
			<div class="mx-auto py-8">
				<h2 class="font-extrabold tracking-tighter text-5xl text-neutral-1 max-w-2xl mx-auto mb-4 text-center">
					Ainda está em dúvida sobre fazer o seu empréstimo?
				</h2>
				<div class="flex gap-8">
					<div class="text-2xl w-1/2 text-sefi-5 font-medium text-right">
						Fale com uma de nossas consultoras <br /> no WhatsApp e
						tire toda sas suas dúvidas.
					</div>
				</div>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Empréstimo na conta de Luz - Rápido e Fácil - SEFI Crédito",
	meta: [
		{
			name: "description",
			content:
				"Faça seu empréstimo na Conta de luz de forma rápida e sem burocracia.",
		},
	],
};
