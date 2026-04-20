# MODELO MAESTRO DE HALLAZGOS Y EVIDENCIAS
## Auditoría Integral - Excel Puesto de Bolsa

Este documento establece el estándar obligatorio para la documentación, clasificación y presentación de hallazgos y evidencias durante la auditoría integral de la aplicación móvil de Excel Puesto de Bolsa.

---

## 1. Objetivo del modelo
Proveer un marco de trabajo uniforme, profesional y defendible que permita comunicar riesgos y oportunidades tanto a audiencias ejecutivas como técnicas, asegurando que cada hallazgo esté respaldado por evidencia verificable y sea útil para la toma de decisiones estratégicas.

## 2. Principios de documentación de hallazgos
- **Basado en Evidencia**: Todo hallazgo debe estar vinculado a una o más evidencias tangibles.
- **Doble Lectura**: Capacidad de ser entendido por un directivo (impacto de negocio) y por un ingeniero (detalle técnico).
- **Accionabilidad**: Cada hallazgo debe proponer una salida clara, ya sea inmediata o estructural.
- **Rigor Terminológico**: Uso de un catálogo de tipificación estricto para evitar ambigüedades.

## 3. Estructura oficial de cada hallazgo

### A. Identificación
- **ID Único**: Identificador secuencial (ej. HALL-UX-001).
- **Título Corto**: Nombre descriptivo del hallazgo.
- **Categoría**: Área general (ej. Seguridad, UX, API).
- **Subcategoría**: Área específica (ej. Gestión de Sesión, Consistencia Visual).
- **Tipificación del hallazgo**: Según el catálogo oficial (ver sección 4).
- **Severidad**: Impacto técnico/operativo (Critical / High / Medium / Low).
- **Prioridad**: Urgencia de atención (P1 / P2 / P3 / P4).

### B. Lectura Ejecutiva
- **Resumen Ejecutivo**: Descripción condensada para alta gerencia.
- **Impacto para Excel Puesto de Bolsa**: Cómo afecta este hallazgo a la operación o estrategia de la empresa.
- **Riesgo de Negocio**: Probabilidad de pérdida económica, reputacional o regulatoria.
- **Consecuencia de no atenderlo**: Escenario proyectado si el hallazgo persiste.

### C. Lectura Técnica
- **Descripción Técnica Detallada**: Análisis profundo del funcionamiento o defecto encontrado.
- **Contexto / Módulo / Flujo Afectado**: Dónde ocurre exactamente (ej. Flujo de Rescate).
- **Evidencia Detallada**: Referencia a los IDs de evidencia que soportan el hallazgo.
- **Fuente de Evidencia**: (Screenshot / Video / API / Binario / Inferencia).
- **Posible Causa Técnica**: Hipótesis sobre el origen estructural del problema.
- **Riesgo Técnico**: Impacto en la estabilidad, seguridad o mantenibilidad del sistema.
- **Áreas Impactadas**: (Desarrollo, Infraestructura, Seguridad, QA).

### D. Acción Recomendada
- **Recomendación Ejecutiva**: Qué decisión debe tomar la gerencia.
- **Recomendación Técnica**: Qué debe implementar el equipo técnico.
- **Quick Win**: Resolución rápida de bajo esfuerzo y alto impacto.
- **Acción Estructural**: Solución de fondo, generalmente ligada a la modernización.

### E. Metadatos de Análisis
- **Dimensión**: (UX/UI, Funcionalidad, API, Seguridad, Performance, Negocio).
- **Audiencia Principal**: (Ejecutivo / Técnico / Mixto).
- **Nivel de Confianza**: (Confirmado / Alta Inferencia / Inferencia Razonable).
- **Tipo de Evidencia**: (Visual / Documental / API / Binario / Mixta).
- **Esfuerzo Estimado**: (Bajo / Medio / Alto).
- **Horizonte Sugerido**: (Inmediato / Corto Plazo / Modernización Estructural).

---

## 4. Catálogo oficial de tipificación

