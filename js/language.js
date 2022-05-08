import Component from './component.js'

export default class Language extends Component {
    constructor(name, score) {
        super()
        this.name = name
        this.score = score
    }

    asElement() {
        if (this.element) return this.element

        const div_container = document.createElement('div')
        const p_name = document.createElement('p')
        const div_scoreBar = document.createElement('div')
        const div_score = document.createElement('div')
        
        div_container.className = 'language'
        p_name.innerText = this.name
        div_scoreBar.className = 'scoreBar'
        div_score.className = 'score'

        // Set score
        const s = this.score >= 1 ? 100 : this.score * 100
        div_score.style.width = s + '%'

        // Append childs
        div_container.appendChild(p_name)
        div_container.appendChild(div_scoreBar)
        div_scoreBar.appendChild(div_score) 
        
        this.element = div_container    
        return this.element
    }
}