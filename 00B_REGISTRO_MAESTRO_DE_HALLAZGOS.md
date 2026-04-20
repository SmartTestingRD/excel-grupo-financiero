# REGISTRO MAESTRO DE HALLAZGOS (00B)
## Auditoría Integral - Excel Puesto de Bolsa

Este registro consolida todos los hallazgos técnicos, funcionales y de negocio identificados durante la auditoría.

---

### HALL-UX-001 - Fragmentación de experiencia por uso de WebViews en procesos críticos

#### **1. Identificación**
- **Categoría / Subcategoría**: UX/UI / Arquitectura de Información
- **Tipificación**: Brecha UX/UI
- **Severidad / Prioridad**: High / P2

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: El proceso de creación de cuenta y onboarding se redirige a un WebView externo en lugar de ser un flujo nativo integrado.
- **Impacto de Negocio**: Genera una percepción de "aplicación incompleta" o insegura, aumentando la tasa de abandono durante la captación de nuevos clientes.
- **Consecuencia de Omisión**: Pérdida de prospectos digitales que esperan una experiencia premium y fluida.

#### **3. Lectura Técnica**
- **Descripción**: La aplicación rompe la continuidad visual y de rendimiento al cargar una URL externa (`app.excel.com.do`) para el registro de usuarios. Esto degrada la experiencia táctil y de respuesta.
- **Módulo / Flujo**: Onboarding / Creación de cuenta.
- **Evidencia**: EVID-IMG-013, EVID-VID-002.
- **Riesgo Técnico**: Dependencia de conectividad web optimizada dentro del contenedor móvil y dificultad para manejar estados de error complejos en el WebView.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Priorizar la nativización del flujo de apertura de cuenta.
- **Recomendación Técnica**: Re-implementar el formulario de registro utilizando widgets nativos que se comuniquen directamente con la API.
- **Acción Estructural**: Rediseñar el onboarding como una experiencia móvil de 3-4 pasos nativos.

---

### HALL-UX-002 - Disonancia semántica y layout ineficiente en recuperación de acceso

#### **1. Identificación**
- **Categoría / Subcategoría**: UX/UI / Diseño de Interacción
- **Tipificación**: Debilidad de diseño
- **Severidad / Prioridad**: Medium / P3

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La pantalla de "Restablecer contraseña" utiliza un encabezado de "¡Bienvenido!", lo cual es semánticamente incorrecto para un usuario que ha perdido su acceso. Además, las alertas de éxito se visualizan de forma comprimida.
- **Impacto de Negocio**: Confusión del usuario en momentos de estrés (pérdida de contraseña), afectando la confianza en el sistema.
- **Consecuencia de Omisión**: Incremento de tickets de soporte por usuarios que no perciben claridad en el proceso de recuperación.

#### **3. Lectura Técnica**
- **Descripción**: Uso inconsistente de cabeceras genéricas. La alerta de éxito aparece incrustada en un layout con márgenes insuficientes, reduciendo la visibilidad del mensaje de confirmación.
- **Módulo / Flujo**: Autenticación / Reset Password.
- **Evidencia**: EVID-IMG-007, EVID-IMG-008, EVID-VID-006.
- **Riesgo Técnico**: Pobre manejo de jerarquía visual y estados de notificación.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Ajustar el lenguaje y diseño de las pantallas de soporte.
- **Recomendación Técnica**: Cambiar cabeceras por textos contextuales (ej. "Recuperar acceso") y estandarizar componentes de notificación (Toasts o Snacking bars).
- **Quick Win**: Corregir el texto del encabezado "¡Bienvenido!" de inmediato.

---

### HALL-UX-003 - Indiferenciación operativa entre flujos de Aporte y Rescate

#### **1. Identificación**
- **Categoría / Subcategoría**: UX/UI / Claridad Operacional
- **Tipificación**: Brecha UX/UI
- **Severidad / Prioridad**: Medium / P2

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Los flujos de inversión (Aporte) y retiro (Rescate) utilizan interfaces idénticas sin distinción visual cromática o iconográfica.
- **Impacto de Negocio**: Riesgo operativo de que el inversor ejecute una acción contraria a la deseada (ej. rescatar en lugar de aportar) por falta de señales visuales claras.
- **Consecuencia de Omisión**: Errores transaccionales y reclamos de clientes.

