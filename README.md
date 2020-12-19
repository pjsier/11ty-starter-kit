# 11ty-starter-kit

[![Build status](https://github.com/pjsier/11ty-starter-kit/workflows/CICD/badge.svg)](https://github.com/pjsier/11ty-starter-kit/actions?query=workflow%3ACICD)

Minimal starter project for [11ty](https://11ty.dev/) designed for basic static sites with some interactive content.

This is based on some boilerplate setup I was copying between projects like [ilfair.tax](https://ilfair.tax/en/) and this [field guide to Chicago government](https://field-guides-prod.citybureau.org/en/).

## Features

- [TailwindCSS](https://tailwindcss.com/) for styles
- [Rollup](https://rollupjs.org/guide/en/) for bundling JS for modern browsers using `<script type="module">`
- [Webpack](https://webpack.js.org/) for creating a bundle only served to legacy browsers like IE 11 through `<script nomodule>`
- Minifies assets and includes them in inline tags
- Basic templates in [nunjucks](https://mozilla.github.io/nunjucks/), but also supports 11ty.js templates with an `html` tagged template literal for better editor support
- Some reasonable defaults for Markdown, including opening external links in new tabs
- Sets standard metadata tags and sitemap.xml
- GitHub Actions deploy workflow

## Get started

You can set up a project with this starter kit by clicking the "Use this template" button on this repo. Once you've created your project, you can get started with these steps.

1. Clone your new repository (replace the URL with your repo)

   ```
   git clone https://github.com/<USERNAME>/<PROJECT>.git
   ```

2. Move to the new project directory and install dependencies

   ```
   cd <PROJECT>
   npm install
   ```

3. Start a local server to see if everything is working. You should be able to access your site at [http://localhost:8080/](http://localhost:8080/)

   ```
   npm start
   ```

4. Change the project metadata in [`./site/_data/site.js`](./site/_data/site.js)
