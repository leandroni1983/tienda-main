let miCarrito = JSON.parse(localStorage.getItem('carrito'))
let valorTotal = 0;


miCarrito.forEach((producto,index) => {
    //console.log(producto);
    valorTotal = valorTotal + producto.price;
    //console.log(index)
    dibujarchekout(producto,index);
});

function dibujarchekout(producto,index){
    let pcarritos = document.getElementById('productosencarrito');
    let prod = document.createElement('div');
    prod.innerHTML =  `<div class="row" >
    <div class="col-12 col-sm-12 col-md-2 text-center">
            <img class="img-responsive" src="`+producto.image+`" alt="prewiew" width="120" height="80">
    </div>
    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
        <h4 class="product-name"><strong>`+producto.title+`</strong></h4>
        <h4>
            <small>`+producto.category+`</small>
        </h4>
    </div>
    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
            <h6><strong>`+producto.price+`<span class="text-muted">x</span></strong></h6>
        </div>
        <div class="col-4 col-sm-4 col-md-4">
            <div class="quantity">
                <input type="button" value="+" class="plus">
                <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                       size="4">
                <input type="button" value="-" class="minus">
            </div>
            <div class="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" class="btn btn-outline-danger btn-xs" onclick = 'eliminarProducto(`+index+`)'>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
        </div> 
        <hr>`;
    document.getElementById('total').innerHTML = `<b>Total $`+valorTotal+`</b>`;
    pcarritos.appendChild(prod);
}

function eliminarProducto(index){
    miCarrito.splice(index,1);
    localStorage.setItem('carrito',JSON.stringify(miCarrito));
    window.location.reload();
}
