# Contributing to Will Craft Software

First off, thank you for considering contributing to Will Craft Software! It's
people like you that make this community amazing.

## 📌 Impostor Syndrome Disclaimer

Before we get started, we want to address something important:

**We want your help. Yes, you. The person reading this right now.**

There's no such thing as a contribution that's too small:

- Found a typo? Send a PR!
- Noticed a broken link? Let us know!
- Have an idea for an event? Open an issue!
- Want to improve documentation? Go for it!

Everyone was a beginner at some point. If you're unsure about anything, just ask
– we're here to help, not to judge. The worst that can happen is we'll politely
guide you to make your contribution even better.

## 🤝 Code of Conduct

### Our Pledge

We pledge to make participation in our project and community a harassment-free
experience for everyone, regardless of age, body size, disability, ethnicity,
gender identity and expression, level of experience, education, socio-economic
status, nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to a positive environment:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior:

- The use of sexualized language or imagery
- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

## 🚀 Getting Started

### Prerequisites

- [Deno](https://deno.land/) installed on your machine
- Git for version control
- A text editor (we recommend VS Code with Deno extension)
- Basic knowledge of HTML, CSS, and JavaScript/TypeScript

### Setting Up Your Development Environment

1. **Fork the repository**

   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/wewillcraft.github.io.git
   cd wewillcraft.github.io
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/wewillcraft/wewillcraft.github.io.git
   ```

4. **Install dependencies and run locally**
   ```bash
   deno task serve
   ```
   Your site should now be running at `http://localhost:3000`

## 📝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.
When creating a bug report, include:

- A clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior
- Screenshots (if applicable)
- Your environment (OS, browser, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an
enhancement suggestion, include:

- A clear and descriptive title
- Step-by-step description of the suggested enhancement
- Explanation of why this enhancement would be useful
- Possible implementation approach (if you have ideas)

### Adding Events

To add a new event to our calendar:

1. Edit `/events/index.yml`
2. Add your event following this format:

   ```yaml
   - name: "Event Name"
     start_date: 2025-03-15 # YYYY-MM-DD format
     end_date: 2025-03-16 # Optional for multi-day events
     city: "Manila City"
     website: "https://event-website.com"
     by: "org-id" # Must match an organization ID
   ```

3. If adding a new organization, update the organizations list in the same file

### Writing Blog Posts

1. Create a new markdown file in `/posts/` directory
2. Name it with the format: `YYYY-MM-DD-post-title.md`
3. Add frontmatter:

   ```markdown
   ---
   title: Your Post Title
   date: 2025-01-15
   tags:
     - community
     - technology
   excerpt: A brief description of your post
   ---

   Your content here...
   ```

### Working on the 100-Day Journey Content

The `/journey/` directory contains our educational content. Each week has:

- A main content file
- A CLAUDE.md file with guidelines

When contributing to journey content:

1. Follow the style guide in the respective CLAUDE.md file
2. Keep content beginner-friendly
3. Include practical examples
4. Aim for 20-30 minute read time

## 💻 Development Workflow

### Branch Naming

- `feat/` - New features (e.g., `feat/add-workshop-section`)
- `fix/` - Bug fixes (e.g., `fix/mobile-navigation`)
- `docs/` - Documentation changes (e.g., `docs/update-readme`)
- `style/` - CSS/formatting changes (e.g., `style/improve-card-layout`)
- `refactor/` - Code refactoring (e.g., `refactor/simplify-event-logic`)
- `test/` - Adding tests (e.g., `test/add-event-validation`)
- `chore/` - Maintenance tasks (e.g., `chore/update-dependencies`)

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear
commit history:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Formatting, missing semicolons, etc.
- `refactor:` - Code change that neither fixes a bug nor adds a feature
- `test:` - Adding missing tests
- `chore:` - Maintain

**Examples:**

```bash
feat(events): add filtering by organization
fix(calendar): correct date formatting for multi-day events
docs: update contribution guidelines
style: format events page with prettier
```

### Pull Request Process

1. **Keep your fork updated**

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feat/your-feature-name
   ```

3. **Make your changes**

   - Write clear, readable code
   - Follow existing code style
   - Add comments where necessary
   - Update documentation if needed

4. **Test your changes**

   ```bash
   deno task build  # Build the site
   deno task serve  # Test locally
   ```

5. **Format your code**

   ```bash
   dprint fmt
   ```

6. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

7. **Push to your fork**

   ```bash
   git push origin feat/your-feature-name
   ```

8. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template
   - Link any related issues

### PR Review Process

- PRs require at least one review before merging
- Address reviewer feedback constructively
- Keep PRs focused - one feature/fix per PR
- Update your PR rather than creating a new one
- Be patient - reviewers are volunteers too!

## 🎨 Style Guidelines

### Code Style

- Use 2 spaces for indentation
- Use meaningful variable names
- Keep functions small and focused
- Add JSDoc comments for complex functions
- Follow existing patterns in the codebase

### CSS/Tailwind

- Use Tailwind utility classes when possible
- Keep custom CSS minimal
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing

### Content Style

- Write in a friendly, inclusive tone
- Use "we" and "you" to be conversational
- Keep paragraphs short and scannable
- Use headings to organize content
- Include examples and practical applications

## 📚 Resources

### Learning Resources

- [Deno Documentation](https://deno.land/manual)
- [Lume Documentation](https://lume.land)
- [Vento Template Engine](https://vento.js.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Conventional Commits](https://www.conventionalcommits.org)

### Getting Help

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas
- Join our community events to meet contributors
- Check existing issues and PRs for similar topics

## 🎯 Areas We Need Help

Currently looking for help with:

- Adding more tech events to the calendar
- Writing blog posts about community experiences
- Improving mobile responsiveness
- Adding more educational content to /journey/
- Translating content to Filipino
- Creating graphics and illustrations
- Improving accessibility (ARIA labels, keyboard navigation)
- Writing tests
- Documentation improvements

## 🙏 Recognition

Contributors will be:

- Listed in our Contributors section
- Mentioned in release notes
- Invited to contributor-only events
- Given credit in social media posts

## 📮 Contact

- GitHub Issues: For bugs and features
- GitHub Discussions: For questions and ideas
- Email: [Add contact email if available]
- Social Media: [Add social links if available]

## 📜 License

By contributing, you agree that your contributions will be licensed under the
same license as the project (check LICENSE file).

---

**Remember:** The best way to learn is by doing. Don't be afraid to make
mistakes – that's how we all learn and grow. We're excited to see what you'll
contribute!

Thank you for being part of Will Craft Software! 🚀
