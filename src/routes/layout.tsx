import { component$, Slot } from "@builder.io/qwik";

import Header from "../components/header/header";

export default component$(() => {
	return (
		<>
			<main class={`bg-sefi min-h-screen`}>
				<Header />
				<section>
					<Slot />
				</section>
			</main>
		</>
	);
});