
# Mercadolibre-webapp
Es una aplicación web que contiene tres componentes principales: 
* La caja de búsqueda
* La visualización de resultados
* Y la descripción del detalle del producto

## ¿Cómo ejecutar el proyecto ?
1. Clonar e ingresar a la carpeta mercadolibre-webapp por consola
2. Este proyecto usa docker, por favor ejecutar el siguiente comando en la consola:
```bash
docker-compose up --build -d
```
3. El frontend se ejecuta por el puerto 5011 y el backend por el puerto 4011. Debe aparecer en la consola la siguiente salida:

```
...
frontend_1  | 
frontend_1  | INFO: Accepting connections at http://localhost:5011
```

```
...
backend_1   | > node ./index.js
backend_1   | 
backend_1   | Backend express MercadoLibre listening on port 4011
```

## ¿Qué stack tecnológico utiliza este proyecto ?
###  Para el frontend:
1. Html
2. Javascript: React con Router, Redux, StyleComponent, React-lazyload
3. css: scss, bootstrap
### Para el backend:
1. Node con express, node-cache, axios

## Resultado de prueba con Lighthouse en ambiente local

![https://github.com/sumelio/mercadolibre-webapp/blob/main/lightHouse.png](https://github.com/sumelio/mercadolibre-webapp/blob/main/lightHouse.png)

## Componentes en el proyecto frontend

![https://github.com/sumelio/mercadolibre-webapp/blob/main/M.jpg](https://github.com/sumelio/mercadolibre-webapp/blob/main/M.jpg)