#### **3. Lectura Técnica**
- **Descripción**: La reutilización de componentes de lista de selección sin personalización por tipo de operación impide que el usuario identifique el "modo" en el que se encuentra de forma subconsciente.
- **Módulo / Flujo**: Transacciones / Aportes y Rescates.
- **Evidencia**: EVID-IMG-003, EVID-IMG-012, EVID-VID-007, EVID-VID-009.
- **Riesgo Técnico**: Falta de estados visuales diferenciados en el sistema de diseño.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Implementar un código de colores operacional (ej. Verde para Aportes, Naranja/Rojo para Rescates).
- **Recomendación Técnica**: Inyectar estilos diferenciados a los selectores basados en el contexto de la transacción.
- **Quick Win**: Añadir etiquetas de "Modo Inversión" o "Modo Retiro" claramente visibles.

---

### HALL-UI-001 - Estética visual desactualizada y alta densidad de información en Balances

#### **1. Identificación**
- **Categoría / Subcategoría**: UX/UI / Diseño Visual
- **Tipificación**: Brecha competitiva
- **Severidad / Prioridad**: Low / P4

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: El diseño del dashboard principal se percibe desactualizado frente a las interfaces minimalistas modernas. La presentación de múltiples cuentas genera una carga cognitiva alta.
- **Impacto de Negocio**: Percepción de Excel como una empresa "tradicional" y lenta digitalmente, alejándose del segmento de inversores jóvenes/tecnológicos.
- **Consecuencia de Omisión**: Pérdida de engagement y menor frecuencia de uso de la app como herramienta de monitoreo.

#### **3. Lectura Técnica**
- **Descripción**: Uso excesivo de sombras, bordes marcados y falta de jerarquía de fuentes en la vista de tarjetas de cuenta. La información de balances en dos divisas está amontonada.
- **Módulo / Flujo**: Dashboard / Balances.
- **Evidencia**: EVID-IMG-004, EVID-VID-001.
- **Riesgo Técnico**: Deuda técnica de diseño visual que dificulta la adopción de nuevas tendencias (ej. modo oscuro).

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Planificar un rediseño visual "Premium" que simplifique la lectura del patrimonio.
- **Recomendación Técnica**: Migrar a un sistema de diseño basado en tarjetas minimalistas con mejor uso de espacios en blanco.
- **Acción Estructural**: Implementar gráficas de distribución de portafolio para reducir la carga de lectura numérica.

---

### HALL-BUS-001 - Limitación de autoservicio por dependencia de navegación externa

#### **1. Identificación**
- **Categoría / Subcategoría**: Negocio / Funcionalidad
- **Tipificación**: Oportunidad perdida
- **Severidad / Prioridad**: Medium / P3

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Una parte significativa de las opciones en el menú lateral son enlaces externos a la web, lo que rompe la experiencia de "autoservicio" dentro de la aplicación móvil.
- **Impacto de Negocio**: Menor retención del usuario dentro del ecosistema móvil y percepción de que la app es solo un visor de balances.
- **Consecuencia de Omisión**: El usuario termina prefiriendo la web o la atención telefónica para gestiones que deberían ser móviles.

#### **3. Lectura Técnica**
- **Descripción**: El menú lateral funciona parcialmente como un lanzador de URLs externas en lugar de integrar el contenido de manera nativa o mediante servicios integrados.
- **Módulo / Flujo**: Perfil / Menú lateral.
- **Evidencia**: EVID-IMG-011, EVID-VID-005.
- **Riesgo Técnico**: Fragmentación de la lógica de negocio entre múltiples plataformas.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Integrar las consultas de "Información de Interés" y "Tarifarios" de forma nativa.
- **Recomendación Técnica**: Sanitizar los metadatos de la API y asegurar que las respuestas de error no expongan rutas de archivos del sistema.

---

### HALL-SEC-001 - Integración deficiente y baja visibilidad de autenticación biométrica

