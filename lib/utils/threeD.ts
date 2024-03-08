import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


let parent = document.getElementById("container3D")
//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, parent?.offsetWidth??300 / parent?.parentElement?.offsetHeight??300, 0.1, 1000);

//Keep track of the mouse position, so we can make the eye move
let mouseX = parent?.parentElement?.offsetWidth / 2;
let mouseY = parent?.parentElement?.offsetHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;

//Set which object to render
let objToRender = 'eye';

//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

//Load the file
loader.load(
    `/${objToRender}/scene.gltf`,
    function (gltf) {
        //If the file is loaded, add it to the scene
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr) {
        //While it is loading, log the progress
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        //If there is an error, log it
        console.error(error);
    }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(parent?.parentElement?.offsetWidth, parent?.parentElement?.offsetHeight);

//Add the renderer to the DOM
parent?.appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = objToRender === "dino" ? 25 : 500;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
scene.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
if (objToRender === "dino") {
    controls = new OrbitControls(camera, renderer.domElement);
}

//Render the scene
export function animate() {
    requestAnimationFrame(animate);
    //Here we could add some code to update the scene, adding some automatic movement

    //Make the eye move
    if (object && objToRender === "eye") {
        //I've played with the constants here until it looked good
        object.rotation.y = -3 + mouseX / parent?.parentElement?.offsetWidth * 3;
        object.rotation.x = -1.2 + mouseY * 2.5 / parent?.parentElement?.offsetHeight;
    }
    renderer.render(scene, camera);
}

//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
    camera.aspect = window?.innerWidth / window?.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window?.innerWidth, window?.innerHeight);
});

//add mouse position listener, so we can make the eye move
document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}

//Start the 3D rendering
