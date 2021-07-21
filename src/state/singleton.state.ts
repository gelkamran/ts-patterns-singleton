export class SingletonState {
    private static _instance: SingletonState;

    private _value: number = 0;
    private _subscibers: Function[] = [];

    constructor() {
        if (SingletonState._instance instanceof SingletonState) {
            return SingletonState._instance;
        }

        SingletonState._instance = this;
    }

    increaseValue(): void {
        this.nextValue(this._value + 1);
    }

    decreaseValue(): void {
        this.nextValue(this._value - 1);
    }

    nextValue(value: number): void {
        this._value = value;

        this._subscibers.forEach(subscribeFunction => {
            subscribeFunction.call(null, this._value);
        });
    }

    subscribe(subscribeFunction: Function): void {
        this._subscibers.push(subscribeFunction);
        subscribeFunction.call(null, this._value);
    }
}