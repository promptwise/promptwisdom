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

We encourage our team members to contribute blog posts to this repository. Please follow these steps:

1. Clone the repository and create a new branch for your blog post.

```bash
git clone https://github.com/yourusername/promptwisdom.git
cd promptwisdom
git checkout -b your-post-branch
```

2. Create a new Markdown file in the posts directory, following the naming convention YYYY-MM-DD-post-title.md.

3. Write your blog post in the Markdown file, using proper formatting and structuring.

4. Commit your changes and push them to your branch.

```bash
git add posts/YYYY-MM-DD-post-title.md
git commit -m "Add new blog post: Post Title"
git push -u origin your-post-branch
```

5. Open a pull request on GitHub to merge your changes into the main branch. Request a review from a team member or maintainer.

6. Once your pull request is reviewed and approved, it will be merged into the main branch, and your blog post will be visible in the repository.

## Code of Conduct

We value an open and inclusive environment. All contributors are expected to adhere to our Code of Conduct, which outlines our expectations for respectful and constructive behavior.

## License

This repository is licensed under the MIT License.
