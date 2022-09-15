# 기본 세팅
1. `terminal`에서 실행
    ```bash
    npm init
    npm i express morgan
    npm i --save-dev @babel/core @babel/preset-env @babel/node nodemon
    ```
2. `babel.config.json` 파일 추가 후 작성
    ```json
    {
      "presets": ["@babel/preset-env"]
    }
    ```
3. `package.json`에 추가
    ```json
    {
      "scripts": {
        "dev": "nodemon --exec babel-node src/server.js"
      }  
    }
    ```
## 참고 사이트
- [https://babeljs.io/setup#installation](https://babeljs.io/setup#installation)
- [https://www.npmjs.com/package/morgan](https://www.npmjs.com/package/morgan)
- [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)

# mvc 구조
```javascript
import express from "express";
import morgan from "morgan";

const app = express();

// middleware
const logger = morgan("dev");
app.use(logger);

// controller
const home = (req, res) => res.send("See Home");

// router
const globalRouter = express.Router();
globalRouter.get("/", home);
app.use("/", globalRouter);

// listen
const handleListening = () => console.log(`Server listening on http://localhost:${PORT} 🚀`)
app.listen(PORT, handleListening);
```