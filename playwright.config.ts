import { firefox, type PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	reporter: 'html',
	projects: [
		{
			name: 'firefox',
			use: {
				browserName: 'firefox'
			},
		},
		{
			name: 'webkit',
			use: {
				browserName: 'webkit'
			}
		},
		{
			name: 'chromium',
			use: {
				browserName: 'chromium'
			}
		}
	]
};

export default config;
