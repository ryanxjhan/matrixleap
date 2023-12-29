import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export const get = async () => {
	const posts = await getCollection("ourwork", ({ data }) => {
		return !data.draft && data.publishDate < new Date();
	});

	// Sort content entries by publication date
	posts.sort(function (a, b) {
		return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
	});

	return rss({
		title: `Matrix Leap`,
		description: "Matrix Leap - Accelerated Deep Tech Solutions on Autopilot",
		site: import.meta.env.SITE,

		items: posts.map((post) => ({
			link: post.slug,
			title: post.data.title,
			description: post.data.snippet,
			pubDate: post.data.publishDate,
		})),
	});
};
