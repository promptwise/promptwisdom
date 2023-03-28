# Promptwisdom

This repository hosts our collection of blog posts in Markdown format, covering various topics related to our company, industry trends, technical insights, and other interesting subjects. Our goal is to share valuable knowledge, best practices, and insights with our team members, clients, and the broader community.

## Getting Started

To view a blog post, simply navigate to the posts directory and open the Markdown file for the desired post.

## Repository Structure
```
.
├── README.md       <-- this file!
└── guides          <-- directory containing guide and walkthrough posts as Markdown files
    ├── how-to-do-thing.md
    ├── a-quick-primer-on-blah.md
    └── ...
└── posts           <-- directory containing blog posts as Markdown files (should not contain guides--this should be more discussional and announcements)
    ├── YYYY-MM-DD_post-title.md
    ├── YYYY-MM-DD_another-post-title.md
    └── ...
└── releases        <-- directory containing release notes as Markdown files
    ├── YYYY-MM-DD_v1.md
    ├── YYYY-MM-DD_v1-0-3-patch.md
    └── ...
├── package.json
├── yarn.lock
└── scripts         <-- scripts that power our yarn commands and shortcuts
    └── ...
```

## Contributing

We encourage our team members to contribute blog posts to this repository. To make the process easier, we have set up a few Yarn commands to help you create new content.

### Prerequisites

Make sure you have the repository pulled down locally and that you have Yarn installed on your system. If you don't have it installed, you can download it from [https://yarnpkg.com/](https://yarnpkg.com/).

### Creating a New Guide

To create a new guide, run the following command:
```bash
yarn new-guide "The title of your guide"
```

This will create a new Markdown file in the `guides` directory with the specified title and today's date. Start writing your guide in the new file.


## Creating a New Blog Post

To create a new blog post, run the following command:
```bash
yarn new-post "Title of Your Blog Post"
```

This will create a new Markdown file in the `posts` directory with the specified title and today's date. Start writing your blog post in the new file.

## Creating a New Release Note

To create new release notes, run the following command:
```bash
yarn new-release v1.0.2-whatever
```

This will create a new Markdown file in the `releases` directory with the specified version number and today's date. Fill in the release notes in detail, such as features, bug fixes, and improvements.

## Committing Your Changes

After using one of the above commands, the script will automatically add, commit, and push the new file to the repository. You can then create a pull request for your changes.

## Code of Conduct

We value an open and inclusive environment. All contributors are expected to adhere to our Code of Conduct, which outlines our expectations for respectful and constructive behavior.

## License

This repository is licensed under the MIT License.
