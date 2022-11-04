# Programación Frontend - Práctica 1

- - -
**Caso: Abogabot**

Descripción:
- Es un despacho de abogados que quiere automatizar las demandas de sus clientes, esto lo harán a traves de una página web llenando un formulario.
- Al momento de llenar el formulario se manda al proceso de pago para finalizar la transacción.
- Para dar seguimiento a su demanda, el cliente crea una cuenta en la plataforma y verá el seguimiento de cada una de las actualizaciones del proceso legal.
- El administrador del sitio recibe la notificación de una nueva demanda y con los datos llenados del formulario se crea automaticamente el documento legal en formato word para empezar el proceso.
- El administrador recibe el pago y debe de ser capaz de verlo en un dashboard para ver la cantidad de ingresos recibidos.
- El administrador actualiza el proceso de la demanda y agrega comentarios en cada paso del proceso.
- Al usuario le llegan correos de notificación para saber el avance de su proceso.
- La página debe de ser responsive para poderla ver desde el celular.
- La preferencia de colores del cliente es azul marino y blanco, pero acepta propuestas.
- - -

## Levantamiento de requerimientos

### Necesidades del cliente
La empresa "Abogabot", que se desempeña como un despacho de abogados enfocados en la atención de diversas solicitudes de demandas por sus clientes, para lo que requiere poder gestionar el estado en el que se encuentran las demandas de sus clientes así como los procesos de pagos por parte de los propios clientes y poder así iniciar los procesos legales requeridos correspondientes, además de poder mantener informados a sus clientes en relación al avance de su proceso legal mediante correo electrónico.

De los anterior, determinamos los requerimientos de cada entidad:

#### EMPRESA
* Contar con un sitio web para la gestión de demandas solicitadas por cada cliente.
* Ofrecer diversos medios de pago para que el cliente pueda iniciar con su solicitud.
* Solicta un sitio web "responsive" para que el sitio web sea accesible de forma correcta en diversos dispositivos electrónicos (smartphones, tablets, PC, etc)

### CLIENTE
* Podrá inciar su solicitud de servicio mediante el llenado del formulario para tal efecto (no es necseario estar registrado en la plataforma).
* Una vez enviado el formulario, el cliente será dirigido a el proceso de pago para que se incie su proceso legal.
* En caso de requerir un seguimiento a su proceso de demanda, el cliente se registrará en la plataforma y tendrá acceso a un "dashboard" con la información relevente de su proceso
* El usuario recibirá mensajes por email acerca de las actualizaciones del avance de su proceso.

### ADMINISTRADOR
* Contar con un "dashboard" gestionado por un administrador que dará seguimiento a las solicitudes de sus clientes.
* El administrador podrá ver los ingresos recibidos en el día.
* El administrador podrá cambiar el estado del proceso de cada demanda y también podrá agregar comentarios en cada actualización.

### DISEÑO
* El cliente no tienen una idea clara acerca del diseño, pero hace refiere que tiene preferencia por el color azul marino y el color blanco, dejando libertad para la presentación de propuestas a criterio del desarrollador/diseñador.
* En un enfoque general, se pueden realizar propuestas de una paleta de colores, fuentes e imágenes