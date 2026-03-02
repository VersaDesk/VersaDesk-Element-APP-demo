import { AfterViewInit, ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ELEMENT_PACKAGE_NAME, elementAsset } from './element.config';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  elementId = input<string>(""); // Recieved the elementId, some function call requires this elementId.
  onload = output<any>();        
  $title = signal(ELEMENT_PACKAGE_NAME);
  $bdpElementApi = signal<any>(null); // TODO should be an ElementAPI Type (currently, we use the any type.)
  asset = elementAsset;
  elemInterface = {
    phantomInitialize: (inputApi: any) => this.initialize(inputApi).catch(console.log), // The phantomInitialize function wukk be called by PhatnomDesk Client.
    phantomElementParams$: undefined,
    phantomNotifyChanges: undefined,
    phantomIncomingMessage: () => {}
  }
  ngAfterViewInit() {
    this.onload.emit(this.elemInterface); // Fire the onload event once after the view has been initialized.
  }
  async initialize(inputApi: any) {
    this.$bdpElementApi.set(inputApi);
    console.log(`${ELEMENT_PACKAGE_NAME} initialized.`);
    console.log(inputApi);
  }
  changeTitle() {
    const title = this.$title();
    this.$title.set(title === ELEMENT_PACKAGE_NAME ? `${ELEMENT_PACKAGE_NAME}-clicked` : ELEMENT_PACKAGE_NAME);
  }
}
