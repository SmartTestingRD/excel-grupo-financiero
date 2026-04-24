# REGISTRO MAESTRO DE HALLAZGOS: AUDITORÍA 360° EXCEL

## HALL-SEC-003: Riesgo de Phishing (El "entrenamiento" al usuario)

**Descripción:** Para procesos críticos como el Onboarding (crear una cuenta), la aplicación no lo hace de forma interna. Al hacer clic, la app te "expulsa" y abre un navegador (WebView) que carga la dirección app.excel.com.do.

**Por qué es crítico:** Como el usuario ya se acostumbró a que "para registrarse en Excel hay que salir a una web", el día de mañana un atacante puede enviarle un correo o un mensaje con un link falso (ejemplo: app-excel-seguro.com). El cliente, ya "entrenado" por la propia app de Excel a poner sus datos en una web externa, no sospechará que está entregando sus credenciales a un extraño.

**Evidencia:** Se detectó que el registro de usuarios rompe la seguridad de la "burbuja" de la app nativa.

---

## HALL-BUS-001: La app como un simple "lanzador de links"

**Descripción:** En el menú lateral de la aplicación, opciones como "Tarifarios", "Información de Interés" o "Noticias" no muestran la información dentro de la app. Al tocarlas, la aplicación simplemente actúa como un botón que abre el navegador de internet del celular (Safari o Chrome).

**Por qué es crítico:** Esto mata el "autoservicio". El usuario siente que la app no sirve para mucho más que ver su saldo, porque para cualquier gestión de consulta lo manda a la página web. Esto aumenta el costo operativo porque el cliente termina llamando a un asesor por teléfono al no encontrar una solución integrada y fluida dentro de la herramienta móvil.

---

## HALL-API-004: Código "parchado" (Inconsistencia de librerías)

**Descripción:** Los programadores usaron herramientas distintas para la misma tarea. La mayor parte de la app usa una librería moderna llamada Dio para hablar con el servidor, pero el módulo de "Detalles de Inversión" usa una mucho más básica llamada http.Client.

**Por qué es crítico:** Esto es como tener una casa donde la mitad de los enchufes son de un tipo y la otra mitad de otro. Si quieres poner un filtro de seguridad general para toda la app (como un sistema que detecte ataques), solo funcionará en la mitad de las pantallas. La otra mitad (Detalles de Inversión) se quedará desprotegida porque usa un "idioma" técnico diferente que no acepta los mismos parches de seguridad.

---

## HALL-ECO-001: El costo de no arreglar los "huecos"

**Descripción:** Este hallazgo se refiere a cuánto dinero podría perder Excel por ignorar fallos específicos como el de la carga de archivos.

**El problema real (Ejemplo de la carga de archivos):** Existe un sitio (UploadFile) donde los clientes suben sus comprobantes de depósito. La auditoría descubrió que ese sitio no pide contraseña (Token Bearer). Cualquier persona que sepa la dirección técnica puede subir archivos basura o virus directamente al SharePoint de Excel.

**Por qué es crítico:** Si un atacante llena el almacenamiento de Excel con basura o logra meter un virus en los documentos de los clientes, el costo de limpiar ese desastre, pagar multas por violación de privacidad y recuperar la confianza de los clientes es muchísimo más alto que el costo de contratar a un programador para que le ponga una contraseña a ese botón hoy mismo.
