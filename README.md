# AngularElement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## createCustomElement
Use the createCustomElement() function to convert a component into a class that can be registered with the browser as a custom element
const coutomEle = createCustomElement(MyWidgetComponent, {
      injector: injctor,
    });
customElements.define('my-widget', coutomEle);