#### **1. Identificación**
- **Categoría / Subcategoría**: UX/UI / Seguridad
- **Tipificación**: Brecha de experiencia / Subutilización de capacidad
- **Severidad / Prioridad**: Medium / P2

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Aunque la aplicación cuenta con soporte para biometría (FaceID/Fingerprint), esta opción permanece oculta en la configuración profunda del perfil y no se ofrece de manera proactiva durante el onboarding o el primer inicio de sesión.
- **Impacto para Excel Puesto de Bolsa**: Baja tasa de adopción de un control de seguridad clave. El usuario percibe una app "antigua" al no ver la invitación a usar biometría desde el inicio, perdiendo la oportunidad de posicionar la app como una herramienta moderna y conveniente.
- **Consecuencia de No Atenderlo**: Los clientes continúan utilizando contraseñas fijas por desconocimiento de la función, aumentando la fricción en cada acceso y reduciendo la percepción de vanguardia tecnológica.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: La funcionalidad de activación de biometría está implementada pero "escondida" en términos de Journey Map. La brecha no es técnica, sino de diseño de experiencia: falta un componente de activación (Opt-in) inmediato tras el registro exitoso.
- **Contexto / Módulo / Flujo Afectado**: Onboarding / Login / Configuración de Perfil.
- **Evidencia Detallada**: EVID-IMG-001 (Ausencia en login inicial), EVID-INF-005.
- **Fuente de Evidencia**: Análisis de Journey y comportamiento observable (activación tardía).
- **Riesgo Técnico**: Subexplotación de las capacidades de seguridad del Keychain/Keystore del dispositivo por barreras de descubrimiento.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Integrar la invitación a activar biometría como un paso obligatorio o sugerido inmediatamente después del primer login exitoso.
- **Recomendación Técnica**: Implementar un flujo de "Interstitials" o modales de sugerencia de biometría tras la autenticación inicial, guardando la preferencia del usuario en almacenamiento persistente seguro.
- **Quick Win**: Añadir un botón visual de "Activar acceso biométrico" en el Dashboard principal si la función no está configurada aún.

---

### HALL-SEC-002 - Ausencia de "Privacy Masking" (Máscara de privacidad en multitarea)

#### **1. Identificación**
- **Categoría / Subcategoría**: Seguridad / Privacidad
- **Tipificación**: Riesgo de seguridad percibida
- **Severidad / Prioridad**: Low / P3

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La aplicación no oculta la información financiera (saldos, nombres, cuentas) cuando el usuario cambia de aplicación en el móvil (vista de multitarea/App Switcher).
- **Impacto para Excel Puesto de Bolsa**: Exposición accidental de patrimonio sensible en espacios públicos o capturas de pantalla involuntarias.
- **Consecuencia de No Atenderlo**: Debilidad en la protección de la privacidad del cliente premium, quien espera que su información financiera sea invisible para terceros.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: No se observa implementación de estados de "App Inactive" que inyecten una pantalla de seguridad o desenfoque (blur) sobre el dashboard financiero al detectar la salida del foco principal.
- **Módulo / Flujo**: Dashboard de Inversiones.
- **Evidencia Detallada**: EVID-IMG-004 (Visualización clara del patrimonio).
- **Riesgo Técnico**: Fuga visual de datos sensibles en el sistema operativo (screenshots de historial del SO).

#### **4. Acción Recomendada**
- **Recomendación Técnica**: Implementar un overlay de seguridad que se active en el evento `didChangeAppLifecycleState` de Flutter.

---

### HALL-SEC-003 - Riesgo de Phishing y degradación de confianza por uso de WebViews externos

#### **1. Identificación**
- **Categoría / Subcategoría**: Seguridad / Confianza Digital
- **Tipificación**: Debilidad de diseño
- **Severidad / Prioridad**: High / P2

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: El uso de WebViews para procesos clave (onboarding) y múltiples enlaces externos en el menú lateral debilita la "burbuja de confianza" de la aplicación.
- **Impacto para Excel Puesto de Bolsa**: Al "sacar" al usuario a contextos web o navegadores externos, se le entrena para introducir datos sensibles fuera de la app nativa, lo que aumenta la vulnerabilidad ante ataques de phishing reales.
- **Consecuencia de No Atenderlo**: Riesgo reputacional ante posibles ataques de suplantación de identidad que aprovechen esta fragmentación operativa.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: La redirección abrupta a `app.excel.com.do` dentro de un WebView (EVID-IMG-013) rompe la consistencia de sesión y certificados. Además, la presencia de múltiples enlaces externos en el menú lateral (Noticias, SAFI, etc.) fomenta la salida del flujo controlado de la app.
- **Módulo / Flujo**: Registro de usuario / Menú lateral de navegación.
- **Evidencia Detallada**: EVID-IMG-011, EVID-IMG-013, EVID-VID-002.
- **Riesgo Técnico**: Menor control sobre la seguridad del navegador embebido y mayor superficie de ataque para inyección de scripts si el sitio web de destino es comprometido.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Unificar todos los procesos críticos bajo una experiencia 100% nativa.
- **Recomendación Técnica**: Reemplazar WebViews por servicios nativos y usar "Custom Tabs" con validación de dominio solo para contenido estrictamente informativo.

