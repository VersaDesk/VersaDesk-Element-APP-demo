# 變更紀錄

## 2026-03-02

### 新增
- 在 `src/app/element.config.ts` 新增 Element 共用設定與資產路徑工具：
  - `ELEMENT_PACKAGE_NAME`
  - `ELEMENT_ASSETS_BASE_PATH`
  - `elementAsset(path)`

### 調整
- `src/app/app.component.html` 的 logo 改為 `[src]="asset('versadesk_logo.png')"`，不再寫死路徑。
- `src/app/app.component.ts` 改為使用 `ELEMENT_PACKAGE_NAME`，套用於：
  - 初始標題值
  - 標題切換邏輯
  - 初始化 log 訊息
- `src/main.ts` 的 custom element 註冊改為使用 `ELEMENT_PACKAGE_NAME`。
- `src/main.ts` 新增動態 favicon 設定，使用 `elementAsset('favicon.ico')`。
- `src/app/app.component.spec.ts` 改為使用 `ELEMENT_PACKAGE_NAME`，移除硬編碼名稱字串。

### 文件
- 重寫 `README.md`，補上專案實際使用方式與資產路徑規範。

### 驗證
- `npm run build` 已成功。
- 既有警告仍存在：
  - `src/app/app.component.css` 超過 `anyComponentStyle` warning budget。

---

## 2026-03-02（稍早）

### 升級
- Angular 套件升級至 v20：
  - `@angular/core`: `20.3.17`
  - `@angular/cli`: `20.3.18`
  - `@angular-devkit/build-angular`: `20.3.18`

### 遷移
- `tsconfig.json`：
  - `moduleResolution` 調整為 `"bundler"`
- `angular.json`：
  - 套用 CLI migration 與專案遷移預設調整。
- 套用 zoneless 設定：
  - `src/app/app.config.ts` 使用 `provideZonelessChangeDetection()`
  - 移除 build/test 的 `zone.js` polyfills
  - 移除 `package.json` 中的 `zone.js` 相依套件

### 驗證
- `ng version` 顯示 Angular CLI `20.3.18`、Angular `20.3.17`。
- `npm run build` 成功，僅有樣式 budget 警告。
