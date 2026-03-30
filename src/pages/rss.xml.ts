import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '@/config';

export async function GET(context: APIContext) {
	const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.date.getTime() - a.data.date.getTime(),
	);

	return rss({
		title: SITE.title,
		description: SITE.description,
		// biome-ignore lint/style/noNonNullAssertion: site is always defined when set in astro.config.mjs
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: post.data.summary,
			link: `/blog/${post.id.replace(/\.(md|mdx)$/, '')}/`,
		})),
	});
}
