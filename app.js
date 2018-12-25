(function(){var script=document.createElement('script'); script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})();

const form = document.formGeometry;
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
let renderer = new THREE.WebGLRenderer(); // { antialias: true, alpha: true }
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
})

let controls = new THREE.OrbitControls( camera, renderer.domElement );
let loader = new THREE.OBJLoader( );

// let effect = new THREE.AnaglyphEffect( renderer );

// effect.setSize( window.innerWidth, window.innerHeight );

// loader.load('dmc.obj', object => {
//         object.position.set(-1.5, -1.5, -1.5);
//         object.rotation.y = Math.PI / 2;

//         scene.add(object);
//     }
// );

// create shape
let g1 = new THREE.IcosahedronGeometry(10, 2);
// let cubeMaterials = [
//     new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.FrontSide}),
//     new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('./pic1.png'), side: THREE.DoubleSide}),
//     new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('./pic1.png'), side: THREE.FrontSide}),
//     new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('./pic1.png'), side: THREE.DoubleSide}),
//     new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('./pic1.png'), side: THREE.FrontSide}),
//     new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('./pic1.png'), side: THREE.FrontSide})
// ];
let material = new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: true });
let c1 = new THREE.Mesh( g1, material );
scene.add( c1 );
camera.position.z = 50;

// let tgaloader = new THREE.TGALoader( );
// let skyboxGeometry = new THREE.CubeGeometry(4000, 3000, 4000);

// let ft = tgaloader.load('down-under_ft.tga');
// let bk = tgaloader.load('down-under_bk.tga');
// let up = tgaloader.load('down-under_up.tga');
// let dn = tgaloader.load('down-under_dn.tga');
// let rt = tgaloader.load('down-under_rt.tga');
// let lf = tgaloader.load('down-under_lf.tga');

// let ft = new THREE.TextureLoader().load('./star.png');
// let bk = new THREE.TextureLoader().load('./star.png');
// let up = new THREE.TextureLoader().load('./star.png');
// let dn = new THREE.TextureLoader().load('./star.png');
// let rt = new THREE.TextureLoader().load('./star.png');
// let lf = new THREE.TextureLoader().load('./star.png');

// ft.anisotropy = renderer.getMaxAnisotropy();
// bk.anisotropy = renderer.getMaxAnisotropy();
// up.anisotropy = renderer.getMaxAnisotropy();
// dn.anisotropy = renderer.getMaxAnisotropy();
// rt.anisotropy = renderer.getMaxAnisotropy();
// lf.anisotropy = renderer.getMaxAnisotropy();


// let skyboxMaterials = [
//     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./star.jpeg'), side: THREE.DoubleSide }), // FRONT
//     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./star.jpeg'), side: THREE.DoubleSide }), // BACK
//     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./star.jpeg'), side: THREE.DoubleSide }), // UP
//     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./star.jpeg'), side: THREE.DoubleSide }), // DOWN
//     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./star.jpeg'), side: THREE.DoubleSide }), // RIGHT
//     new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./star.jpeg'), side: THREE.DoubleSide }) // LEFT
// // ]

// let skyboxMaterials = [
//     new THREE.MeshBasicMaterial({ map: ft, side: THREE.DoubleSide }), // FRONT
//     new THREE.MeshBasicMaterial({ map: bk, side: THREE.DoubleSide }), // BACK
//     new THREE.MeshBasicMaterial({ map: up, side: THREE.DoubleSide }), // UP
//     new THREE.MeshBasicMaterial({ map: dn, side: THREE.DoubleSide }), // DOWN
//     new THREE.MeshBasicMaterial({ map: rt, side: THREE.DoubleSide }), // RIGHT
//     new THREE.MeshBasicMaterial({ map: lf, side: THREE.DoubleSide }) // LEFT
// ]

// for(let i = 0; i < skyboxMaterials.length; i++){
//     skyboxMaterials[i].map.minFilter = THREE.LinearFilter;
// }

// // let skyboxMaterial = new THREE.MeshFaceMaterial( skyboxMaterials );
// let skybox = new THREE.Mesh( skyboxGeometry, skyboxMaterials );
// scene.add( skybox );


// Floor
// let floorGeometry = new THREE.CubeGeometry(10, 1, 10);
// let floorMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('./wood.jpg'), side: THREE.DoubleSide});
// let floor = new THREE.Mesh( floorGeometry, floorMaterial );
// floor.position.y = -5;
// scene.add(floor);

// // Ceiling
// let ceilingGeometry = new THREE.CubeGeometry(10, 1, 10);
// let ceilingMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('./wood.jpg'), side: THREE.DoubleSide});
// let ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
// ceiling.position.y = 5;
// scene.add( ceiling );

// // Left wall
// let leftWallGeometry = new THREE.CubeGeometry(1, 11, 10);
// let leftWallMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('wood.jpg'), side: THREE.DoubleSide});
// let leftWall = new THREE.Mesh( leftWallGeometry, leftWallMaterial );
// leftWall.position.x = -5;
// scene.add( leftWall );

