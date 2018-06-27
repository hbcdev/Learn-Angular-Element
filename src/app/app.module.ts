import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyWidgetComponent } from './my-widget/my-widget.component';
import { TableDataComponent } from './table-data/table-data.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    MyWidgetComponent,
    TableDataComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    MyWidgetComponent,
    TableDataComponent,
    TestComponent
  ],
  bootstrap: [MyWidgetComponent]
})
export class AppModule {
  constructor(private injctor: Injector) {
    const coutomEle = createCustomElement(MyWidgetComponent, {
      injector: injctor,
    });

    const tableDataCus = createCustomElement(TableDataComponent, {
      injector: injctor,
    });

    const testEle = createCustomElement(TestComponent, {
      injector: injctor,
    });

    customElements.define('my-widget', coutomEle);
    customElements.define('table-data', tableDataCus);
    customElements.define('app-test', testEle);
  }

  ngDoBootstarp() { }
}
