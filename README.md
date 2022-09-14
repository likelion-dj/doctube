# 기본 세팅
- `terminal`에서 실행
```bash
npm i express morgan
npm i --save-dev @babel/core @babel/preset-env @babel/node nodemon
```
- `babel.config.json` 파일 추가 후 작성
```json
{
  "presets": ["@babel/preset-env"]
}
```
- `package.json`에 추가
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