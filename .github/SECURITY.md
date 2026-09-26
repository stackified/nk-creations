# Security Policy

## Supported versions

This is a brand-website project for NK Creations. Only the latest version on the `main` branch
is maintained.

| Version | Supported |
|---------|:---------:|
| Latest (`main`) | Yes |
| Older commits | No |

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

Instead, use GitHub's private reporting:

1. Go to the [Security tab](https://github.com/stackified/nk-creations/security).
2. Click **Report a vulnerability**.
3. Describe the issue, steps to reproduce, and potential impact.

You can expect an acknowledgement within a few days. Thank you for helping keep the project safe.

## Notes on this project

NK Creations is a fully static front-end site (vanilla JavaScript, SCSS, built with Vite) served
from GitHub Pages. It has no backend, no authentication, no database, no payments and no
environment secrets. The contact form is not connected to any service and sends no data;
enquiries go through `mailto:` and `tel:` links. The only third-party resources are Google Fonts
and an outbound Instagram link, and the only runtime dependency is Lenis.

Pages are rendered by writing HTML strings into the DOM, so reports about script injection (for
example through the search input) are the most relevant. The JavaScript is scanned by CodeQL on
every push and pull request to `main`.
