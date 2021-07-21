import { SingletonState } from './../state/singleton.state';

export function Control(controlElement: Element) {
    const singletonState: SingletonState = new SingletonState();

    controlElement.addEventListener('click', () => {
        controlElement.getAttribute('data-type') === 'up'
            ? singletonState.increaseValue()
            : singletonState.decreaseValue();
    });
}