---

### HALL-PER-001 - Baja resiliencia operativa y feedback visual ambiguo en procesos lentos

#### **1. Identificación**
- **Categoría / Subcategoría**: Performance / Resiliencia
- **Tipificación**: Debilidad UX / Limitación operativa
- **Severidad / Prioridad**: Medium / P3

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La aplicación carece de indicadores de progreso claros en tareas de larga duración (descarga de reportes, inicio de sesión), utilizando modales estáticos que no informan sobre la salud de la transacción.
- **Impacto para Excel Puesto de Bolsa**: El usuario puede percibir que la app se ha "congelado", provocando cierres forzados del app a mitad de una transacción financiera.
- **Consecuencia de No Atenderlo**: Inseguridad sobre si una operación (como un Aporte) se completó o no, generando tráfico innecesario a soporte.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: El uso de modales con texto estático ("Iniciando sesión...", "Descargando...") sin barras de progreso o manejo de timeouts visuales indica una arquitectura de feedback síncrona y precaria.
- **Módulo / Flujo**: Login / Estados de Cuenta.
- **Evidencia Detallada**: EVID-IMG-002, EVID-IMG-010.
- **Riesgo Técnico**: Pobre manejo de estados de red y falta de mecanismos dinámicos de recuperación (Retries) visibles para el usuario.

#### **4. Acción Recomendada**
- **Recomendación Técnica**: Implementar indicadores de carga asíncronos y esqueletos de carga (Skeletons) para mejorar la percepción de velocidad y resiliencia.

---

### HALL-PER-002 - Degradación de performance por gestión ineficiente de binarios (PDF/Base64)

#### **1. Identificación**
- **Categoría / Subcategoría**: Performance / Arquitectura
- **Tipificación**: Brecha técnica
- **Severidad / Prioridad**: Medium / P3

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La descarga de estados de cuenta mediante Base64 impacta negativamente en la velocidad de la aplicación, especialmente en dispositivos de gama media o con conexiones móviles limitadas.
- **Impacto para Excel Puesto de Bolsa**: Experiencia de usuario "pesada" y lenta, impropia de una herramienta financiera de alto nivel.
- **Consecuencia de No Atenderlo**: Los clientes premium evitarán el uso de la app para consultas documentales debido a la lentitud percibida.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: El transporte de documentos PDF sobre JSON (Base64) incrementa el tamaño del payload y requiere una decodificación que estresa la memoria RAM del celular, pudiendo causar crashes accidentales en el visor nativo si el archivo es extenso.
- **Módulo / Flujo**: Estados de Cuenta.
- **Evidencia Detallada**: EVID-API-004.
- **Acción Estructural**: Cambiar a un modelo de descarga directa vía HTTP Stream o Links firmados con expiración.

---

### HALL-API-001 - Falta de autenticación Bearer en servicio de carga de archivos (SharePoint AF)

