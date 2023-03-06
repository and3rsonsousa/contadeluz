import { component$ } from "@builder.io/qwik";
import { SEFI } from "./sefi";

export default component$(() => {
	return (
		<footer class="bg-sefi-5 text-sefi-3">
			<div class="flex items-center flex-col sm:flex-row gap-4 max-w-7xl p-4 md:p-8 text-center">
				<div class="w-full">
					<h4 class="text-xl font-extrabold text-sefi-1">
						SEFI Crédito
					</h4>
					<p class="text-xs">
						CNPJ - 31.852.178/0001-94 <br />
						Rua Menino de Deus, 760
						<br />
						Sala 303, Centro - Sobral/Ceará
					</p>
				</div>
				<div class="leading-tight w-full">
					<SEFI className="h-12 mx-auto" />
					<div class="text-xs">
						© {new Date().getFullYear()} Todos os direitos
						reservados <br />
						All rights reserved
					</div>
				</div>
			</div>
		</footer>
	);
});
