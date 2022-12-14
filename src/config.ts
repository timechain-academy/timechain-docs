export const SITE = {
	title: 'Timechain Library',
	description: '₿itcoin and ⚡️ Lightning Turbo Charged Space',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: '/public/timechain-logo.png',
		alt:
			'timechain academy logo,' +
			' with a gold lightning bolt inside a lightbulb and an electric purple background',
	},
	twitter: '',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/timechain-academy/timechain-docs/tree/main`;

export const COMMUNITY_INVITE_URL = `https://timechain.academy`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;


export const SIDEBAR: Sidebar = {
	en: {
		'Start here': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Markdown Syntax', link: 'en/markdown'},
		],
		'Bitcoin': [
			{ text: 'Introduction', link: 'en/bitcoin/intro' },
		],
		'Lightning': [
			{ text: 'Introduction', link: 'en/lightning/intro' },
		],
		'Dev Tools' : [
			{ text: 'Introduction', link: 'en/devtools/intro' }
		]
	},
};
