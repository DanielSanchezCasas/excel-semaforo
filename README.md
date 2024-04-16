# Generador de Archivos Excel con Estilo Condicional

Este proyecto consiste en un generador de archivos Excel que aplica estilos condicionales a las celdas según criterios específicos. Es ideal para crear informes con indicadores visuales en Excel.

Utiliza un archivo JSON como demostración, asignando estilos dinámicos a las celdas de una columna según un rango de valores, lo que permite la generación y descarga del archivo en formato '.xlsx' desde el cliente.


### Construido con 

* [![Exceljs][Exceljs]][Exceljs-url]
* [![Node][Node.js]][Node-url]
* [![Vue][Vue.js]][Vue-url]
* ![Javascript][js]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Instalación

1. Clona este repositorio en tu máquina local usando el siguiente comando:
   ```sh
   git clone https://github.com/DanielSanchezCasas/excel-semaforo.git
   ```
2. Instalar los paquetes NPM
   ```sh
   npm install
   ```
3. Iniciar 
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Uso

Para generar un archivo Excel con estilo condicional, utiliza la función descargarIndicadores(datos, fileName), la cual está importada desde "./utils/exportIndicadoresExcel". Esta función toma dos parámetros: "datos", un array de objetos que representan los datos a incluir en el archivo Excel, y "fileName", el nombre del archivo que se descargará.

Además, hay una función llamada nombrarHoja(workbook, namesheet) que recibe dos parámetros: "workbook", el archivo de cálculo creado, y "namesheet", el nombre de la hoja de cálculo que se creará y utilizará.

Dentro del archivo "exportIndicadoresExcel.js", encontrarás un método llamado agregarDatos(worksheet, datos, colStyle). Este método toma tres parámetros: "worksheet", la hoja de cálculo creada; "datos", un array de objetos que representan los datos a incluir en el archivo Excel; y "colStyle", que define la columna a la que se aplicarán los estilos dinámicamente según corresponda.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distribuido bajo la licencia MIT.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->

[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Node.js]:https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=Node.js
[Node-url]: https://nodejs.org/en
[JS]: https://img.shields.io/badge/js-35495E?style=for-the-badge&logo=javascript
[Exceljs]:https://img.shields.io/badge/exceljs-35495E?style=for-the-badge&logo=npm
[Exceljs-url]: https://www.npmjs.com/package/exceljs


