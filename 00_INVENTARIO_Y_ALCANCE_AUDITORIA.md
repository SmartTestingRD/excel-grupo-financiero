# INVENTARIO Y ALCANCE DE AUDITORÍA: APP MÓVIL EXCEL

**Proyecto:** Auditoría Integral de Modernización - Excel Puesto de Bolsa  
**Fecha:** 20 de abril de 2026  
**Estado:** Finalización de Fase de Inventario  
**Responsable:** Equipo Senior de Auditoría Integral  

---

## 1. Resumen del material encontrado

Se ha completado el levantamiento de activos dentro del repositorio de auditoría. El material disponible permite una evaluación profunda de la experiencia del usuario, la funcionalidad operativa y la integración con servicios backend, aunque presenta una limitación crítica en cuanto al acceso directo al código fuente del cliente móvil.

**Activos principales identificados:**
- **Binarios de aplicación:** Versiones finales para distribución en Android y iOS.
- **Documentación de Interfaz de Programación (API):** Especificación detallada de contratos, endpoints y lógica de integración.
- **Evidencia Visual Dinámica:** Grabaciones de pantalla de los flujos críticos de negocio.
- **Evidencia Visual Estática:** Capturas de pantalla de interfaces de usuario y estados de la aplicación.

---

## 2. Inventario clasificado por tipo de activo

| Tipo de Activo | Cantidad | Referencia / Ubicación | Utilidad para la Auditoría | Observaciones |
| :--- | :--- | :--- | :--- | :--- |
| **Binario Android** | 1 | `app-release.apk` (106 MB) | Análisis de seguridad de superficie, permisos y empaquetado. | Versión de producción/lanzamiento. |
| **Binario iOS** | 1 | `Excel Móvil.ipa` (51 MB) | Análisis de superficie y consistencia de plataforma. | Requiere entorno macOS para análisis de estructura. |
| **Documentación API** | 1 | `API_DOCUMENTATION.md` | Auditoría de integraciones, seguridad de endpoints y diseño de contratos. | **Activo Clave:** Contiene referencias a la estructura interna del código Flutter. |
| **Videos de Flujo** | 9 | Directorio `videosflujos/` | Evaluación de UX, tiempos de respuesta perceptibles y flujo funcional. | Cubre los procesos principales de negocio. |
| **Screenshots** | 14 | Directorio `imagenes app actual/` | Auditoría de UI, consistencia visual, jerarquía y legibilidad. | Capturas de alta resolución de estados específicos. |
| **Comprimidos** | 1 | `excel_mobile_builds.zip` | Respaldo del material de despliegue. | Contenido idéntico a la carpeta de builds. |

---

## 3. Mapa preliminar de módulos o procesos identificados

A partir de la evidencia multimedia y documental, se infieren los siguientes módulos operativos de la aplicación:

1.  **Módulo de Acceso y Seguridad:** Login, recuperación de contraseña y flujo de creación de cuenta (onboarding).
2.  **Dashboard de Inversiones (Balances):** Visualización consolidada de portafolio, cuentas de Puesto de Bolsa (EPB) y Fondos de Inversión (SAFI) en múltiples divisas (DOP/USD).
3.  **Gestión de Transacciones:**
    *   *Aportes:* Flujo de inversión hacia fondos.
    *   *Rescates:* Proceso de retiro de fondos y liquidación.
    *   *Órdenes:* Ejecución de instrucciones de inversión.
4.  **Centro de Documentación:** Consulta y descarga de estados de cuenta mensuales y reportes impositivos.
5.  **Gestión de Perfil:** Administración de datos del inversor, configuración de cuentas bancarias y preferencias.
6.  **Notificaciones:** Alertas operativas y de mercado (inferido por endpoints de FCM).

---

## 4. Cobertura de evidencia por módulo/proceso

| Módulo / Proceso | Nivel de Cobertura | Justificación |
| :--- | :--- | :--- |
| **Autenticación** | **Alta** | Video de flujo completo, screenshots y documentación de endpoints de login/reset. |
| **Dashboard / Balances** | **Alta** | Video detallado, múltiples capturas de diferentes tipos de cuenta y documentación de API de productos. |
| **Aportes y Rescates** | **Alta** | Videos específicos de la transacción, validaciones de API y lógica de cálculo documentada. |
| **Estados de Cuenta** | **Media** | Video de navegación y endpoints de descarga, pero cobertura visual limitada del contenido del PDF. |
| **Perfil y Configuración** | **Media** | Video de navegación por el menú lateral y perfil, documentación de APIs de cuentas bancarias. |
| **Arquitectura Técnica** | **Baja** | Limitada a inferencias basadas en la documentación de API y estructura de archivos mencionada. |

