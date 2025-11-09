# AI Chatbox Web

基于 React 的 AI 对话应用，集成 ChatGPT API 实现智能对话功能。

## 功能特点

- 🎨 现代化的 UI 设计，适配 PC 端
- 💬 实时对话交互
- 🤖 集成 OpenAI ChatGPT API
- ⚡ 快速响应，流畅体验
- 🎯 支持多轮对话上下文

## 技术栈

- React 18
- Axios (HTTP 客户端)
- OpenAI API

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/zhenzhenxu/ai-chatbox-web.git
cd ai-chatbox-web
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制 `.env.example` 文件并重命名为 `.env`：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的 OpenAI API Key：

```
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

### 4. 启动开发服务器

```bash
npm start
```

应用将在 `http://localhost:3000` 启动。

## 获取 OpenAI API Key

1. 访问 [OpenAI 平台](https://platform.openai.com/)
2. 注册/登录账号
3. 进入 API Keys 页面
4. 创建新的 API Key
5. 将 API Key 复制到 `.env` 文件中

## 项目结构

```
ai-chatbox-web/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChatBox.js          # 聊天框主组件
│   │   ├── ChatBox.css
│   │   ├── Message.js          # 消息组件
│   │   └── Message.css
│   ├── services/
│   │   └── chatgpt.js          # ChatGPT API 服务
│   ├── App.js                  # 主应用组件
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env.example                # 环境变量示例
├── .gitignore
├── package.json
└── README.md
```

## 可用脚本

- `npm start` - 启动开发服务器
- `npm build` - 构建生产版本
- `npm test` - 运行测试
- `npm eject` - 弹出配置（不可逆）

## 自定义配置

### 更改 AI 模型

在 `.env` 文件中修改：

```
REACT_APP_OPENAI_MODEL=gpt-4
```

### 使用自定义 API 地址

如果使用代理或第三方服务，可以修改：

```
REACT_APP_OPENAI_API_URL=https://your-proxy-url.com/v1/chat/completions
```

## 部署

### 构建生产版本

```bash
npm run build
```

构建后的文件将在 `build` 目录中，可以部署到任何静态托管服务：

- Vercel
- Netlify
- GitHub Pages
- 等等

## 注意事项

⚠️ **安全提醒**：
- 不要将 `.env` 文件提交到 Git 仓库
- 不要在前端代码中暴露 API Key
- 生产环境建议使用后端代理 API 请求

## License

MIT

## 联系方式

如有问题或建议，欢迎提交 Issue。
