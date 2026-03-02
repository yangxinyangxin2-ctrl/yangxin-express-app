# Express on IGA Pages

将 Express.js 作为无服务器 Node Functions 运行 — 无需管理服务器，只需导出你的应用。

> [English](./README.md) | 简体中文

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
iga pages dev
```

## 项目结构

```
express-app/
├── api/
│   └── express/
│       └── [[default]].js    # Express 应用（catch-all 路由处理）
├── public/
│   └── index.html            # 静态展示页，支持在线 API 测试
├── package.json
└── README.md
```

## 工作原理

在 `api/express/[[default]].js` 中创建 Express 应用，以 default 导出 — 无需调用 `app.listen()`：

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

`[[default]]` catch-all 路由让 Express 处理 `/api/express/*` 下的所有请求。IGA Pages CLI 会自动去除 `/api/express` 前缀，因此路由使用相对路径即可。
