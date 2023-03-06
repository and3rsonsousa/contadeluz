import { component$ } from "@builder.io/qwik";
import { SEFI } from "../icons/sefi";

export default component$(() => {
	return (
		<header class="flex max-w-5xl gap-2 items-center md:px-4 mx-auto">
			<div>
				<SEFI className="h-20 text-white" />
			</div>
			<div class="font-bold text-sefi-5">
				É Fácil! É Rápido! É{" "}
				<strong class="font-black text-white">SEFI</strong>.
			</div>
		</header>
	);
});
