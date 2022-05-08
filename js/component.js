export default class Component {
    constructor() {
        if (new.target ===  Component) {
            throw new TypeError('Cannot construct abstract instances directly.')
        }
        
        this.element = undefined
    }

    asAlement() {
        throw new TypeError(this.asAlement.name + ' is an abstract function that has to be implemented.')
    }
}