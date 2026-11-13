# Wisdom – GitHub-ready website recreation

This project recreates the visible design and main front-end pages of https://wisdom-pk.com/.

## Files
- `index.html` – homepage, categories and article grid
- `article.html` – reusable article detail page
- `write.html` – article submission form
- `assets/style.css` – responsive design and theme
- `assets/articles.js` – starter article content
- `assets/app.js` – homepage rendering and category filtering

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Deploy to Vercel
1. Upload the extracted project folder to a new GitHub repository.
2. In Vercel choose **Add New → Project** and import that repository.
3. For this static HTML project, leave the framework preset as **Other**.
4. Set the output directory to `.` if Vercel asks for one, then deploy.

## Important backend limitation
This is a front-end recreation. The write form stores new articles in the current browser's `localStorage` only. It does not publish them to a shared server or database, and it does not include a secure delete-key service, accounts, admin moderation, or persistent file uploads. To make public article submissions work for every visitor, connect a backend such as Supabase and add server-side validation/storage.

The original site's private source code and backend were not available from its public pages. This project is a clean recreation, not a copy of its original source.
