This is a repo used to demo and test the Monitoring-as-Code (MaC) workflow using the [Checkly CLI](https://github.com/checkly/checkly-cli). 
It is based on a simple Nextjs getting started template.

Checkly's MaC workflow brings:

- Synthetic monitoring checks for E2E and API endpoints defined in your code base.
- A local, JS/TS workflow: no more click ops, no more HCL, no more YAML.
- Use `@playwright/test` to test your webapp around the clock and at deploy time.
- Branch aware, working perfectly with GitHub|Lab and Preview deployments.

# Project structure

The project structure in this repo follows the approach where:

1. The basic `checkly.config.js` file is at the root of the repo. This is required. 
2. Common defaults and shared resources like `alert-channels.js` are in the `__checks__` directory at the root.
3. One Playwright-based Browser Check is also in the `__checks__` directory at the root.
4. Other checks are nested according to the `pages` or `api` the test in the Next.js code base. 


All of the above are just conventions. You can change any of the paths, file names as you please. [See our docs on project
structure](https://github.com/checkly/checkly-cli#project-structure) to get all the details.

```
.
├── checkly.config.js
├── __checks__
│   ├── alert-channels.js
│   ├── api
│   │   ├── api.check.js
│   │   ├── setup.js
│   │   └── teardown.js
│   ├── defaults.js
│   ├── home.check.js
│   ├── home.spec.js
│   └── pages
│       ├── about.spec.js
│       └── product.spec.js
```

## Running the checks

You can clone this repo and run the check for yourself. Start with a 

```bash
git clone https://github.com/checkly/mac-demo-repo.git
cd mac-demo-repo
npm install
```

1. Make sure you have signed up for a free Checkly account over at https://www.checklyhq.com/
2. Log in to your Checkly account with the CLI with `npx checkly login`
3. With the project structure above, run the `npx checkly test` command and you will get an output similar to:

```
npx checkly test

Running 5 checks in eu-central-1.

__checks__/api/api.check.js
  ✔ Hello API (187ms)
  ✔ Product API (208ms)
__checks__/home.check.js
  ✔ HomePage (5s)
__checks__/pages/about.spec.js
  ✔ about.spec.js (6s)
__checks__/pages/product.spec.js
  ✔ product.spec.js (5s)

5 passed, 5 total
```

To deploy these checks to your Checkly account, just run:

```
npx checkly deploy
```

You now have a set of synthetic monitoring checks running around the clock.

If you clone this repo and deploy it to Vercel or another provider, make sure to update the `pageUrl` variable in the 
`__checks__/defaults.js` file to your own domain.

## Usage in CI

Preferably, you lifecycle your checks with your codebase, smoke test them with `npx checkly test` and deploy them to Checkly
only when your checks are solid. The file `.github/workflows/checkly.yaml` shows how you can do this with GitHub Actions.

However, this pattern is adaptable to any CI system. The crux is:

1. Wait for a deploy to a Staging / Preview or Production environment to finish.
2. Run the `npx checkly test` command.
3. If it passes, run `npx checkly deploy`, if not abort.

## Building the project

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
