## Personal website V3

Powered by Jekyll

#### Steps

- **Ruby**: Use Ruby 3.x or 4.x (e.g. via Homebrew). System Ruby 2.6 on macOS can hit permission and native gem build issues.
  - Install: `brew install ruby`
  - Use it for this project: `export PATH="/opt/homebrew/opt/ruby/bin:$PATH"`
- Install Bundler (if needed): `gem install bundler`
- Install dependencies: `bundle install` (gems go into `vendor/bundle`)
- Run the site: `bundle exec jekyll serve`
  - Open **http://127.0.0.1:4000/** in your browser.
  - Optional: add `--livereload` to auto-refresh on save. If you see "port is in use", run without `--livereload` or stop any other Jekyll process.

**Note:** This project uses Jekyll 4 (not the `github-pages` gem) so it works with current Ruby. `_config.yml` excludes `vendor` and `.gem` so Jekyll only builds from the site source.

**Troubleshooting:** If you see "port is in use" or "Address already in use", another Jekyll (or app) is using the port. Stop that process, or run on a different port: `bundle exec jekyll serve --port 4001` and open http://127.0.0.1:4001/
