/**
 * When developing, use the bootstrapApplication function to do bootstrap.
 */

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


/**
 * 當進入生產階段時，
 * 0. 【注意】所有依賴套件都應該移到 devDependencies，因為 customElement 必須是自包含的，不能依賴外部套件。
 * 1. 【要做】請註解掉以上的程式碼，並使用以下程式碼來建立 custom elements。
 * 2. 【要做】請修改 package.json 檔案，查看 phantom-desk 鍵的內容。
 *    在「element」下的 "tagName" 必須是唯一的，並將作為 customElement 的標籤名稱使用。
 * 3. 【要做】使用 `npm run build` 將 element App 打包成一個 zip 檔案，以便在 versadesk 中本地安裝。
 * 4. 【可選】你可以使用 `npm publish` 將此 element app 發布為公開套件。
 *    使用者可透過 versadesk 的 Web UI 來安裝此 element app。
 */


import { createApplication } from "@angular/platform-browser";
import { appConfig } from './app/app.config';
import {createCustomElement} from '@angular/elements';
import { AppComponent } from './app/app.component';

(async () => {
  const app = await createApplication(appConfig);
  const elem = createCustomElement(AppComponent, {injector: app.injector});
  if (!customElements.get('element-app-hello-world')) {
    customElements.define('element-app-hello-world', elem);
  }
})().catch(err => console.log(err));
