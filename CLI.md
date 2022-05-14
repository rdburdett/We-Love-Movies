# Push to backend
git subtree push --prefix backend heroku-backend main

# Push to frontend
git subtree push --prefix frontend heroku-frontend main

# Commit / Push
<!-- Commit -->
git add .
git commit -m "commit message"


<!-- Push to Heroku repository -->
npm run deploy:backend
npm run deploy:frontend
<!-- or -->
npm run deploy