| Tipo | Descripción |
| :--- | :--- |
| **Defecto** | Fallo funcional evidente donde la app no hace lo que debería. |
| **Error** | Comportamiento inesperado o bloqueo del sistema. |
| **Vulnerabilidad** | Debilidad que puede ser explotada para comprometer la seguridad. |
| **Riesgo** | Situación latente que podría derivar en un problema futuro. |
| **Mala práctica técnica** | Implementación que contraviene estándares de la industria. |
| **Debilidad de diseño** | Problema estructural en la forma en que se concibió una función. |
| **Brecha UX/UI** | Falta de consistencia, claridad o usabilidad frente a estándares. |
| **Oportunidad de mejora** | Aspecto funcional que funciona pero podría ser optimizado. |
| **Brecha competitiva** | Ausencia de capacidades que ya son estándar en el mercado fintech. |
| **Oportunidad perdida** | Beneficio de negocio no aprovechado por limitaciones del app. |
| **Limitación operativa** | Factor que obliga a procesos manuales o ineficientes. |

---

## 5. Escala de severidad

- **Critical**: Riesgo inminente de pérdida financiera, compromiso total de seguridad o bloqueo de flujo crítico.
- **High**: Problema importante que afecta a muchos usuarios o procesos clave, con riesgo alto.
- **Medium**: Fallo o brecha que degrada la experiencia o aumenta el riesgo, pero tiene mitigaciones.
- **Low**: Problema menor, estético o con impacto muy localizado.

## 6. Escala de prioridad

- **P1 (Inmediata)**: Debe resolverse en el ciclo actual de desarrollo o mantenimiento.
- **P2 (Alta)**: Debe incluirse en la próxima ventana de mantenimiento/actualización.
- **P3 (Media)**: Debe planificarse en el roadmap de producto.
- **P4 (Baja)**: Deseable, puede esperar a una modernización completa.

## 7. Niveles de confianza

- **Confirmado**: Basado en evidencia directa, repetible y verificable.
- **Alta Inferencia**: Basado en una combinación de evidencia parcial y comportamiento observado consistente.
- **Inferencia Razonable**: Basado en lógica técnica y experiencia en sistemas similares, dada la falta de evidencia directa (ej. ausencia de código).

---

## 8. Modelo de gestión de evidencias

Cada hallazgo debe estar vinculado a una **Evidencia** documentada así:

- **ID de Evidencia**: Referencia única (EVID-XXX-000).
- **Tipo de Evidencia**: (Imagen / Video / HTTP Log / Texto).
- **Fuente**: Archivo o endpoint específico.
- **Ubicación o Referencia**: Ruta del archivo o línea de código/documentación.
- **Breve Descripción**: Qué se observa en la evidencia.
- **Hallazgos Soportados**: Lista de IDs de hallazgos que utilizan esta evidencia.

## 9. Convención de IDs para hallazgos y evidencias

**Hallazgos:** `HALL-[DIMENSIÓN]-[CORR]`
- `HALL-UX-001`, `HALL-SEC-005`, `HALL-API-002`

**Evidencias:** `EVID-[TIPO]-[CORR]`
- `EVID-IMG-001` (Screenshot), `EVID-VID-002` (Video), `EVID-DOC-003` (Documentación), `EVID-API-004` (Request/Response).

---

## 10. Plantilla maestra reutilizable

```markdown
### [ID] - [Título del Hallazgo]

#### **1. Identificación**
- **Categoría / Subcategoría**: [Categoría] / [Subcategoría]
- **Tipificación**: [Tipo]
- **Severidad / Prioridad**: [Severidad] / [Prioridad]

#### **2. Lectura Ejecutiva**
- **Resumen Ejecutivo**: [Descripción breve para gerencia]
- **Impacto de Negocio**: [Cómo afecta a Excel]
- **Consecuencia de Omisión**: [Qué pasa si no se arregla]

#### **3. Lectura Técnica**
- **Descripción**: [Análisis detallado]
- **Módulo / Flujo**: [Ubicación]
- **Evidencia**: [ID_EVIDENCIA] ([Fuente])
- **Riesgo Técnico**: [Impacto en arquitectura/seguridad]

#### **4. Acción Recomendada**
- **Recomendación Ejecutiva**: [Acción gerencial]
- **Recomendación Técnica**: [Acción técnica]
- **Quick Win**: [Opcional]
- **Acción Estructural**: [Modernización]

#### **5. Metadatos de Análisis**
- **Dimensión**: [Dimensión]
- **Confianza**: [Nivel]
- **Esfuerzo / Horizonte**: [Esfuerzo] / [Horizonte]
```
