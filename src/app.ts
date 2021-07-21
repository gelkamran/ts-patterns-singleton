import { SingletonState } from './state/singleton.state';
import { Control } from './components/control.component';
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', function() {
    const singletonState: SingletonState = new SingletonState();

    const valueDivs: NodeListOf<Element> = document.querySelectorAll('[role=value]');
    singletonState.subscribe((value) => {
        valueDivs.forEach(valueDiv => {
            valueDiv.innerHTML = value.toString();
        })
    })

    const controls: NodeListOf<Element> = document.querySelectorAll('[role=control]');
    controls.forEach(rater => {
      new Control(rater);
    });
});