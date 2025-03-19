
# 🚀 **React App with UMD-Based Chat SDK - POC**

### ✅ **Overview**
This project demonstrates how to:  
- Build a **Chat SDK** as a **UMD module**.  
- **Host the SDK** on a Node.js/Express server with versioning support.  
- Dynamically **load the SDK** into a React app using a `<script>` tag instead of installing it via `package.json`.  
- Ensure that new changes in the SDK automatically reflect in the React app **without redeploying** the React app.  

---

### 🛠️ **Tech Stack**
- ⚛️ **React.js** → For the frontend application.  
- 🛠️ **MUI (Material-UI)** → For styling the app and SDK.  
- 🌐 **Node.js + Express** → To serve the minified Chat SDK with versioning support.  
- 🔥 **UMD Module** → To expose the Chat SDK as a global variable (`window.ChatSDK`) for dynamic loading.

---

### 🎯 **Folder Structure**
```
/chat-sdk                → Chat SDK UMD module
 ┣ 📁 src                  → SDK source files
 ┃    ┣ 📄 ChatSDK.js       → Chat component
 ┃    ┣ 📄 index.js         → SDK entry point
 ┣ 📁 dist                 → Minified SDK output
 ┣ 📁 latest               → Latest SDK version (served via `/latest`)
 ┣ 📁 v1.0.0               → Older version
 ┣ 📁 v1.1.0               → Newer version
 ┣ 📄 webpack.config.js    → Bundling SDK as UMD module
 ┣ 📄 package.json
 ┗ 📄 yarn.lock

/react-app                → React app using the SDK
 ┣ 📁 src                  → React app source code
 ┃    ┣ 📄 App.js           → React component loading the SDK dynamically
 ┃    ┣ 📄 index.js
 ┣ 📁 public               
 ┣ 📄 package.json
 ┣ 📄 yarn.lock
 ┗ 📄 README.md
```

---

### 🚀 **POC Flow**
1. The **Chat SDK** is built as a UMD module and minified using **Webpack**.  
2. The minified SDK file is hosted on a **Node.js/Express server** with versioning support.  
3. The **React app** dynamically loads the SDK using a `<script>` tag.  
4. The SDK is accessible globally as `window.ChatSDK`, making it easy to **use without installing it**.  
5. Any new changes in the SDK are automatically reflected in the React app (via `/latest` alias) **without redeployment**.  

---

### 🔥 **Commands Used**

#### ✅ **1. Chat SDK - Setup and Build**

1. Initialize the SDK project:
```bash
yarn init -y
```

2. Install dependencies:
```bash
yarn add react react-dom @mui/material  
yarn add webpack webpack-cli babel-loader @babel/preset-react --dev
```

3. Build the SDK:
```bash
yarn build
```

4. Organize versions:
```bash
mkdir v1.0.0 v1.1.0 latest
cp dist/chat-sdk.min.js v1.0.0
cp dist/chat-sdk.min.js v1.1.0
cp dist/chat-sdk.min.js latest
```

---

#### ✅ **2. Node.js Server - Hosting the SDK**
1. Install **Express.js**:
```bash
yarn add express
```

2. Start the server:
```bash
node server.js
```

---

#### ✅ **3. React App - Loading SDK Dynamically**
1. Start the React app:
```bash
yarn start
```

2. Open the app in the browser:
```
http://localhost:3000
```

---

### 🚀 **✅ Conclusion**
This POC successfully demonstrates:  
- **Modular architecture** using UMD modules.  
- **Dynamic SDK loading** without installing it in the React app.  
- **Versioning and hosting** via a simple Express server.  
- Automatic reflection of SDK updates without React app redeployment.  
