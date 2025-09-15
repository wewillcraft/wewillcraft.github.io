# wewillcraft.github.io

The source code for [We Will Craft](https://wewillcraft.org)'s website. Made
using [Lume](https://lume.land), a static site generator for Deno.

## 🚀 Quick Start

### Prerequisites

- [Deno](https://deno.land/) installed on your machine
- Git for version control

### Running Locally

```bash
# Clone the repository
git clone https://github.com/wewillcraft/wewillcraft.github.io.git
cd wewillcraft.github.io

# Start local development server with hot reload
deno task serve

# Or launch the CMS interface for content management
deno task cms

# Build the static site
deno task build
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
wewillcraft.github.io/
├── _includes/          # Templates and layouts
│   ├── layouts/        # Page layouts (base, post, landing, etc.)
│   └── templates/      # Reusable components
├── posts/              # Blog posts in Markdown
├── journey/            # 100-Day Journey educational content
├── events/             # Events calendar data
├── static/             # Static assets (copied directly to build)
├── _config.ts          # Lume configuration
```

## 🤝 Contributing

**We want your help!** Yes, you. Every contribution matters.

### Quick Links

- 📖 **[Full Contributing Guide](CONTRIBUTING.md)** - Detailed guidelines
- 💬 **[Code of Conduct](CONTRIBUTING.md#-code-of-conduct)** - Community
  standards
- 🎯 **[Areas We Need Help](CONTRIBUTING.md#-areas-we-need-help)** - Where to
  start
- 🌟 **[Getting Involved](getting-involved.md)** - Different ways to contribute

### Ways to Contribute

- **🐛 Report bugs** - Found something broken? Let us know!
- **✨ Suggest features** - Have an idea? Open an issue!
- **📝 Improve documentation** - Help others understand better
- **💻 Write code** - Fix bugs or add features
- **📅 Add events** - Know about tech events? Add them to our calendar
- **✍️ Write blog posts** - Share your experiences and knowledge
- **🎨 Design** - Help with UI/UX improvements
- **🌐 Translate** - Help us reach more people

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat(events): add calendar filtering
fix: correct date formatting
docs: update README
style: format with dprint
refactor: simplify event logic
test: add event validation
chore: update dependencies
```

### Getting Started

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Make your changes
4. Format code (`dprint fmt`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to your fork (`git push origin feat/amazing-feature`)
7. Open a Pull Request

## 📌 Impostor Syndrome Disclaimer

**We want your help. No, really.**

There may be a little voice inside your head that is telling you that you're not
ready to be an open source contributor; that your skills aren't nearly good
enough to contribute. What could you possibly offer a project like this one?

We assure you - the little voice in your head is wrong. If you can write code at
all, you can contribute code to open source. Contributing to open source
projects is a fantastic way to advance one's coding skills. Writing perfect code
isn't the measure of a good developer (that would disqualify all of us!); it's
trying to create something, making mistakes, and learning from those mistakes.
That's how we all improve, and we are happy to help others learn.

Being an open source contributor doesn't just mean writing code, either. You can
help out by writing documentation, tests, or even giving feedback about the
project (and yes - that includes giving feedback about the contribution
process). Some of these contributions may be the most valuable to the project as
a whole, because you're coming to the project with fresh eyes, so you can see
the errors and assumptions that seasoned contributors have glossed over.

**Remember:**

- No contribution is too small
- Everyone started somewhere
- Questions are welcome
- Mistakes are learning opportunities
- Your perspective is valuable

(Impostor syndrome disclaimer adapted from
[Adrienne Friend](https://github.com/adriennefriend/imposter-syndrome-disclaimer))

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md)
file for more details.
