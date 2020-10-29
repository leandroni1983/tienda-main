
            
// en este array se guardaran lo productos que se vaya agregando a la compra
let miCarrito = [];
let productos = [];
let categorias = [];

// esta es mi lista de productos

fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=>catalogo(json))

// esta funcion recorre el listado de productos que recibe por parametro
// y en cada iteracion dibuja la tarjeta del producto en la pagina, tambien guarda dos array uno de todos los productos y otro de las categorias
function catalogo(json){
    let b = [];
    json.forEach(producto => {
        productos.push(producto);
        b.push(producto.category);
        categorias = Array.from(new Set(b));  
        dibujarProductos(productos);
    });
    
// dibuja el menu de  categorias correspondientes. 
    categorias.forEach(element => {
    let a = document.getElementById('categorias');
    let b = document.createElement('div');
    b.innerHTML = `<a href="#" class="list-group-item" onclick = 'dibujaProductoCategoria("`+element+`")'>`+element+`</a>`;
    a.appendChild(b);   
    });
  
}
// dibuja producto por producto en el index
function dibujarProductos(productos){
    
    let a = document.getElementById('catalogo');
    a.innerHTML = '';
    productos.forEach(producto => {
    let catalogo = document.getElementById("catalogo");
    var divProducto = document.createElement('div');
    divProducto.setAttribute("class","col-lg-4 col-md-6 mb-4")
    divProducto.innerHTML = `<div class="card h-100">
    <a href="#"><img class="card-img-top" src="`+producto.image+`" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">
    <a href="#">`+producto.title+`</a>
    </h4>
    <h5>`+producto.price+`</h5>
    <p class="card-text">`+producto.description+`</p>
    <button type="button"  class="btn btn-primary btn-sm" onclick='agregarACarrito(`+producto.id+`)'>Agregar</button>
    </div>
    <div class="card-footer">
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
    </div>`;
    catalogo.appendChild(divProducto);
    
    });
   
}


function dibujaProductoCategoria(element){
    //filtro los productos de la caracteristica seleccionada
    let a = productos.filter(producto => producto.category == element);
    // borra los productos del index.
    let catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = '';
    //dibuja los productos filtrados por categoria.
    a.forEach(producto => {
        let catalogo = document.getElementById("catalogo");
        let divProducto = document.createElement('div');
        divProducto.setAttribute("class","col-lg-4 col-md-6 mb-4")
        divProducto.innerHTML = `<div class="card h-100">
        <a href="#"><img class="card-img-top" src="`+producto.image+`" alt=""></a>
        <div class="card-body">
        <h4 class="card-title">
        <a href="#">`+producto.title+`</a>
        </h4>
        <h5>`+producto.price+`</h5>
        <p class="card-text">`+producto.description+`</p>
        <button type="button"  class="btn btn-primary btn-sm" onclick='agregarACarrito(`+producto.id+`)'>Agregar</button>
        </div>
        <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
        </div>`;
        catalogo.appendChild(divProducto);

    });

}

// esta funcion ingresa al array de productos seleccionados el producto
// del listado total cuyo id ("i") recible como parametro
function agregarACarrito(i){
    productos.forEach(producto => {
        if(i==producto.id){
            miCarrito.push(producto);
        }
    });
    document.getElementById('cantidadcarrito').innerHTML = miCarrito.length;
    //console.log(miCarrito);   
    localStorage.setItem('carrito',JSON.stringify(miCarrito));
  
}
// si el carrito esta en el localstorage lo trae y lo guarda en la variable miCarrito y dibuja la cantidad en el index

function carrito(){
    if (localStorage.carrito !== undefined){
        miCarrito = JSON.parse(localStorage.getItem('carrito'))
        document.getElementById('cantidadcarrito').innerHTML = miCarrito.length; 
        //console.log(miCarrito);
    } 
  
}

