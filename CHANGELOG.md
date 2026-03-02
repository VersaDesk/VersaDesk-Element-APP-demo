# CHANGELOG

## 2026-03-02

### Angular 升級紀錄
- 目標: 將專案 Angular 升級到 v20。
- 發現: `package.json` 原本顯示 `19.x`，但實際安裝版本為 `17.3.x`（`ng version`）。
- 依 Angular 升級限制，採逐版升級:
1. `17 -> 18` (`ng update @angular/core@18 @angular/cli@18 --force --allow-dirty`)
2. `18 -> 19` (`ng update @angular/core@19 @angular/cli@19 --force --allow-dirty`)
3. `19 -> 20` (`ng update @angular/core@20 @angular/cli@20 --force --allow-dirty`)
- 升級後主要版本:
  - `@angular/core`: `20.3.17`
  - `@angular/cli`: `20.3.18`
  - `@angular-devkit/build-angular`: `20.3.18`

### Angular Migration 造成的設定變更
- `tsconfig.json`
  - `moduleResolution` 更新為 `"bundler"`（CLI migration）。
- `angular.json`
  - 新增/更新 schematics 預設設定（CLI migration）。

### Zoneless 遷移紀錄
- 目標: 將專案改為使用 zoneless change detection。
- 變更內容:
1. `src/app/app.config.ts`
   - 啟用 `provideZonelessChangeDetection()`。
   - 移除未使用的 `NgZone` 設定與註解中的舊 provider。
2. `angular.json`
   - `build.options.polyfills` 由 `["zone.js"]` 改為 `[]`。
   - `test.options.polyfills` 由 `["zone.js", "zone.js/testing"]` 改為 `[]`。
3. `package.json`
   - 移除 `zone.js` 依賴。
4. `package-lock.json`
   - 依 `npm install` 同步更新。

### 驗證結果
- `ng version` 顯示 Angular CLI `20.3.18`、Angular `20.3.17`。
- `npm run build` 驗證成功。
- 既有警告仍存在:
  - `src/app/app.component.css` 超過 `anyComponentStyle` warning budget（2kb）。

### 其他備註
- `src/main.ts` 仍有提及 `zone.js` 的說明註解（僅註解，不影響執行）。
