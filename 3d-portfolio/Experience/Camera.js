import * as THREE from 'three';

import Experience from "./Experience";

export default class Camera{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        
    }
    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            100
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 5;
    }
    rezise(){
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix()
    }
    update(){
        
    }
}