creada con el npx comando create-react-app e inicializada con el npm start, se aloja en el puerto http://localhost:3000/

Desafio:

construye una lista que contenga tres intervalos de horarios de 30 m que empiece a las 8 am y termine a las 8:30am,  disponibilidad de 1 motociclistas cada 1 minutos contando con un total de 2 motociclistas, cada vez que se hace click se  inica un contador y se da el recuros de motociclista y se marca la caja en verde, si no hay motociclistas disponibles se marca en rojo y no debe dejar tomar el horarios
_________________________________________________________________________


Hola! Yo soy Jorge Ochipinti y realicé esté desafío dictado por Nicolas Schurman, youtuber, ingeniero de software, quien comentó que realizó este para ingresar a trabajar en nueva zelanda.

utilizamos useState para crear las variales y sus futuros updates, lo más complejo de todo el desafío fue calcular la fecha futura para realizar el temporizador.

para conseguirlo cree la constante getTime a la cual se le pasaron 3 argumentos, esto porque los set del useState cambian de acuerdo a la logica aplicada de acuerdo al funcionamiento. Se calcula una fecha futura mediante los metodos del Date la cual solo va a ser futura por un minuto, luego en un setInterval que se le otorgo la const idInterval, y su periodo se repite cada 500 milisegundos, se realiza la resta de la fecha futura con la creada en el momento en que se lanza la función, pero todo esto esta en milisegundos, asi que se calculan los minutos y los segundos por separado para obtener el así el tiempo restante, en el mismo set Inverval una vez que el tiempo restante es igual 0 menor a cero, se detiene mediante el clearInterval que se encuentra dentro de un setTiemout para darle el tiempito que necesita para finalizar todas las funciones antes de que muera.

por otra parte se creo la constante HandleClick a la cual se le pasaron cuatro argumentos, en ella tenemos un condicional, este condicional sirve para actualizar el numero de motociclistas disponibles, dehabilitar el boton, poner en true el servicio, todo esto mediante sus correspondientes set del useState, excepto la del button que se la pasamos en las props, y por ulimo lanza la funcion gettime con los argumentos pasados en las props.

Mediante el uso de useEffet le otorgamos la logica necesaria para que cuando se clickee el boton cambien los colores y se habilite o deshabilite de acuerdo al numero de motociclistas disponibles y cambie los colores del fondo de acuerdo a si tiene el servicio o no

para los estilos use Styled components, para mostrar y ocultar el contador uses spread operator y eso es basicamente todo, muchas gracias

mas allá de todo, no pasé el desafio porque era hacerlo en una hora y tarde 2 horas ajajjajajaja
