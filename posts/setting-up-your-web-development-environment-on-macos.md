---
title: Setting Up a Web Development Environment on macOS
date: 2025-04-30
author:
  name: Nap Joseph Calub
  url: https://napjose.ph
excerpt: Got a new Mac and want to get it ready for web development? This guide walks you through everything you need to install and configure a powerful development environment using modern tools.
tags:
  - Setup
  - macOS
---

Got a new Mac and want to get it ready for web development? This guide walks you through everything you need to install and configure a powerful development environment using modern tools.

---

## 🛠️ What We'll Be Installing

- **Shell & Plugins**: [zsh](https://www.zsh.org/), [oh-my-zsh](https://ohmyz.sh/), [powerlevel10k](https://github.com/romkatv/powerlevel10k), [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions), [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
- **Secrets & GPG**: [Keybase](https://keybase.io/) (used for secure GPG key management)
- **Languages**: Node.js (via [nvm](https://github.com/nvm-sh/nvm)), [Deno](https://deno.com/), Python (via [uv](https://docs.astral.sh/uv/)), Go
- **Tools**: [Docker](https://www.docker.com/), [byobu](https://www.byobu.org/), [direnv](https://direnv.net/), [bat](https://github.com/sharkdp/bat), [stow](https://www.gnu.org/software/stow/)
- **Package Manager**: [Homebrew](https://brew.sh/)
- **Code Editors**: [VS Code](https://code.visualstudio.com/), [SpaceVim](https://spacevim.org/)
- **Xcode Command Line Tools** (needed for compiling things)

---

## 🧱 Step 1: Install Xcode Command Line Tools

First, make sure you have the basic developer tools installed:

```bash
xcode-select --install
```

You should get a popup. Click "Install" and let it finish. You can confirm the install with:

```bash
xcode-select -p
```

---

## 🍺 Step 2: Install Homebrew

Homebrew is the package manager we’ll use to install almost everything else.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then run:

```bash
brew update
brew upgrade
```

---

## 🖥️ Step 3: Set Up Your Shell

### Install zsh and make it your default shell

```bash
brew install zsh
chsh -s $(which zsh)
```

### Install oh-my-zsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Install powerlevel10k (fancy prompt)

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k"
```

Open `~/.zshrc`, find the line that sets `ZSH_THEME`, and change its value to `"powerlevel10k/powerlevel10k"`.

Restart your terminal and follow the guided config.

Reload your shell:

```bash
source ~/.zshrc
```

### Install zsh plugins

```bash
# Autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Syntax highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Then edit your `.zshrc` and make sure your plugins line looks like this:

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

Reload your shell:

```bash
source ~/.zshrc
```

---

## 🔐 Step 4: Install Keybase and Set Up GPG

### Install Keybase

```bash
brew install --cask keybase
open /Applications/Keybase.app
```

Log in using the Keybase GUI or via CLI:

```bash
keybase login
```

### Generate and import your GPG key

```bash
keybase pgp gen
keybase pgp export --secret > ~/.gnupg/private.key
gpg --import ~/.gnupg/private.key
```

### Configure Git to use your GPG key

```bash
gpg --list-secret-keys --keyid-format LONG
```

Copy the key ID and run:

```bash
git config --global user.signingkey YOUR_KEY_ID
git config --global commit.gpgsign true
```

Replace `YOUR_KEY_ID` with your actual GPG key ID.

---

## 💻 Step 5: Install Language Runtimes

### Node.js using NVM

```bash
brew install nvm
mkdir ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
nvm install --lts
```

### Python using uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv venv --python 3.12.0
```

### Go

```bash
brew install go
echo 'export PATH="/opt/homebrew/opt/go/libexec/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

---

## 🧰 Step 6: Install Dev Tools

### Docker

```bash
brew install --cask docker
open /Applications/Docker.app
```

Make sure to go into Docker settings and enable it to launch on startup if you use it often.

### byobu

```bash
brew install byobu
```

### SpaceVim

```bash
curl -sLf https://spacevim.org/install.sh | bash
```

### bat (a better cat)

```bash
brew install bat
```

### direnv (auto-load .env files per project)

```bash
brew install direnv
echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
```

### GNU Stow (for managing dotfiles)

```bash
brew install stow
```

---

## 🧪 Final Touches

After installing everything, reload your shell:

```bash
source ~/.zshrc
```

You now have a fast, modern, and extensible dev environment on your Mac.

---

## ✅ You're Ready to Code

Here's what you have now:

- A beautiful, helpful terminal setup with zsh and Powerlevel10k
- Secure GPG key setup with Keybase
- Node.js, Python, and Go all managed cleanly
- Docker and essential dev tools installed
- Dotfile and environment management with stow and direnv

Feel free to customize from here or automate it into a dotfiles repo later.

Happy coding! 🚀