---

## 5. Estado de disponibilidad del código fuente

> [!CAUTION]
> **HALLAZGO CONFIRMADO:** El código fuente original (archivos `.dart`, archivos de proyecto Flutter) **NO fue localizado físicamente** en la carpeta auditada.

**Validaciones técnicas realizadas:**
1.  Búsqueda recursiva profunda (`find`) de archivos con extensiones `.dart`, `.yaml`, `.swift`, `.kt`, `.java`.
2.  Indexación de contenido (`grep`) buscando cadenas típicas de la arquitectura (ej. `session_datasource`, `SessionBloc`, `Provider`, `Bloc`).
3.  Inspección de archivos ocultos y listado detallado de todos los directorios.
4.  Verificación de archivos comprimidos (`.zip`) en la raíz del proyecto.

**Conclusión técnica:** Aunque la `API_DOCUMENTATION.md` referencia rutas de archivos como `lib/features/login/data/datasources/session_datasource.dart`, dichas rutas no existen en el sistema de archivos proporcionado. **La presencia de documentación de código no constituye evidencia de disponibilidad del código fuente.**

**Impacto:** La ausencia de los archivos `.dart` impide realizar una auditoría de "caja blanca" (White Box), análisis estático de código (SAST) profundo y verificación de mantenibilidad a nivel de implementación.

---

## 6. Alcance ejecutable de la auditoría

La auditoría se ejecutará con alta confianza técnica en los siguientes frentes:
- **Auditoría UX/UI:** Evaluación estética, consistencia de componentes, usabilidad y cumplimiento de heurísticas.
- **Auditoría Funcional:** Validación de flujos operativos, mensajes de error visibles y lógica de negocio perceptible.
- **Análisis de APIs e Integración:** Auditoría profunda de los contratos de API, vulnerabilidades lógicas en endpoints (IDOR, BOLA) y exposición de datos.
- **Seguridad Observable:** Análisis de superficie de los binarios, gestión de sesiones y seguridad en el transporte (TLS/SSL).
- **Performance Perceptible:** Tiempos de carga observados, manejo de estados de carga (loaders) y resiliencia ante errores de red visibles.
- **Brechas Estratégicas:** Identificación de oportunidades de negocio perdidas y gap tecnológico frente a la competencia fintech.

---

## 7. Alcance limitado o no ejecutable con profundidad

Los siguientes puntos quedan fuera del alcance o limitados a inferencias razonables:
- **Calidad de Código:** No se puede evaluar el cumplimiento de estándares de codificación (Linting), duplicación de código o complejidad ciclomática.
- **Mantenibilidad:** Imposibilidad de evaluar el acoplamiento real, la extensibilidad de los widgets y la limpieza de la arquitectura (Clean Architecture).
- **Seguridad Interna:** No se pueden auditar validaciones del lado del cliente, almacenamiento seguro local (Secure Storage) a nivel de implementación o posibles secretos "hardcoded" en el código fuente.
- **Deuda Técnica:** La evaluación de deuda estará limitada a lo observable en la funcionalidad y no a la estructura del software.

---

## 8. Limitaciones formales del assessment

Este informe de auditoría se basa exclusivamente en los activos listados en la Sección 2. Los hallazgos técnicos se derivarán del comportamiento observado de la aplicación y de la infraestructura de backend documentada. **La ausencia del código fuente no invalida la auditoría integral, pero sí limita formalmente la auditoría técnica profunda del diseño interno del cliente móvil.** Toda conclusión arquitectónica que no se base en evidencia directa del código será etiquetada explícitamente como "Inferencia basada en documentación técnica".

---

## 9. Recomendación de orden de análisis

Para maximizar el valor de la auditoría con el material disponible, se propone el siguiente cronograma de ejecución:

1.  **Auditoría Visual, Funcional y UX/UI:** Diagnóstico estético y operativo basado en videos y screenshots.
2.  **Auditoría de APIs e Integración:** Análisis crítico de los contratos documentados y riesgos de seguridad en el backend.
3.  **Auditoría de Seguridad Observable:** Análisis de superficie de binarios y flujos de autenticación.
4.  **Auditoría de Performance y Resiliencia Observable:** Evaluación del feedback al usuario y manejo de estados críticos.
5.  **Brechas de Negocio y Oportunidades Perdidas:** Análisis estratégico fintech.
6.  **Consolidación Ejecutiva:** Informe maestro de recomendaciones y justificación de modernización.