#### **1. Identificación**
- **Categoría / Subcategoría**: Seguridad / Integración
- **Tipificación**: Vulnerabilidad
- **Severidad / Prioridad**: Critical / P1

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: El servicio encargado de recibir documentos de soporte (comprobantes de depósito, etc.) para su carga en SharePoint no utiliza el token de autenticación estándar de la aplicación.
- **Impacto para Excel Puesto de Bolsa**: Cualquier atacante que descubra la URL del servicio puede cargar archivos malintencionados o basura directamente en los repositorios de la empresa, saturando el almacenamiento o intentando comprometer estaciones de trabajo del equipo operativo.
- **Consecuencia de No Atenderlo**: Riesgo inminente de abuso de servicios en la nube, costos imprevistos de escalamiento y posible brecha de integridad en los expedientes de inversión.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: El endpoint `https://sharepointexcelaf.azurewebsites.net/api/UploadFile` explícitamente indica que "Sin token Bearer" (basado en documentación técnica). Utiliza cabeceras personalizadas (`tipoPersona`, `folder`, `fileName`) que son fácilmente deducibles o interceptables.
- **Contexto / Módulo / Flujo Afectado**: Módulo de Aportes / Flujo de carga de comprobantes.
- **Evidencia Detallada**: EVID-API-005.
- **Fuente de Evidencia**: Confirmado por Documentación (`API_DOCUMENTATION.md` L863).
- **Posible Causa Técnica**: Implementación de una Azure Function (AF) como un microservicio aislado que no se integró con el Identity Provider (IDP) principal.
- **Riesgo Técnico**: Falta de control de acceso, posible pivot hacia SharePoint y exposición de la infraestructura de Azure.
- **Áreas Impactadas**: Seguridad, Infraestructura, Desarrollo.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Inhabilitar el acceso público al servicio y exigir autenticación corporativa inmediata.
- **Recomendación Técnica**: Integrar el servicio de SharePoint AF con el sistema de autenticación centralizado (Azure AD o el IDP de la API) y validar el token Bearer en cada request.
- **Acción Estructural**: Implementar un proxy o API Gateway que unifique la política de seguridad para todos los subdominios de Excel.

#### **5. Metadatos de Análisis**
- **Dimensión**: Seguridad / API
- **Audiencia Principal**: Técnico / Seguridad
- **Nivel de Confianza**: Confirmado
- **Tipo de Evidencia**: Documental
- **Esfuerzo Estimado**: Medio
- **Horizonte Sugerido**: Inmediato

---

### HALL-API-002 - Riesgo de BOLA (Broken Object Level Authorization) en consultas de cuenta

#### **1. Identificación**
- **Categoría / Subcategoría**: Seguridad / API
- **Tipificación**: Vulnerabilidad
- **Severidad / Prioridad**: High / P1

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Existe un riesgo elevado de que un usuario autenticado pueda consultar balances y detalles de inversión de otros clientes simplemente manipulando los identificadores enviados al servidor.
- **Impacto para Excel Puesto de Bolsa**: Acceso no autorizado a información financiera sensible, violando leyes de secreto bancario y protección de datos (PII).
- **Consecuencia de No Atenderlo**: Riesgo reputacional crítico y posibles sanciones regulatorias por falta de controles de propiedad sobre los datos financieros.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: Endpoints críticos como `/api/Product/v1/GetAllProductsAccount` y `/api/Statement/v1/GetReportById` dependen de parámetros como `identificationNumber` o `RifCode` en el cuerpo del POST. No hay evidencia de que el backend valide que estos IDs pertenecen estrictamente al usuario del token Bearer actual.
- **Contexto / Módulo / Flujo Afectado**: Inversiones Dashboard / Estados de Cuenta.
- **Evidencia Detallada**: EVID-API-001, EVID-API-004, EVID-API-006.
- **Fuente de Evidencia**: Alta Inferencia basada en el diseño del contrato.
- **Posible Causa Técnica**: El backend confía en los parámetros enviados por el cliente móvil en lugar de extraer la identidad del usuario del contexto del token.
- **Riesgo Técnico**: Exposición masiva de datos mediante iteración de IDs (Insecure Direct Object Reference).

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Auditar de inmediato la validación de propiedad en la capa de servicios del backend.
- **Recomendación Técnica**: Eliminar los parámetros de identificación del cuerpo de los requests si estos pueden derivarse del token Bearer. En el servidor, forzar la validación: `UserIdFromToken == RequestedOwnerId`.
- **Acción Estructural**: Modernización de la capa de API para adoptar estándares de "Zero Trust" en cada endpoint transaccional.

#### **5. Metadatos de Análisis**
- **Dimensión**: Seguridad / API
- **Audiencia Principal**: Técnico / Arquitectura
- **Nivel de Confianza**: Alta Inferencia
- **Tipo de Evidencia**: API / Documental
- **Esfuerzo Estimado**: Alto (requiere cambios en backend)
- **Horizonte Sugerido**: Corto Plazo

---

### HALL-API-003 - Exposición excesiva de PII en objeto de respuesta de Login

