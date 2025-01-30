// Using Node.js `require()`
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ignaciopalenquedaw:lNhl6xyzF9CJ0Zjl@cluster0.qoiwp.mongodb.net/almacen')
  .then(() => console.log('Connected!'));

  const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
  })

  const Ordenador = mongoose.model('Ordenador',ordenadorSchema,'ordenadores')

const buscarPrimero =()=>{
    
    //buscamos el primer registro
    Ordenador.findOne()
    .then( ordenador=>{
    if(ordenador){
      console.log('El primer ordenador encontrado',ordenador)
    }else{
      console.log('No se ha encontrado ningun registro')
    }
   
    })
    .catch(err=>console.error('Error al obtener el ordenador',err));
   
     }

     const buscarTodos =()=>{
    
        //buscamos todos registro
        Ordenador.find()
        .then( ordenadores=>{
        if(ordenadores.length > 0){
          console.log('Ordenadores encontrados',ordenadores)
        }else{
          console.log('No se ha encontrado ningun registro')
        }
       
        })
        .catch(err=>console.error('Error al obtener los ordenadores',err));
       
         }

         const buscarPorId =(id)=>{
    
            //buscamos el primer registro
            Ordenador.findById(id)
            .then( ordenador=>{
            if(ordenador){
              console.log('El primer ordenador encontrado',ordenador)
            }else{
              console.log('No se ha encontrado ningun registro con el id' +id)
            }
           
            })
            .catch(err=>console.error('Error al obtener el ordenador',err));
           
             }
           
 const buscarPrecioMayor =(precioMayor)=>{
    
                //buscamos el primer registro
                Ordenador.find({precio:{$gt:precioMayor}})
                .then( ordenadores=>{
                if(ordenadores.length>0){
                  console.log('Ordenadores con precio mayor a '+precioMayor+' encontrados',ordenadores)
                }else{
                  console.log('No se ha encontrado ningun ordenador con precio mayor a' +precioMayor)
                }
               
                })
                .catch(err=>console.error('Error al obtener el ordenador',err));
               
                 }
       
 const crearNuevoOrdenador= (m,p)=>{
 // Crear un nuevo ordenador
 const nuevoOrdenador = new Ordenador({
    marca: m,
    precio: p
  });
  // Guardar el ordenador en la base de datos
  nuevoOrdenador.save()
    .then(ordenador => console.log('Ordenador guardado:', ordenador))
    .catch(err => console.error('Error al guardar el ordenador:', err));

}
       
const actualizarOrdenador = (idOrdenador, nuevoPrecio)=>{
    //le pasamos el idOrdenador, le pasamos el objeto precio con nuevo precio
    //{new:true} para devolver el objeto actualizado
    Ordenador.findByIdAndUpdate(idOrdenador, { precio: nuevoPrecio }, { new: true })
  .then(ordenadorActualizado => {
    if (ordenadorActualizado) {
      console.log('Ordenador actualizado:', ordenadorActualizado);
    } else {
      console.log('No se encontró ningún ordenador con ese ID.');
    }
  })
  .catch(err => console.error('Error al actualizar el ordenador:', err));

}

const borrarOrdenador = (idOrdenadorParaBorrar)=>{
    Ordenador.findByIdAndDelete(idOrdenadorParaBorrar)
  .then(ordenadorEliminado => {
    if (ordenadorEliminado) {
      console.log('Ordenador eliminado:', ordenadorEliminado);
    } else {
      console.log('No se encontró ningún ordenador con ese ID.');
    }
  })
  .catch(err => console.error('Error al eliminar el ordenador:', err));

}

     module.exports = {buscarPrimero, buscarTodos, Ordenador, buscarPorId, buscarPrecioMayor, crearNuevoOrdenador, actualizarOrdenador, borrarOrdenador}