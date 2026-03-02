# VersaDesk Element App 範例專案

此專案為 VersaDesk 整合用的 Angular Element 範例。

## 環境需求
- Node.js 18 以上（建議使用 LTS）
- npm 9 以上

## 安裝
```bash
npm install
```

## 開發模式
```bash
npm start
```
啟動 Angular 開發伺服器。

## 建置與打包
```bash
npm run build
```
此腳本會執行以下流程：
1. 建置正式版（`ng build -c production`）
2. 合併 JS 檔為 `dist/element-app-hello-world.js`
3. 複製 assets 與 `package.json` 到 `dist`
4. 產出 `element-app-hello-world.zip`

## 資產路徑規範
所有 Element 資產請使用以下前綴：

```text
/assets/elements/{package-name}/assets/
```

本專案已將此規範集中在：
- `src/app/element.config.ts`

主要輸出：
- `ELEMENT_PACKAGE_NAME`
- `ELEMENT_ASSETS_BASE_PATH`
- `elementAsset(path)`

模板使用範例：
```html
<img [src]="asset('versadesk_logo.png')" alt="VersaDesk Logo" />
```

## 只改一次套件名稱
若要更改 Element 套件名稱，只需修改：
- `src/app/element.config.ts` 中的 `ELEMENT_PACKAGE_NAME`

以下位置會自動套用：
- `src/main.ts` 的 custom element 註冊名稱
- `src/main.ts` 的 favicon 路徑
- `src/app/app.component.ts` 的 UI 標題邏輯
- `src/app/app.component.spec.ts` 的單元測試內容

## 專案結構
- `src/main.ts`：custom element 啟動與註冊
- `src/app/element.config.ts`：套件名稱與資產路徑 helper
- `src/app/app.component.*`：範例 UI 與 element 行為

## 測試
```bash
npm test
```

## 備註
- 目前建置可能出現 `src/app/app.component.css` 的 style budget 警告。
- 此警告不會阻擋建置輸出。