#### **1. Identificación**
- **Categoría / Subcategoría**: Seguridad / Privacidad
- **Tipificación**: Riesgo
- **Severidad / Prioridad**: High / P2

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: El proceso de inicio de sesión devuelve una cantidad innecesaria de datos personales en una sola respuesta, incluyendo GUIDs internos, números de identificación y lista completa de cuentas.
- **Impacto para Excel Puesto de Bolsa**: Si un dispositivo es comprometido o el tráfico es interceptado, un atacante obtiene un "perfil completo" del cliente instantáneamente.
- **Consecuencia de No Atenderlo**: Facilita ataques de ingeniería social o suplantación de identidad fuera de la app.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: La respuesta de `/api/Login/v1/Login` incluye un objeto `data` con 14 campos de perfil y una lista `cuentas` con detalles de `rifCode`. Esto contraviene el principio de minimización de datos.
- **Contexto / Módulo / Flujo Afectado**: Autenticación.
- **Evidencia Detallada**: EVID-API-002.
- **Fuente de Evidencia**: Confirmado por Documentación.
- **Riesgo Técnico**: Alta exposición de datos en tránsito e injustificada densidad de información en una sola transacción.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Reducir los datos devueltos en el login a lo estrictamente necesario para la sesión inicial.
- **Recomendación Técnica**: Implementar un endpoint `/profile` separado para cargar los detalles del usuario bajo demanda, limitando el login a la entrega de tokens y metadatos básicos.
- **Acción Estructural**: Adopción de OIDC (OpenID Connect) para una gestión de identidad más segura y granular.

#### **5. Metadatos de Análisis**
- **Dimensión**: Seguridad / API
- **Audiencia Principal**: Técnico
- **Nivel de Confianza**: Confirmado
- **Esfuerzo Estimado**: Medio
- **Horizonte Sugerido**: Modernización Estructural

---

### HALL-API-004 - Inconsistencia técnica en consumidores HTTP y falta de estandarización

#### **1. Identificación**
- **Categoría / Subcategoría**: Mantenibilidad / Arquitectura
- **Tipificación**: Mala práctica técnica
- **Severidad / Prioridad**: Medium / P3

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La aplicación móvil utiliza diferentes librerías y patrones para comunicarse con el servidor, lo que indica una falta de estándares claros en el desarrollo.
- **Impacto para Excel Puesto de Bolsa**: Dificulta el mantenimiento, ralentiza la implementación de cambios globales (como seguridad o logs) y aumenta la probabilidad de errores sutiles en la comunicación.
- **Consecuencia de No Atenderlo**: Incremento de deuda técnica y costos de desarrollo a largo plazo.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: Mientras la mayoría de los módulos usan `Dio` con un gestor de cookies, el módulo de detalles de inversión (`GetNoGenericDetailsById`) utiliza `http.Client` directamente. Esto fragmenta la lógica de red (timeouts, interceptores de headers, manejo de errores).
- **Contexto / Módulo / Flujo Afectado**: Capa de datos del cliente móvil.
- **Evidencia Detallada**: EVID-API-003.
- **Fuente de Evidencia**: Confirmado por Documentación.
- **Riesgo Técnico**: Inconsistencia en el manejo de tráfico, falta de observabilidad unificada y dificultad para aplicar parches de seguridad transversales.

#### **4. Acción Recomendada**
- **Recomendación Técnica**: Refactorizar la capa de red para utilizar un único cliente HTTP configurado centralmente (preferiblemente `Dio` por su madurez en Flutter).
- **Acción Estructural**: Crear un `ExcelNetworkClient` que centralice headers, telemetría y seguridad.

#### **5. Metadatos de Análisis**
- **Dimensión**: Funcionalidad / Mantenibilidad
- **Audiencia Principal**: Desarrollo
- **Nivel de Confianza**: Confirmado
- **Esfuerzo Estimado**: Medio
- **Horizonte Sugerido**: Corto Plazo

---

### HALL-API-005 - Manejo ineficiente de archivos binarios en payloads JSON

