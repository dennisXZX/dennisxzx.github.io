## Personal website V3

Powered by Jekyll

#### Steps

- **Ruby**: Use Ruby 3.x (e.g. via Homebrew). System Ruby 2.6 on macOS can hit permission and native gem build issues.
  - Install: `brew install ruby`
  - Use it for this project: `export PATH="/opt/homebrew/opt/ruby/bin:$PATH"`
- Install Bundler (if needed): `gem install bundler`
- Install dependencies: `bundle install` (gems go into `vendor/bundle`)
- Run the site: `bundle exec jekyll serve --livereload`
  - `--livereload` watches files and auto-refreshes the browser at http://127.0.0.1:4000/ when you save changes.
- Open: **http://127.0.0.1:4000/**

`_config.yml` excludes `vendor` and `.gem` so Jekyll only builds from the site source.
