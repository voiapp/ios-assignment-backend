# Vercel Vehicle Endpoint

A minimal serverless API for Vercel that serves a single endpoint:
```
GET /api/vehicle?qrcode=w9mb
```

## Deploy (2 minutes)

1. Download and unzip this project.
2. Push it to a new GitHub repo (or import directly in Vercel).
3. Go to https://vercel.com/new and select the repo.
4. Click **Deploy** (defaults are fine).

You’ll get a URL like:
```
https://<project-name>.vercel.app/api/vehicle?qrcode=w9mb
```

## Local test (optional)

```bash
npm i -g vercel
vercel dev
# visit http://localhost:3000/api/vehicle?qrcode=w9mb
```

## Notes
- Runtime: Node.js 18 on Vercel Serverless Functions
- No additional dependencies required
