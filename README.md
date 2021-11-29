# Hello Gatsby Starter

![screenshot](https://github.com/hellotham/hello-gatsby-starter/raw/master/src/images/screenshot.png)

This is starter template for a full featured marketing and blog website based on the following:

- [Gatsby Starter Default](https://github.com/gatsbyjs/gatsby-starter-default)
- [How To Set Up a Gatsby Project with TypeScript](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-gatsby-project-with-typescript)
- [Gatsby](https://gatsbyjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com) and [TailwindUI](https://tailwindui.com)
- [HeroIcons](https://heroicons.com/)
- [Hero Patterns](https://heropatterns.com/)
- [HeadlessUI](https://headlessui.dev/)
- [unDraw](https://undraw.co/) for illustrations
- [MDX](https://mdxjs.com/) and [Markdown](https://www.markdownguide.org/)
- [ESLint](https://eslint.org)for type-checking
- [SendGrid](https://sendgrid.com/) email delivery
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and is deployed on Gatsby Cloud.

This website is open source (0BSD licence) - fork it and customise for your needs.

## Features

- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- Tags index page and individual tag pages
- Pagination in posts and tag pages
- Support for RSS feed, sitemap and robots.txt
- Automatic optimization of images in Markdown/MDX posts
- SVG design (unDraw, Hero Patterns, HeroIcons)
- Support for code syntax highlighting
- Manifest and offline support
- Contact form using sendgrid email and Gatsby functions
- Full SEO support (via React Helmet) including Open Graph, Twitter Cards and Schema.org via JSON-LD

## How to use the starter

1. Clone your own version of the starter template or fork the repository. Run `yarn` then `yarn build` or `yarn develop`.
2. The default colour scheme is purple to match the Gatsby logo. Change to your preferred hue by doing a global search and replace of '-purple-' to your favourite colour.
3. The home (landing) page consists of a number of components (Hero, Feature, CTA, ...) - edit these components in `src/components` to customise.
4. The `/contact` page displays an OpenStreetMaps map via Leaflet - customise by changing to your preferred set of coordinates.
5. `gatsby-config.js` has all the site parameters - edit site metadata to suit.
6. Create new MDX pages in `src/mdx` (using either `.md` or `.mdx` extension). Add React components to MDX in the `src/pages/{mdx.slug}.tsx` file.
7. Any content created in the `src/mdx/blog` subdirectory will automatically be a blog post. Use `src/mdx/post/2000-01-01-template.md` as a base for creating a new blog post.
8. If you create a new tag (eg. `newtag`) a new tag page will be created ie. `/tags/newtag`. The `/tags` page will enumerate all tags.
9. If you want to change the navigation menu, edit `src/components/header.tsx`. Similarly, edit `src/components/footer.tsx` to customise the footer.
10. If you make a lot of changes, use `yarn lint` and `yarn type-check` to check everything is okay.

## SendGrid configuration (for contact form)

Insert the following environment variables (either in .env or on deployment host):

- `SENDGRID_API_KEY`
- `SENDGRID_AUTHORIZED_EMAIL`