#### **1. Identificación**
- **Categoría / Subcategoría**: Performance / Arquitectura
- **Tipificación**: Oportunidad de mejora
- **Severidad / Prioridad**: Medium / P3

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La aplicación descarga estados de cuenta financieros enviándolos como texto codificado (Base64) dentro del cuerpo de la respuesta de la API.
- **Impacto para Excel Puesto de Bolsa**: Mayor consumo de datos para el cliente móvil y mayor presión sobre el servidor de API al procesar binarios pesados como texto.
- **Consecuencia de No Atenderlo**: Experiencia de usuario lenta en conexiones débiles y mayores costos de ancho de banda.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: Endpoints como `GetReportById` devuelven el PDF completo en Base64. Esto incrementa el tamaño del payload en un ~33% y obliga al cliente a un proceso de decodificación intensivo en CPU antes de poder visualizar el archivo.
- **Contexto / Módulo / Flujo Afectado**: Estados de Cuenta / Descargas.
- **Evidencia Detallada**: EVID-API-004.
- **Fuente de Evidencia**: Confirmado por Documentación.
- **Acción Estructural**: Migrar a una estrategia de "Pre-signed URLs" (ej. Azure Blob Storage) donde la API solo devuelve un link temporal seguro y el cliente descarga el binario directamente y de forma eficiente.

#### **4. Metadatos de Análisis**
- **Dimensión**: Performance / API
- **Esfuerzo Estimado**: Bajo-Medio
- **Horizonte Sugerido**: Modernización Estructural

---

### HALL-UX-004 - Ausencia de analítica visual y visualización de rendimiento
#### **1. Identificación**
- **Categoría / Subcategoría**: UX/UI / Valor Agregado
- **Tipificación**: Brecha de Producto
- **Severidad / Prioridad**: High / P2

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La aplicación se limita a mostrar saldos numéricos estáticos. No existen gráficas de evolución histórica, rendimiento porcentual ni distribución de activos.
- **Impacto de Negocio**: El cliente no puede evaluar la efectividad de su estrategia de inversión dentro de la app, lo que reduce la percepción de valor del servicio.
- **Consecuencia de Omisión**: Baja retención y falta de engagement; el usuario consulta la app solo por necesidad de saldo, no como herramienta de inversión.

---

### HALL-UX-005 - Opacidad en el flujo transaccional (Falta de recibos y trazabilidad)
#### **1. Identificación**
- **Categoría / Subcategoría**: UX/UI / Transaccional
- **Tipificación**: Brecha funcional crítica
- **Severidad / Prioridad**: High / P1

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Al finalizar un aporte o rescate de $50,000+, la app muestra una pantalla de éxito genérica pero no genera un número de referencia, recibo digital descargable ni comprobante de trazabilidad inmediato.
- **Impacto de Negocio**: Genera una profunda inseguridad en operaciones de alto valor. El cliente se ve obligado a tomar screenshots de la pantalla de éxito como único respaldo.
- **Consecuencia de Omisión**: Riesgo elevado de disputas transaccionales y saturación de soporte para confirmar operaciones.

---

### HALL-UX-006 - Inconsistencia cromática y disonancia de Branding institucional
#### **1. Identificación**
- **Categoría / Subcategoría**: UX/UI / Diseño Visual
- **Tipificación**: Debilidad de Branding
- **Severidad / Prioridad**: Low / P4

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Existe un uso inconsistente del verde "Excel" institucional en la aplicación, conviviendo con elementos de un azul/cian que no pertenecen a la guía de marca actual.
- **Impacto de Negocio**: Debilitamiento de la identidad visual premium de Excel Grupo Financiero. La app se percibe como un producto "genérico" o desactualizado.
- **Evidencia**: Comparativa entre logo institucional y selectores internos (EVID-IMG-003).

---

### HALL-SEC-004 - Exposición de trazas técnicas en mensajes de error (Leak de Infraestructura)
#### **1. Identificación**
- **Categoría / Subcategoría**: Seguridad / Observabilidad
- **Tipificación**: Vulnerabilidad de Información
- **Severidad / Prioridad**: Medium / P2

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Cuando ocurre un fallo de red o tiempo de espera (Timeout), la aplicación muestra alertas técnicas crudas (ej. `DioException [connection timeout]`) que exponen detalles de la arquitectura de red.
- **Impacto de Negocio**: Proyecta una imagen de falta de robustez técnica y ofrece pistas innecesarias a atacantes sobre las librerías y protocolos utilizados.
- **Consecuencia de Omisión**: Facilita la ingeniería inversa de fallos y degrada la confianza del usuario final.

---

