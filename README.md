## Personal website

Powered by Jekyll and (mostly) AI, with a cup of flatwhite.

#### Local setup

- **Ruby**: Use Ruby 3.x or 4.x (e.g. via Homebrew). CI uses Ruby 3.3. System Ruby 2.6 on macOS can hit permission and native gem build issues.
  - Install: `brew install ruby` (Only if you do not see `ruby` using `brew list` command)
  - Use it for this project: `export PATH="/opt/homebrew/opt/ruby/bin:$PATH"`
- Install Bundler (if needed): `gem install bundler`
- Install dependencies: `bundle install` (gems go into `vendor/bundle`)
- Run the site: `bundle exec jekyll serve --livereload` to auto-refresh on save.
- Open **http://127.0.0.1:4000/** in your browser.

#### Deployment

The site is built and deployed to GitHub Pages via the [Deploy Jekyll site to Pages](.github/workflows/jekyll.yml) workflow:

- **Automatic**: Pushing to the `master` branch triggers a build and deploy.
- **Manual**: Run the workflow from the **Actions** tab (workflow_dispatch).

**Note:** This project uses Jekyll 4 (not the `github-pages` gem) so it works with current Ruby. `_config.yml` excludes `vendor` and `.gem` so Jekyll only builds from the site source.