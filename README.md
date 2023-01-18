This is a repo used to demo and test the MaC workflow using the [Checkly CLI](https://github.com/checkly/checkly-cli). 
It is based on a simple Nextjs getting started template.

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
│         ├── alert-channels.js
|         ├── api
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

## Running the project locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
