# REGISTRO MAESTRO DE EVIDENCIAS (00C)
**Proyecto:** Auditoría Integral - Excel Puesto de Bolsa  
**Estatus:** Registro Actualizado tras Enriquecimiento de Densidad

---

## 1. Evidencias de Imagen (Screenshots)
*(Se mantienen todas las referencias visuales de la auditoría)*

| ID | Tipo | Fuente | Descripción | Hallazgos Soportados |
| :--- | :--- | :--- | :--- | :--- |
| **EVID-IMG-001** | Imagen | `09.00.57.jpeg` | Pantalla de Login inicial (Sin opción de biometría visible). | HALL-SEC-001, HALL-ECO-002 |
| **EVID-IMG-003** | Imagen | `09.00.58 (2).jpeg` | Disonancia entre verde institucional y cian de la app. | HALL-UX-006 |
| **EVID-IMG-004** | Imagen | `09.00.58 (3).jpeg` | Dashboard de Balances (Sin "Privacy Masking" o botón de ocultar). | HALL-SEC-002, HALL-UX-004 |
| **EVID-IMG-010** | Imagen | `09.00.59 (4).jpeg` | Modal "Descargand..." (Feedback visual de baja resiliencia). | HALL-PER-001, HALL-SEC-004 |
| **EVID-IMG-011** | Imagen | `09.00.59 (5).jpeg` | Menú lateral con enlaces externos (Riesgo de Phishing/Salida). | HALL-SEC-003, HALL-BUS-001 |
| **EVID-IMG-013** | Imagen | `09.00.59 (7).jpeg` | WebView externo para Onboarding (Fragmentación de confianza). | HALL-SEC-003, HALL-UX-001 |

---

## 2. Evidencias de Video (Flujos Dinámicos)

| ID | Tipo | Fuente | Descripción | Hallazgos Soportados |
| :--- | :--- | :--- | :--- | :--- |
| **EVID-VID-001** | Video | `Dashboard.mp4` | Ausencia total de visualizaciones de rendimiento/gráficos. | HALL-UX-004, HALL-UI-001 |
| **EVID-VID-002** | Video | `crear cuenta.mp4` | Salto a WebView externo (Riesgo de Confianza/Conversión). | HALL-SEC-003, HALL-UX-001, HALL-ECO-002 |
| **EVID-VID-006** | Video | `resetear contrasena.mp4` | Disonancia semántica y falta de 2FA. | HALL-UX-002, HALL-SEC-004 |
| **EVID-VID-007** | Video | `invertir fondos.mp4` | Pantalla de éxito silenciosa (Sin recibo ni trazabilidad). | HALL-UX-005, HALL-BUS-002 |
| **EVID-VID-009** | Video | `retirar fondos.mp4` | Falta de diferenciación operativa y trazabilidad de retiro. | HALL-UX-003, HALL-UX-005 |

---

## 3. Evidencias Documentales y Técnicas

| ID | Tipo | Fuente | Descripción | Hallazgos Soportados |
| :--- | :--- | :--- | :--- | :--- |
| **EVID-API-005** | Service | `sharepointexcelaf...` | Servicio de carga sin Bearer (Alta exposición). | HALL-API-001, HALL-ECO-001 |
| **EVID-DOC-003** | Doc | `API_DOCUMENTATION.md` | Inconsistencia de campos (rifCode, identificationNumber). | HALL-API-006, HALL-API-004 |
| **EVID-INF-005** | Inferencia| Análisis Operativo | Funcionalidad biométrica existente pero oculta (Baja descubribilidad). | HALL-SEC-001, HALL-ECO-002 |
| **EVID-INF-006** | Inferencia| Análisis de Red | Exposición de trazas técnicas en estados de error de red. | HALL-SEC-004 |
