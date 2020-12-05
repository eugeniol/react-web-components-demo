import { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import * as actions from "./actions";
import store from "./store";

export const Button = ({ increment, decrement, name }) => {
    const counter = useSelector((state) => state.counter[name]);
    const dispatch = useDispatch();
    const handleOnClick = (ev) => {
        increment && dispatch(actions.increment(name));
        decrement && dispatch(actions.decrement(name));
    };
    return (
        <button style={{ border: "2px solid red" }} onClick={handleOnClick}>
            <slot style={{ pointerEvents: "none" }}></slot>
        </button>
    );
};

export const Status = ({ name }) => {
    console.log(`Status ${name} render`);
    const counter = useSelector((state) => {
        console.log(`Status ${name} selector called`);

        return state.counter[name];
    });
    return counter || "0";
};

function wrapComponent(Component, observedAttributes) {
    return class extends HTMLElement {
        static get observedAttributes() {
            return observedAttributes;
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.render();
        }
        render() {
            if (this.shadowRoot) {
                ReactDOM.render(
                    <Provider store={store}>
                        <Component
                            {...Object.fromEntries(
                                Array.from(this.attributes).map((attr) => [
                                    attr.name,
                                    attr.value === "" ? true : attr.value,
                                ])
                            )}
                        />
                    </Provider>,
                    this.shadowRoot
                );
            }
        }
        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.render();
        }
    };
}
customElements.define("x-button", wrapComponent(Button, ["name"]));
customElements.define("x-status", wrapComponent(Status, ["name"]));
