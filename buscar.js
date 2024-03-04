
function buscar(){
    var busqueda = document.getElementById("valor").value
    var url = 'datospersonales.xlsx'; // Coloca aquí la ruta del archivo en el servidor
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      var data = new Uint8Array(xhr.response);
      var workbook = XLSX.read(data, { type: 'array' });
      var sheetName = workbook.SheetNames[0];
      var sheet = workbook.Sheets[sheetName];
      var encontrado = false;
      var columna = document.getElementById("columna").value
      var dataArray = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      var resultados = [];
console.log(columna)
        switch(columna){
            case "1":
                
                         for (var i = 1; i < dataArray.length; i++) {
                              var dato = dataArray[i]
      
                             var numero =dato[0]
                             console.log(typeof(numero))
                                if (numero.toString().startsWith(busqueda)) {
                                     encontrado = true;
                                     console.log("El número", busqueda, "se encontró en la posición", i, "el numero es ", numero);

                                    resultados.push(dataArray[i])
                                    console.log(resultados)


          
        }
      }

      
      
      if (!encontrado) {
        console.log("El número", busqueda, "no se encontró en el array.");
      }

      break;
             case "2":

             for (var i = 1; i < dataArray.length; i++) {
                var dato = dataArray[i]

               var numero =dato[1]
               console.log(typeof(numero))
               if(numero == undefined){
                console.log("vacio")
               }
               else{

              

                  if (numero.toString().startsWith(busqueda)) {
                       encontrado = true;
                       console.log("El número", busqueda, "se encontró en la posición", i, "el numero es ", numero);

                      resultados.push(dataArray[i])
                      console.log(resultados)



}
}

}

if (!encontrado) {
console.log("El número", busqueda, "no se encontró en el array.");
}

break;


            case "3":

            for (var i = 1; i < dataArray.length; i++) {
                var dato = dataArray[i]

               var numero =dato[2]
               console.log(typeof(numero))
               if(numero == undefined){
                console.log("vacio")
               }
               else{

              

                  if (numero.toString().startsWith(busqueda)) {
                       encontrado = true;
                       console.log("El número", busqueda, "se encontró en la posición", i, "el numero es ", numero);

                      resultados.push(dataArray[i])
                      console.log(resultados)



}
}

}

if (!encontrado) {
console.log("El número", busqueda, "no se encontró en el array.");
}
            
                break;

                case "4":

                for (var i = 1; i < dataArray.length; i++) {
                    var dato = dataArray[i]
    
                   var numero =dato[3]
                   console.log(typeof(numero))
                   if(numero == undefined){
                    console.log("vacio")
                   }
                   else{
    
                  
    
                      if (numero.toString().startsWith(busqueda)) {
                           encontrado = true;
                           console.log("El número", busqueda, "se encontró en la posición", i, "el numero es ", numero);
    
                          resultados.push(dataArray[i])
                          console.log(resultados)
    
    
    
    }
    }
    
    }
    
    if (!encontrado) {
    console.log("El número", busqueda, "no se encontró en el array.");
    }
                

                    break;
        }

      // Crear la tabla HTML
      var table = '<center><table class="tablita">';
      table+='<td>Clave Cliente</td>'
      table+='<td>Nombre Contacto</td>'
      table+='<td>Correo</td>'
      table+='<td>Telefono contacto</td>'
      for (var i = 0; i < resultados.length; i++) {
        var row = resultados[i];
        table += '<tr>';
        for (var j = 0; j < row.length; j++) {
          table += '<td>' + row[j] + '</td>';
        }
        table += '</tr>';
      }
      table += '</table></center>';
  
      // Mostrar la tabla en el contenedor HTML
      document.getElementById('tableContainer').innerHTML = table;
    };
    xhr.send();
  };