// // Right wall
// let rightWallGeometry = new THREE.CubeGeometry(1, 11, 10);
// let rightWallMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('wood.jpg'), side: THREE.DoubleSide });
// let rightWall = new THREE.Mesh( rightWallGeometry, rightWallMaterial );
// rightWall.position.x = 5;
// scene.add( rightWall );

// Ambient Light
let ambientLight = new THREE.AmbientLight( 0xffffff, .2 );
scene.add( ambientLight );


// Point Light
let light1 = new THREE.PointLight( 0xff0000, 20, 60 );
scene.add( light1 );
let redGeometry = new THREE.SphereGeometry(1, 32, 32);
let redMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000});
let redBulb = new THREE.Mesh( redGeometry, redMaterial );
scene.add( redBulb );

let light2 = new THREE.PointLight( 0x00ff00, 20, 60 );
scene.add( light2 );
let greenGeometry = new THREE.SphereGeometry(1, 32, 32);
let greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let greenBulb = new THREE.Mesh( greenGeometry, greenMaterial );
scene.add( greenBulb );

let light3= new THREE.PointLight( 0x0000ff, 20, 60 );
scene.add( light3 );
let blueGeometry = new THREE.SphereGeometry( 1, 32, 32 );
let blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
let blueBulb = new THREE.Mesh( blueGeometry, blueMaterial );
scene.add( blueBulb )


// Directional Light
let directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
directionalLight.position.set(0, 1, 0)
// scene.add(directionalLight)


let spotLight = new THREE.SpotLight( 0xffffff, 1);
spotLight.position.set( 0, 20, 20 );
scene.add( spotLight ); 



// game logic
let update = () => {
    let time = Date.now() * .0005;

    light1.position.x = Math.sin( time * 0.7 ) * 30;
    light1.position.y = Math.cos( time * 0.5 ) * 40;
    light1.position.z = Math.cos( time * 0.3 ) * 30;
    redBulb.position.x = Math.sin( time * 0.7 ) * 30;
    redBulb.position.y = Math.cos( time * 0.5 ) * 40;
    redBulb.position.z = Math.cos( time * 0.3 ) * 30;

    light2.position.x = Math.cos( time * 0.3 ) * 30;
    light2.position.y = Math.sin( time * 0.5 ) * 40;
    light2.position.z = Math.sin( time * 0.6 ) * 30;
    greenBulb.position.x = Math.cos( time * 0.3 ) * 30;
    greenBulb.position.y = Math.sin( time * 0.5 ) * 40;
    greenBulb.position.z = Math.sin( time * 0.6 ) * 30;

    light3.position.x = Math.sin( time * 0.7 ) * 30;
    light3.position.y = Math.cos( time * 0.3 ) * 40;
    light3.position.z = Math.sin( time * 0.5 ) * 30;
    blueBulb.position.x = Math.sin( time * 0.7 ) * 30;
    blueBulb.position.y = Math.cos( time * 0.3 ) * 40;
    blueBulb.position.z = Math.sin( time * 0.5 ) * 30;

    c1.rotation.x += .01;
    c1.rotation.y += .01;
    c1.rotation.z += .01;
}

// draw scene
let render = () => {
    renderer.render( scene, camera );
}

let GameLoop = () => {
    requestAnimationFrame( GameLoop )
    update();
    render();
}


GameLoop();


form.addEventListener('submit', e => {
    e.preventDefault();
    let shape = form.geometry.value;
    switch(shape) {
        case 'cube':
            scene.remove(c1);
            c1 = new THREE.Mesh( new THREE.BoxGeometry(20, 20, 20), material );
            scene.add(c1);
            break;
        case 'circle':
            scene.remove(c1);
            c1 = new THREE.Mesh(new THREE.CircleGeometry(20, 32), material);
            scene.add(c1);
            break;
        case 'dodecahedron':
            scene.remove(c1);
            c1 = new THREE.Mesh(new THREE.DodecahedronGeometry(10, 0), material);
            scene.add(c1);
            break;
        case 'sphere':
            scene.remove(c1);
            c1 = new THREE.Mesh(new THREE.SphereGeometry(10, 32,32), material)
            scene.add(c1);
            break;
        case 'icosahedron':
            scene.remove(c1);
            c1 = new THREE.Mesh(new THREE.IcosahedronGeometry(10, 1), material);
            scene.add(c1);
            break;
        case 'octahedron':
            scene.remove(c1);
            c1 = new THREE.Mesh(new THREE.OctahedronGeometry(10, 0), material);
            scene.add(c1);
            break;
        case 'tetrahedron':
            scene.remove(c1);
            c1 = new THREE.Mesh(new THREE.TetrahedronGeometry(20, 0), material);
            scene.add(c1);
            break;
        case 'torus':
            scene.remove(c1);
            c1 = new THREE.Mesh(new THREE.TorusGeometry(10, 3, 16, 100), material);
            scene.add(c1);
            break;
        case 'torusknot':
            scene.remove(c1);
            c1 = new THREE.Mesh(new THREE.TorusKnotGeometry(10, 3, 100, 16), material);
            scene.add(c1);
            break;
        default:
            break;
    }
})
