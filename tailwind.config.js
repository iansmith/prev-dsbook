const typography = require('@tailwindcss/typography');
const daisyui = require('daisyui')

module.exports = {
	content: [
		"content/public/**/*.html",
		"content/assets/css/ds.css",
		'./hugo_stats.json'
	],
	plugins: [typography, daisyui ],
	theme:{
		extend:{
			fontFamily:{
				brandfont:[ "Orbitron",...defaultTheme.fontFamily.sans]
			}
		}
	}
	
	daisyui:{
		themes: ["autumn", "dark", "light"]
	}
};
