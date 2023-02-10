import {EventEmitter} from "events";


export default class Sizes extends EventEmitter{
    constructor(){
        super();
        this.whidth = window.innerHeight
        this.height = window.innerWidth
        this.aspect = this.whidth/this.height
        this.pixelRatio = Math.min(window.devicePixelRatio,2)

        window.addEventListener("resize",()=>{
            this.whidth = window.innerWidth
            this.height = window.innerHeight
            this.aspect = this.whidth/this.height
            this.pixelRatio = Math.min(window.devicePixelRatio,2)
            this.emit("resize");
        })
    }
}