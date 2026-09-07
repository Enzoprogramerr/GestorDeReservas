• ✔️ Usa Postman.
• ✔️ Guarda cada endpoint en una Collection.
• ✔️ Deja el JSON "plantilla" armado.
• ✔️ Sólo modifica los valores cuando hagas pruebas.

# Controller → Validación de la petición HTTP

El body existe?
¿El body tiene el formato esperado?
¿El parámetro id es un número?
¿La fecha tiene un formato válido?

# Service → Reglas de negocio

Los ID de cada cliente son generados por la base de datos.
La fecha de fin debe ser mayor que la fecha de inicio.
Una reserva no puede solaparse con otra.
El alojamiento debe existir.
El cliente debe existir.

# GestorDeReservas

Aplicación CRUD para gestión de reservas de cabañas y clientes.
-README.md: explica qué hace la app, cómo instalarla y cómo correrla.
-.gitignore: excluí node_modules, .env, y otros archivos sensibles.
-Screenshots: podés subir imágenes de la app en acción para que se vea atractiva.
