---
title: 'Plugin Documentation'
id: docs
sidebar_position: 2
---

# Setting up Plugin documentation

We seperate all documentation into two main categories: `developer` and `user`. The `developer` docs are comprised of guides and references for developers who are contributing to the core or developing plugins. The `user` documentation is reference material to help end users understand how to use the features we are building.

Every plugin should be shipped with at least developer documentation, and ideally user documentation as well if the plugin is user facing. Here we are going to walk through how to set up documentation for a plugin that has both developer and user documentation.

## File structure

We suggest that you maintain all documentation within a `docs` folder in the root of your plugin. This will allow us to easily find and link to your documentation from the main docs site. Within the `docs` folder, this documentation is further broken down into `developer` and `user` directories as necessary. An simplified example of this file structure is shown below:

```
├── example-plugin
│   ├── docs
│   │   ├── developer
│   │   │   ├── ...
│   │   ├── user
│   │   │   ├── ...
│   ├── ...
```

## Home page

Every plugin should have a markdown file at the root of the `developer` directory that gives an overview of the plugin similar to a `README.md` file.

```bash
...
├── developer
# highlight-start
│   ├── index.md
# highlight-end
```

For ease of configuration, we recommend that you name this file `index.md`, but it is possible to name it something else if you take advantage of the `slug` field in the `frontmatter` of the file (more on this later).

## Categories

Throughout our documentation, we use three general categories to organize most content: `setup`, `reference/concepts`, and `guides/tutorials`. These may not be the best categories for your plugin, but we recommend that you use them as a starting point and adjust as necessary.

## Organization

Since we are using Docusaurus to build our documentation, the file structure of your docs is important in order to ensure that everything is built correctly. While it is up to you how you want to structure your documentation, we recommend that you follow a similar structure as the main docs site to create a consistent experience for users and developers.

Let's expand on the example file structure from above to see how we might organize our documentation for a plugin by creating some new files within the `developer` directory:

```bash
├── developer
│   ├── index.md
# highlight-start
│   ├── concepts
│   │   ├── concept-1.md
│   │   ├── concept-2.md
│   │   ├── _category_.json
│   ├── guides
│   │   ├── guide-1
│   │   │   ├── guide-1-a.md
│   │   │   ├── guide-1-b.md
│   │   ├── guide-2
│   │   │   ├── ...
│   │   ├── _category_.json
# highlight-end
```

We take advantage of few features of Docusaurus to help organize our documentation: a `frontmatter` in each markdown file, and a `_category_.json` file in directories that have a more complex structure.

### Frontmatter

The frontmatter of each markdown file is used to provide a variety of metadata about a page to Docusaurus. The main fields we use are `title`, `id`, and `slug`; as well as `sidebar_poition` as an alternative to using a `_category_.json` file. A full list of available fields can be found in the [Docusaurus documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-frontmatter). None of these are required, but can be helpful in certain situations.

For ex

### `_category_.json`

The `_category_.json` file is used to organize the sidebar of the docs site. It is a simple JSON file that contains a list of all the files in the directory, and the order in which they should be displayed in the sidebar along with some other metadata. An example of this file is shown below:

```json
{
  "label": "Developer",
  "position": 1,
  "items": [
    {
      "label": "Getting Started",
      "type": "category",
      "items": [
        ...
        ]
    },
  ]
}
```
