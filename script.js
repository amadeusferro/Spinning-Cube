// scene
const scene = new THREE.Scene();
//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//renderer
const renderer = new THREE.WebGLRenderer();
//renderer size
renderer.setSize(window.innerWidth, window.innerHeight);
//linking render
document.body.appendChild(renderer.domElement);
//creating cube
const geometry = new THREE.BoxGeometry();
//cube's material
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
//apply
const cube = new THREE.Mesh(geometry, material);
//add to screen
scene.add(cube);
//depth
camera.position.z = 5;
//render
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
//invoke
animate();