### HALL-BUS-002 - Brecha de Negocio: Inexistencia de negociación directa de activos
#### **1. Identificación**
- **Categoría / Subcategoría**: Negocio / Core Funcional
- **Tipificación**: Brecha de Mercado
- **Severidad / Prioridad**: High / P1

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La aplicación actual solo permite movimientos de efectivo (Aportes/Rescates) pero no la compra o venta (negociación) de cuotas de fondos o instrumentos específicos desde la interfaz móvil.
- **Impacto de Negocio**: Excel no está capturando los ingresos por intermediación que habilita un canal digital moderno. La app funciona como un "Visor de Cuenta" más que como un "Canal de Inversión".
- **Consecuencia de Omisión**: El 100% de la negociación de activos sigue dependiendo de la intervención manual de asesores, incurriendo en mayores OpEx.

---

### HALL-API-006 - Inconsistencia de esquemas de identificación y falta de normalización
#### **1. Identificación**
- **Categoría / Subcategoría**: Mantenibilidad / APIs
- **Tipificación**: Deuda Técnica Sistémica
- **Severidad / Prioridad**: Medium / P3

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Los endpoints de la API utilizan identificadores redundantes y no normalizados (`rifCode`, `identificationNumber`, `accountNumber`, `IdProducto`) que varían erráticamente entre servicios de consulta y transacción.
- **Impacto de Negocio**: Aumenta exponencialmente el costo de mantenimiento y el riesgo de errores en integraciones futuras con otros sistemas corporativos.
- **Riesgo Técnico**: Dificulta la implementación de auditorías de datos coherentes y coherencia de cache en el app móvil.

---

### [HALL-ECO-001] Costo de Inacción por Vulnerabilidad de Infraestructura

#### **1. Identificación**
- **Categoría / Subcategoría**: Negocio / Riesgo Financiero
- **Tipificación**: Riesgo Catastrófico / Costo de Inacción
- **Severidad / Prioridad**: Critical / P1

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: Mantener la vulnerabilidad en el servicio de carga (SharePoint AF) y los riesgos de BOLA representa un "pasivo tecnológico" cuyo costo de realización superaría por órdenes de magnitud la inversión de modernización.
- **Impacto para Excel Puesto de Bolsa**: Una sola brecha de datos financieros de clientes premium desencadenaría: 1) Multas regulatorias masivas, 2) Pérdida de cartera de clientes de alto patrimonio y 3) Daño reputacional permanente en el mercado bursátil dominicano.
- **Consecuencia de No Atenderlo**: Excel asume un riesgo de "cisne negro" donde un evento de seguridad podría comprometer la viabilidad operativa del canal digital.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: El valor en riesgo se cuantifica cualitativamente por la exposición de PII y documentos de soporte en servicios no autenticados (HALL-API-001) y deficiencias en la validación de propiedad de objetos (HALL-API-002).
- **Contexto**: Infraestructura de integración y servicios backend.
- **Evidencia Detallada**: EVID-API-001, EVID-API-005.
- **Factor de Riesgo**: Probabilidad de descubrimiento por ingeniería inversa en binarios públicos.

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: Ejecutar un proyecto de endurecimiento (Hardening) de APIs y modernización de infraestructura como prioridad máxima.

---

### [HALL-ECO-002] Erosión de margen por dependencia de soporte manual y fricción UX

#### **1. Identificación**
- **Categoría / Subcategoría**: Negocio / Eficiencia Operativa
- **Tipificación**: Costo Operativo Oculto (OpEx)
- **Severidad / Prioridad**: High / P2

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: La fricción en el onboarding y la invisibilidad de funciones clave (como la biometría) obligan a los clientes a abandonar el autoservicio y recurrir a ejecutivos de cuenta o soporte telefónico.
- **Impacto para Excel Puesto de Bolsa**: Incremento artificial del costo por cliente atendido (*Cost-to-Serve*). Excel está pagando por una plataforma digital que no está logrando el ahorro operativo esperado en los canales tradicionales.
- **Consecuencia de No Atenderlo**: Estancamiento del margen operativo a medida que crece la base de usuarios digitales, ya que el soporte manual escalará linealmente con la fricción del app.

#### **3. Lectura Técnica**
- **Descripción Técnica Detallada**: Se deriva directamente de HALL-SEC-001 (Biometría oculta), HALL-UX-001 (Onboarding externo) y HALL-PER-001 (Inseguridad operativa por falta de feedback). Estos factores incrementan la tasa de contacto (*Contact Rate*) por cliente.
- **Evidencia Detallada**: EVID-IMG-001, EVID-VID-002.
- **Oportunidad**: La modernización permitiría capturar un ahorro de eficiencia mediante un autoservicio digital fluido y resiliente.
