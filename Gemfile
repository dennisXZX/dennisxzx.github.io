source "https://rubygems.org"

# Jekyll 4 works with Ruby 3.x and 4.x. Avoid github-pages gem (pins old deps that fail on Ruby 4).
gem "jekyll", "~> 4.3"
gem "kramdown-parser-gfm"  # GFM for kramdown (see _config.yml)
gem "webrick"              # required for `jekyll serve` on Ruby 3+

# Ruby 3.4+ removed some stdlib; Jekyll may need these
gem "csv"
gem "base64"
gem "logger", "~> 1.6"
gem "ostruct", "~> 0.6"
