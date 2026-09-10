export default {
	// Site metadata
	title: "Tech Blog",
	url: "https://example.com/",
	language: "en",
	description: "A description of this site.",
	tagline: "A tagline for this site.",

	// Author information
	author: {
		name: "Author Name",
		social: {
			github: "",
			bluesky: ""
		}
	},

	// Feed configuration
	feed: {
		subtitle: "A tagline for this site.",
		path: "/feed/feed.xml",
		limit: 10
	},

	// Build configuration
	build: {
		environment: process.env.ELEVENTY_ENV || "development"
	}
}
