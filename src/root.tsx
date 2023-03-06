import { component$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikPartytown } from "./components/partytown/partytown";
import { RouterHead } from "./components/router-head";

import "./global.css";

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
				<QwikPartytown forward={["dataLayer.push"]} />
				<script
					async
					type="text/partytown"
					src="https://www.googletagmanager.com/gtag/js?id=GTM-544M7HL"
				/>

				{/* <script
					type="text/partytown"
					dangerouslySetInnerHTML="(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-544M7HL');"
				/> */}

				<RouterHead />
			</head>
			<body lang="pt-br">
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-544M7HL"
						height="0"
						width="0"
						style="display:none;visibility:hidden"
					></iframe>
				</noscript>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
