# React 17 example of webcomponent

Here goes an example of web component code in react and sharing the same app state by using redux

The example demostrates the x-button component that allows increment/decrement a counter by name. Then x-status component will render the counter value for given name. Both component will allow html name atribute to be mutated and component will refresh acordingly

```html
  <x-button increment name="a">a++</x-button>
  <x-button decrement name="a">a--</x-button>
  |
  <x-button increment name="b">b++</x-button>
  <x-button decrement name="b">b--</x-button>
  <br />
  a = <x-status name="a"></x-status>, b = <x-status name="b"></x-status>
```

### See also 

* [react redux hooks](https://react-redux.js.org/api/hooks)
* [react web components](https://reactjs.org/docs/web-components.html)
* [shadowDom](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
* [reselect](https://github.com/reduxjs/reselect)