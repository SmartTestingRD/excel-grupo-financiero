export type Severity = 'Low' | 'Medium' | 'High' | 'Critical';
export type Category = 'UX/UI' | 'Functional' | 'Performance' | 'Security' | 'Trust';

export interface Finding {
  id: string;
  flow: string;
  screen: string;
  category: Category;
  severity: Severity;
  title: string;
  description: string;
  businessImpact: string;
  financialRisk: boolean;
  recommendation: string;
  isStructural: boolean;
  evidence: {
    video?: string;
    screenshot?: string;
    timestamp?: string;
  };
}

export const mockFindings: Finding[] = [
  {
    id: "AUD-001",
    flow: "Autenticación",
    screen: "Inicio de Sesión",
    category: "Security",
    severity: "Critical",
    title: "Sin autenticación multifactor (MFA)",
    description: "La aplicación depende exclusivamente de correo y contraseña para proteger portafolios de $40,000+. Sin biometría, sin verificación por dispositivo, sin segundo factor de ningún tipo.",
    businessImpact: "Una sola credencial comprometida otorga acceso irrestricto y no detectado al portafolio completo del cliente. Ni el cliente ni la institución reciben alerta.",
    financialRisk: true,
    recommendation: "Implementar MFA obligatorio (OTP/push) + inicio biométrico (Face ID / Touch ID) + confianza de dispositivo.",
    isStructural: true,
    evidence: { screenshot: "img_login.jpeg" }
  },
  {
    id: "AUD-002",
    flow: "Negociación",
    screen: "N/A — No existe",
    category: "Functional",
    severity: "Critical",
    title: "Sin capacidad de negociación de valores",
    description: "La aplicación de un puesto de bolsa autorizado no permite negociar ningún tipo de valor. Solo aportes y rescates de fondos mutuos. Los clientes deben llamar a su asesor para toda operación bursátil.",
    businessImpact: "La capacidad central del intermediario de valores está completamente ausente. $0 en ingresos por negociación digital.",
    financialRisk: true,
    recommendation: "Implementar negociación digital de renta fija (Fase 3) y renta variable (Fase 4) con integración de datos de mercado.",
    isStructural: true,
    evidence: {}
  },
  {
    id: "AUD-003",
    flow: "Negociación",
    screen: "N/A — No existe",
    category: "Functional",
    severity: "Critical",
    title: "Sin datos de mercado ni cotizaciones",
    description: "Una aplicación de inversiones sin inteligencia de mercado. Los clientes no tienen acceso a precios, cotizaciones, rendimientos históricos ni documentación de fondos dentro de la plataforma.",
    businessImpact: "Los clientes no pueden tomar decisiones de inversión informadas a través de la app. Dependencia total de asesores humanos.",
    financialRisk: true,
    recommendation: "Integrar feed de datos de mercado y documentación de fondos (prospectos, fichas técnicas).",
    isStructural: true,
    evidence: {}
  },
  {
    id: "AUD-004",
    flow: "Transacciones",
    screen: "Aporte / Rescate",
    category: "Security",
    severity: "Critical",
    title: "Autenticación inconsistente en transacciones",
    description: "Los rescates requieren PIN de seguridad; los aportes podrían no requerirlo. Esta asimetría significa que un atacante podría depositar fondos en cuentas controladas sin verificación adicional.",
    businessImpact: "Exposición AML y regulatoria. Riesgo de movimientos de fondos no autorizados sin detección.",
    financialRisk: true,
    recommendation: "Unificar la autenticación por PIN en todas las operaciones financieras sin excepción.",
    isStructural: true,
    evidence: { video: "aporte_video.webp" }
  },
  {
    id: "AUD-005",
    flow: "Portafolio",
    screen: "Vista de Saldos",
    category: "Trust",
    severity: "High",
    title: "Cero visualización de rendimiento del portafolio",
    description: "Los saldos se muestran solo en texto plano. Sin gráficos, sin ganancia/pérdida, sin tendencia de rendimiento, sin distribución por activo. Los usuarios no pueden responder: '¿Estoy ganando dinero?'",
    businessImpact: "Los clientes no pueden evaluar el valor del servicio. Erosión silenciosa de confianza y retención.",
    financialRisk: false,
    recommendation: "Implementar motor de analítica de portafolio con gráficos de rendimiento, ganancia/pérdida y distribución.",
    isStructural: true,
    evidence: { screenshot: "img_balance_portfolio.jpeg" }
  },
  {
    id: "AUD-006",
    flow: "Transacciones",
    screen: "Post-Aporte",
    category: "Trust",
    severity: "High",
    title: "Sin confirmación de transacción en aportes",
    description: "Después de comprometer capital ($50K+), el usuario es redirigido silenciosamente sin pantalla de éxito, sin número de referencia, sin recibo descargable, sin correo de confirmación.",
    businessImpact: "Genera incertidumbre, disputas y llamadas a soporte. Viola expectativas básicas de cualquier transacción financiera.",
    financialRisk: true,
    recommendation: "Implementar pantalla de confirmación con referencia única, resumen y opción de descarga/compartir.",
    isStructural: true,
    evidence: { screenshot: "img_orders_list.jpeg" }
  },
  {
    id: "AUD-007",
    flow: "Perfil / Configuración",
    screen: "Menú Lateral",
    category: "Security",
    severity: "High",
    title: "Sin panel de configuración de seguridad",
    description: "Los usuarios no pueden cambiar PIN, contraseña, habilitar biometría ni gestionar dispositivos autorizados desde la aplicación. Todo cambio requiere llamar a soporte.",
    businessImpact: "Costo operativo directo por cada solicitud manual. Riesgo de seguridad al no poder revocar accesos comprometidos.",
    financialRisk: false,
    recommendation: "Crear panel de seguridad con cambio de PIN/contraseña, gestión de dispositivos y preferencias biométricas.",
    isStructural: true,
    evidence: { screenshot: "img_profile_sidebar.jpeg" }
  },
  {
    id: "AUD-008",
    flow: "Autenticación",
    screen: "Inicio de Sesión",
    category: "Security",
    severity: "High",
    title: "Enumeración de usuarios mediante mensajes de error",
    description: "Los mensajes de error de inicio de sesión revelan si un correo electrónico existe en el sistema, permitiendo a atacantes identificar cuentas válidas antes de intentar una intrusión.",
    businessImpact: "Facilita ataques dirigidos de phishing y credential stuffing al confirmar cuentas activas.",
    financialRisk: true,
    recommendation: "Usar mensajes genéricos: 'Credenciales incorrectas' sin revelar qué campo es inválido.",
    isStructural: false,
    evidence: { screenshot: "img_login.jpeg" }
  },
];

export const auditMetrics = {
  overallScore: 3.0,
  maturityLevel: 'Bajo',
  riskLevel: 'Crítico',
  recommendation: 'Rediseño Estructural',
  totalFindings: 55,
  criticalHigh: 18,
  financialRisk: 45,
  structural: 44,
  categoryScores: {
    'UX/UI': 3.5,
    'Funcionalidad': 3.5,
    'Rendimiento': 6.0,
    'Seguridad': 2.0,
    'Confianza': 2.0,
  } as Record<string, number>
};
