const preguntas = [
  {
    pregunta:
      "¿Qué tarea NO realiza organizaciones y métodos? Analisis de proveedores, ordenamiento de oficinas, redaccion de manuales, diseño de formularios",
    opciones: [
      "Análisis de proveedores",
      "Ordenamiento de oficinas",
      "Redacción de manuales",
      "Diseño de formularios",
    ],
    respuesta: "Diseño de formularios",
  },
  {
    pregunta: "La contradicción en una tabla de decisión se refiere a",
    opciones: [
      "Dos reglas son iguales las acciones y las condiciones son iguales",
      "Dos reglas en donde las condiciones son iguales y acciones distintas",
      "Dos reglas en donde las acciones son iguales y condiciones distintas",
      "Ninguna",
    ],
    respuesta:
      "Dos reglas en donde las condiciones son iguales y acciones distintas",
  },
  {
    pregunta: "Una organización a cuadros está definida por",
    opciones: [
      "Los departamentos administrativos",
      "Las jerarquías",
      "Las funciones de los empleados",
      "Ninguna opción",
    ],
    respuesta: "Las jerarquías",
  },
  {
    pregunta: "Una organización bifacial está definida por",
    opciones: [
      "Tener dos jefes",
      "Tener dos estados de acción",
      "Tener dos visiones de negocio",
      "Ninguna opción",
    ],
    respuesta: "Tener dos estados de acción",
  },
  {
    pregunta: "Dentro de un proceso, la metodología de trabajo debe ser",
    opciones: [
      "Depende de cada sector",
      "Única y reconocida por cada integrante",
      "De fácil aplicación",
      "Ninguna de las anteriores",
    ],
    respuesta: "Única y reconocida por cada integrante",
  },
  {
    pregunta: "Dentro de las herramientas BAM hay una que no es válida",
    opciones: [
      "Comprender",
      "Implementar",
      "Analizar",
      "Facilitar",
      "Corregir",
      "Ninguna de estas es verdadera",
    ],
    respuesta: "Corregir",
  },
  {
    pregunta: "¿La metodología debe ser compartida?",
    opciones: ["Verdadero", "Falso"],
    respuesta: "Verdadero",
  },
  {
    pregunta:
      "¿Los cuestionarios abiertos son un de análisis rápido y fáciles de entender?",
    opciones: ["Verdadero", "Falso"],
    respuesta: "Falso",
  },
  {
    pregunta: "Contaduría, en el proceso de compras, previo a pagos, recibe",
    opciones: [
      "Nota de pedido, remito y factura",
      "Orden de compra, remito, informe de recepción y factura",
      "Pedido de reaprovisionamiento, orden de compra y factura",
      "Pedido de reaprovisionamiento, cotización, orden de compra y factura",
    ],
    respuesta: "Orden de compra, remito, informe de recepción y factura",
  },
  {
    pregunta: "Cuál de ellos no representa el concepto de sistema:",
    opciones: ["Propósito", "Tecnología", "Relaciones", "Componentes"],
    respuesta: "Tecnología",
  },
  {
    pregunta:
      "Cuando hablamos de recolección de datos, en una entrevista cerrada, significa que",
    opciones: [
      "Se realiza a una sola persona",
      "Se realiza en base a un conjunto preciso de preguntas",
      "Se realiza en un tiempo a un conjunto limitado de personas",
      "Ninguna de las anteriores",
    ],
    respuesta: "Se realiza en base a un conjunto preciso de preguntas",
  },
  {
    pregunta: "Cuando se habla de recolección de datos, cuál es la apropiada",
    opciones: [
      "Entrevistas con gerentes",
      "Hechos comprobados",
      "Formularios utilizados-Encuestas",
      "Ninguna",
    ],
    respuesta: "Formularios utilizados-Encuestas",
  },
  {
    pregunta: "Cuando se realiza una entrevista lo más importante es",
    opciones: [
      "La entonación de voz y cómo escriben las respuestas",
      "La forma de presentación y su vestimenta",
      "Que la respuesta escrita porque queda registrada",
      "El lenguaje no verbal",
    ],
    respuesta: "El lenguaje no verbal",
  },
  {
    pregunta: "El objetivo de la etapa de análisis es",
    opciones: [
      "Verificar qué deben realizar los usuarios",
      "Generar el diagnóstico",
      "Analizar el sistema",
      "Determinar las áreas de la organización",
    ],
    respuesta: "Generar el diagnóstico",
  },
  {
    pregunta: "El primer control que realiza compras es",
    opciones: [
      "Verificar lista de proveedores",
      "La cantidad de productos que solicitan",
      "El valor de los productos",
      "Verificar la firma de quien lo solicita",
    ],
    respuesta: "Verificar la firma de quien lo solicita",
  },
  {
    pregunta: "En administración de ventas el control formal está referido a",
    opciones: [
      "Análisis de la nota del pedido",
      "Ninguna de las opciones",
      "Análisis de la orden de compra",
      "Análisis del remito",
    ],
    respuesta: "Análisis de la nota del pedido",
  },
  {
    pregunta: "En el proceso de facturación a quien no se le entrega una copia",
    opciones: ["Cobranzas", "Cliente", "Tesorería", "Contaduría"],
    respuesta: "Tesorería",
  },
  {
    pregunta:
      "La rotación de personal intensa hace referencia a que en el sector tenemos",
    opciones: [
      "Actividades de riesgo",
      "Tareas de zonas sensibles",
      "Personal temporario",
      "Ninguna",
    ],
    respuesta: "Tareas de zonas sensibles",
  },
  {
    pregunta: "La solicitud de compras es un documento que realiza",
    opciones: [
      "Compras",
      "Otros actores",
      "Ninguna de las opciones",
      "Almacén",
    ],
    respuesta: "Otros actores",
  },
  {
    pregunta:
      "Para cerrar el circuito de pago, el último documento que se registra es",
    opciones: [
      "El cheque",
      "El recibo oficial del proveedor",
      "La orden de pago",
      "El parte de ingreso",
    ],
    respuesta: "El recibo oficial del proveedor",
  },
  {
    pregunta: "Según Mintzberg - La capacitación es una herramienta para",
    opciones: [
      "Ambas opciones",
      "Que la persona adquiera el conocimiento de las políticas de la empresa",
      "Que la persona adquiera el conocimiento de las tareas del puesto de trabajo",
      "Ninguna",
    ],
    respuesta:
      "Que la persona adquiera el conocimiento de las tareas del puesto de trabajo",
  },
  {
    pregunta: "Una departamentalización funcional hace referencia a",
    opciones: [
      "Las tareas en torno a un puesto de trabajo",
      "Las tareas agrupadas por las personas",
      "En función a un concepto general",
      "Ninguna de las opciones",
    ],
    respuesta: "Las tareas agrupadas por las personas",
  },
  {
    pregunta: "Una organización pulsátil está definida por",
    opciones: [
      "Sus componentes",
      "Su propósito",
      "El tiempo y los recursos",
      "Ninguna opción",
    ],
    respuesta: "El tiempo y los recursos",
  },
  {
    pregunta: "Dentro de un proceso, la metodología de trabajo debe ser",
    opciones: [
      "Depende de cada sector",
      "Única y reconocida por cada integrante",
      "De fácil aplicación",
      "Ninguna de las anteriores",
    ],
    respuesta: "Única y reconocida por cada integrante",
  },
  {
    pregunta: "Un sistema determinista se define cuando está determinado su",
    opciones: ["Entrada", "Proceso", "Respuesta", "Ninguna opción"],
    respuesta: "Respuesta",
  },
  {
    pregunta: "Un sistema realimentado se define cuando su",
    opciones: [
      "La entrada es única",
      "La entrada es modificada por parte de los procesos de salida",
      "La respuesta se autocorrige",
      "Ninguna",
      "Todas",
    ],
    respuesta: "Todas",
  },
  {
    pregunta:
      "Cuál de los siguientes puntos NO es un procedimiento cuantificable",
    opciones: [
      "Identificar los procesos",
      "Aislar los puntos de falla",
      "Analizar la rentabilidad",
      "Medir la capacitación del personal",
      "Establecer un marco temporal",
    ],
    respuesta: "Aislar los puntos de falla",
  },
  {
    pregunta:
      "Cuando se hace mención de la sociedad digital y los procesos disruptivos, se refiere a",
    opciones: [
      "Los cambios en la tecnología",
      "Los cambios en la adquisición del conocimiento",
      "Los cambios en las formas del trabajo y del conocimiento",
      "Los cambios en el conjunto de la tecnología y el trabajo",
      "Ninguno",
    ],
    respuesta: "Los cambios en el conjunto de la tecnología y el trabajo",
  },
  {
    pregunta: "Dentro de las normativas COSO II, cuál no es verdadera",
    opciones: [
      "Ambiente de control",
      "Evaluación de riesgos",
      "Información y Comunicación",
      "Capacitación en Auditoría",
      "Ninguna",
    ],
    respuesta: "Capacitación en Auditoría",
  },
  {
    pregunta:
      "Dentro de los elementos coordinadores [Mintzberg] cuál de ellos NO es",
    opciones: [
      "Control interno",
      "Estandarización de capacidades",
      "Estandarización de producto",
      "Ajuste mutuo",
    ],
    respuesta:
      "Control interno",
  },
  {
    pregunta:
      "Dentro de una tabla extendida, la cantidad de columnas depende de",
    opciones: [
      "La cantidad de condiciones elevado al cuadrado",
      "La cantidad de respuestas verdaderas/falsas",
      "El rango de posibilidades de las condiciones",
      "Todas",
      "Ninguna",
    ],
    respuesta: "El rango de posibilidades de las condiciones",
  },
  {
    pregunta: "Dentro del proceso de Leading, en PNL decimos que",
    opciones: [
      "Acompañamos",
      "Calibramos",
      "Guiamos",
      "Manipulamos",
      "Ninguna opción",
    ],
    respuesta: "Guiamos",
  },
  {
    pregunta: "La gestión por Procesos consiste en",
    opciones: [
      "Poder trabajar orientados al proceso sin perder identidad funcional cada sector y teniendo claro el reporte jerárquico que corresponda",
      "Cotar a la organización de una estructura de carácter horizontal siguiendo los procesos interfuncionales y con una clara visión de orientación al cliente final",
      "La revisión continua de procesos, la capacitación constante de los empleados y una óptima gestión de resistencia al cambio",
    ],
    respuesta:
      "Poder trabajar orientados al proceso sin perder identidad funcional cada sector y teniendo claro el reporte jerárquico que corresponda",
  },
  {
    pregunta: "Nube pública",
    opciones: [
      "En general es propiedad de la empresa que la utiliza",
      "La ventaja principal es el control que se puede realizar sobre los datos",
      "Gestión de seguridad y operaciones controladas por el proveedor, siendo responsable por la oferta de servicios",
      "Todas las anteriores",
      "Ninguna",
    ],
    respuesta: "Ninguna",
  },
  {
    pregunta: "Respecto a una plataforma en la nube, se denomina",
    opciones: ["IaaS", "SaaS", "PaaS", "Ninguna"],
    respuesta: "PaaS",
  },
  {
    pregunta: "Un diagrama de Gantt representa",
    opciones: [
      "La distribución de tareas en el tiempo",
      "Nodos críticos",
      "El costo de cada tarea",
      "El tiempo que le queda libre a cada tarea",
      "Todas las opciones",
      "Ninguna",
    ],
    respuesta: "Todas las opciones",
  },
  {
    pregunta: "Un diagrama de Pert visualiza",
    opciones: [
      "El orden de las tareas",
      "La fecha temprana y tardía",
      "Los nodos críticos",
      "Las dependencias entre las tareas",
    ],
    respuesta: "Las dependencias entre las tareas",
  },
  {
    pregunta: "Un diagrama de Ishikawa se utiliza para",
    opciones: [
      "Identificar y visualizar posibles causas de un problema",
      "Planificar la secuencia de tareas en un proyecto",
      "Evaluar el rendimiento de un proceso",
      "Determinar el costo total de un proyecto",
    ],
    respuesta: "Identificar y visualizar posibles causas de un problema",
  },
  {
    pregunta: "La gestión del conocimiento se refiere a",
    opciones: [
      "El proceso de adquirir, organizar, aplicar y compartir información",
      "La planificación estratégica de una organización",
      "La supervisión de los recursos humanos",
      "La auditoría interna de una empresa",
    ],
    respuesta:
      "El proceso de adquirir, organizar, aplicar y compartir información",
  },
  {
    pregunta:
      "En la teoría de la motivación de Maslow, la jerarquía de necesidades incluye",
    opciones: [
      "Necesidades fisiológicas, de seguridad, sociales, de estima y de autorrealización",
      "Necesidades básicas, secundarias y terciarias",
      "Necesidades materiales y espirituales",
      "Necesidades individuales y colectivas",
    ],
    respuesta:
      "Necesidades fisiológicas, de seguridad, sociales, de estima y de autorrealización",
  },
  {
    pregunta: "El modelo SWOT se utiliza para",
    opciones: [
      "Analizar las fortalezas, debilidades, oportunidades y amenazas de una organización",
      "Evaluar el rendimiento financiero de una empresa",
      "Planificar la distribución de recursos en un proyecto",
      "Determinar la rentabilidad de un producto",
    ],
    respuesta:
      "Analizar las fortalezas, debilidades, oportunidades y amenazas de una organización",
  },
  {
    pregunta: "En la gestión de proyectos, el camino crítico es",
    opciones: [
      "La secuencia de tareas que determina la duración total del proyecto",
      "La ruta más corta entre el inicio y el fin del proyecto",
      "La línea de tiempo que muestra todas las tareas del proyecto",
      "La etapa donde se toman decisiones críticas",
    ],
    respuesta:
      "La secuencia de tareas que determina la duración total del proyecto",
  },
  {
    pregunta:
      "En la teoría de Herzberg, los factores que generan satisfacción en el trabajo se llaman",
    opciones: [
      "Factores higiénicos",
      "Factores motivacionales",
      "Factores extrínsecos",
      "Factores intrínsecos",
    ],
    respuesta: "Factores motivacionales",
  },
  {
    pregunta: "La matriz BCG se utiliza para",
    opciones: [
      "Analizar el portafolio de productos de una empresa en términos de cuota de mercado y crecimiento",
      "Evaluar la eficiencia operativa de una organización",
      "Determinar la rentabilidad de un proyecto",
      "Planificar la expansión geográfica de una empresa",
    ],
    respuesta:
      "Analizar el portafolio de productos de una empresa en términos de cuota de mercado y crecimiento",
  },
  {
    pregunta: "El término 'outsourcing' se refiere a",
    opciones: [
      "Contratar a terceros para realizar actividades o procesos específicos",
      "Externalizar todos los departamentos de una empresa",
      "Delegar responsabilidades a los empleados internos",
      "Integrar todas las operaciones en una única ubicación",
    ],
    respuesta:
      "Contratar a terceros para realizar actividades o procesos específicos",
  },
  {
    pregunta: "La matriz de Eisenhower se utiliza para",
    opciones: [
      "Priorizar tareas según su urgencia e importancia",
      "Planificar la asignación de recursos en un proyecto",
      "Evaluar el desempeño de los empleados",
      "Analizar el rendimiento financiero de una empresa",
    ],
    respuesta: "Priorizar tareas según su urgencia e importancia",
  },
  {
    pregunta: "En el ámbito de la calidad, el ciclo PDCA se refiere a",
    opciones: [
      "Planificar, Hacer, Verificar, Actuar",
      "Producir, Distribuir, Comercializar, Analizar",
      "Programar, Desarrollar, Controlar, Ajustar",
      "Pensar, Decidir, Comunicar, Actuar",
    ],
    respuesta: "Planificar, Hacer, Verificar, Actuar",
  },
  {
    pregunta: "La matriz de Ansoff se utiliza para",
    opciones: [
      "Analizar estrategias de crecimiento en términos de productos y mercados",
      "Evaluar la rentabilidad de un proyecto",
      "Planificar la distribución de recursos en una empresa",
      "Determinar la cuota de mercado de un producto",
    ],
    respuesta:
      "Analizar estrategias de crecimiento en términos de productos y mercados",
  },
  {
    pregunta: "El liderazgo transformacional se caracteriza por",
    opciones: [
      "Inspirar y motivar a los empleados, fomentando la innovación y el cambio",
      "Mantener un enfoque autocrático en la toma de decisiones",
      "Priorizar la eficiencia operativa sobre la motivación de los empleados",
      "Adoptar un estilo de liderazgo transaccional",
    ],
    respuesta:
      "Inspirar y motivar a los empleados, fomentando la innovación y el cambio",
  },
  {
    pregunta: "El modelo de las 5 fuerzas de Porter se utiliza para",
    opciones: [
      "Analizar la competencia y la estructura de una industria",
      "Evaluar el rendimiento financiero de una empresa",
      "Determinar la eficiencia operativa de un proyecto",
      "Planificar la expansión geográfica de una organización",
    ],
    respuesta: "Analizar la competencia y la estructura de una industria",
  },
  {
    pregunta: "En la teoría de la contingencia, se sostiene que",
    opciones: [
      "No hay un enfoque único para gestionar una organización y las prácticas efectivas dependen del contexto",
      "Las organizaciones deben seguir un conjunto de principios universales para tener éxito",
      "El liderazgo eficaz se basa en rasgos personales específicos",
      "Las estructuras organizativas deben ser rígidas y jerárquicas",
    ],
    respuesta:
      "No hay un enfoque único para gestionar una organización y las prácticas efectivas dependen del contexto",
  },
  {
    pregunta: "El método SMART se utiliza para",
    opciones: [
      "Establecer objetivos específicos, medibles, alcanzables, relevantes y con plazo",
      "Evaluar el desempeño de los empleados",
      "Analizar la eficiencia operativa de un proyecto",
      "Planificar la distribución de recursos en una empresa",
    ],
    respuesta:
      "Establecer objetivos específicos, medibles, alcanzables, relevantes y con plazo",
  },
  {
    pregunta:
      "En la teoría del liderazgo situacional de Hersey y Blanchard, los estilos de liderazgo incluyen",
    opciones: [
      "Directivo, Participativo, Delegativo",
      "Autocrático, Democrático, Laissez-faire",
      "Carismático, Transaccional, Transformacional",
      "Autoritario, Burocrático, Carismático",
    ],
    respuesta: "Directivo, Participativo, Delegativo",
  },
  {
    pregunta: "El método de evaluación 360 grados se caracteriza por",
    opciones: [
      "Recopilar retroalimentación sobre el desempeño de un individuo de diversas fuentes",
      "Evaluar a los empleados únicamente desde la perspectiva del supervisor",
      "Concentrarse en la autoevaluación del empleado",
      "Basarse en evaluaciones numéricas sin comentarios detallados",
    ],
    respuesta:
      "Recopilar retroalimentación sobre el desempeño de un individuo de diversas fuentes",
  },
  {
    pregunta: "El término 'benchmarking' se refiere a",
    opciones: [
      "Comparar el rendimiento de una empresa con el de otras consideradas como las mejores en su industria",
      "Establecer estándares internos para evaluar el desempeño de los empleados",
      "Realizar evaluaciones de rendimiento basadas en indicadores financieros",
      "Analizar el retorno de la inversión de un proyecto",
    ],
    respuesta:
      "Comparar el rendimiento de una empresa con el de otras consideradas como las mejores en su industria",
  },
  {
    pregunta: "El método Delphi se utiliza para",
    opciones: [
      "Obtener consenso sobre pronósticos futuros a través de rondas de preguntas estructuradas",
      "Evaluar el rendimiento financiero de una empresa",
      "Determinar la eficiencia operativa de un proyecto",
      "Planificar la distribución de recursos en una organización",
    ],
    respuesta:
      "Obtener consenso sobre pronósticos futuros a través de rondas de preguntas estructuradas",
  },
  {
    pregunta:
      "En la teoría de la administración científica, Frederick Taylor abogaba por",
    opciones: [
      "La aplicación de métodos científicos para mejorar la eficiencia en la producción",
      "La descentralización y la autonomía de los trabajadores",
      "La orientación hacia los aspectos humanos en la gestión",
      "El enfoque en la calidad del producto sobre la velocidad de producción",
    ],
    respuesta:
      "La aplicación de métodos científicos para mejorar la eficiencia en la producción",
  },
];
