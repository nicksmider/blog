# Nick Smider's Dev Blog

Personal blog built with [Astro 5](https://astro.build), [Tailwind CSS 4](https://tailwindcss.com), and deployed to GitHub Pages.

## Dev

```bash
nvm use
pnpm install
pnpm dev
```

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm check` | TypeScript check (astro check) |
| `pnpm lint` | Biome lint + format check |
| `pnpm format` | Biome auto-format |

## Creating Posts with Obsidian

The blog content lives in `src/content/blog/` which can be opened as an Obsidian vault. A post template is available at `src/content/blog/_templates/post.md`.

1. Open `src/content/blog/` as an Obsidian vault
2. Enable the **Templates** core plugin in Settings > Core plugins
3. Set **Template folder location** to `_templates`
4. Create a new `.md` file, then use Command Palette (`Cmd+P`) > "Templates: Insert template" > `post`
5. Fill in the frontmatter fields — `{{date}}` and `{{time}}` are auto-populated by Obsidian
