# Facial-Recognition-with-database
Sistema de reconocimiento facial en javascript con soporte de base de datos
Usando Face-api.js y MySql, ademas de php para manejar consultas a la base de datos
El sitema se basa en usar Face-api.js para generar un vector unico por cada rostro y guardarlo en una base de datos para su posterior uso.
## Proyecto descontinuado
El sistema completo se traslado a el repositorio https://github.com/Bemused5/ISW2.git en el cual se encuentra terminado y listo para ejecutarse

## Muestra del sistema:
## Interfaz de usuario
<img width="1864" height="925" alt="image" src="https://github.com/user-attachments/assets/284cd7c0-6211-460e-96be-720e2eea4514" />
## Detección de una persona no registrada
<img width="1833" height="912" alt="image" src="https://github.com/user-attachments/assets/0a7af2e3-9f7e-4fb5-97ca-938b9fa4adc5" />
Automaticamente se detecta si una persona no esta registrada, puedes llenar el formulario y dar click en el boton Registrar nuevo para guardarlo en la base de datos (no se guarda la imagen)
## Detección de una persona previamente registrada
<img width="1827" height="902" alt="image" src="https://github.com/user-attachments/assets/0aeddc9b-9e17-4bbc-b256-184799e3a222" />
Si se detecta una persona coincidente en la base de datos, muestra sus datos en la sección del formulario con la capacidad de actualizar
## Imagen coincidente con baja certeza
<img width="1835" height="915" alt="image" src="https://github.com/user-attachments/assets/7b3e825c-a880-40a2-89a0-1e80851c8e73" />
Al detetar con baja certeza, se le solicitara al usuario confirmar si es la persona que tuvo mas parecido, si selecciona no, se procedera al registro como si fuera una persona nueva.
<img width="773" height="751" alt="image" src="https://github.com/user-attachments/assets/1caf3817-edab-42a6-a141-4bf8f9fd29c3" />
En caso de confirmar se mostrara los datos y se podra registrar la cara sin crear una persona nueva.


