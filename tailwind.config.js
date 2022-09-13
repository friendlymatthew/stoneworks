module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			backgroundImage: {
				my_bg: "url('../public/stars.jpg')",
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		styled: true,
		themes: true,
		rtl: false,
	},
};
