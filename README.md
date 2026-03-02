# Express on IGA Pages

Run Express.js as serverless Node Functions — no servers to manage, just export your app.

> English | [简体中文](./README.zh-CN.md)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
iga pages dev
```

## Project Structure

```
express-app/
├── api/
│   └── express/
│       └── [[default]].js    # Express app (catch-all route handler)
├── public/
│   └── index.html            # Static landing page with live API testing
├── package.json
└── README.md
```

## How It Works

Create an Express app in `api/express/[[default]].js`, export it as default — no `app.listen()` needed:

```js
import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Node Functions!" });
});

// No app.listen() — just export
export default app;
```

The `[[default]]` catch-all route lets Express handle all requests under `/api/express/*`. IGA Pages CLI automatically strips the `/api/express` prefix, so you write routes with relative paths.
