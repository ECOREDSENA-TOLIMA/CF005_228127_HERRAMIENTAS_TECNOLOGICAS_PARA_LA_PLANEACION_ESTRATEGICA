<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Evaluación del plan de tratamiento de riesgos
    p(data-aos="fade-left") Como toda estrategia de implementación, es importante evaluar la efectividad de su aplicación, en este caso, corresponde a la evaluación del plan de tratamiento de riesgos que se ha propuesto para gestionar los riesgos en la organización.
    p(data-aos="fade-left") La evaluación del plan de tratamiento de riesgos se realiza a partir de:

    .row.justify-content-center 
      .col-lg-10.col-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | #[b Riesgos identificados:] partiendo de los riesgos que se identificaron en la organización antes de aplicar los controles.
              br
              li
                i.fas.fa-angle-right
                | #[b Controles implementados:] salvaguardas establecidas e implementadas para la gestión del riesgo.
              br
              li
                i.fas.fa-angle-right
                | #[b Métricas e indicadores:] registros, métricas e indicadores para la gestión del riesgo establecidas, lo cual nos dará una orientación para conocer su efectividad.
              br
              br
    p.mt-5(data-aos="fade-left") A continuación, se realiza una descripción detallada de cada una de las actividades que una organización determinada debe desarrollar para trabajar en la mitigación y el control de los riesgos:

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 Reconocimiento de controles
    
    .row.justify-content-center.align-items-center 
      .col-lg-3.col-8
        figure
          img(src='@/assets/curso/temas/tema5/2.svg', alt='Imagen decorativa')
      .col-lg-9.col-12
        p(data-aos="fade-left") Es fundamental reconocer los controles existentes desde la última revisión del plan de tratamiento de riesgos, uno de los insumos primordiales es el documento de Declaración de Aplicabilidad (SOA), este brindara un punto de partida sobre los controles que se deben de evaluar.
        p(data-aos="fade-left") Aquí cobra importancia la documentación de la gestión de incidentes, que permitirá contar con insumos para determinar si las acciones adelantadas fueron eficientes.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Técnicas de auditoria
    
    p(data-aos="fade-left") La auditoría para la seguridad de la información puede realizarse desde diferentes puntos de vista, y esto permitirá reconocer alguna debilidad o vulnerabilidad presente en la organización.
    p(data-aos="fade-left") Las técnicas pueden variar dependiendo del objetivo y el tipo de auditoría que se desea realizar, desde la óptica de la ciberseguridad se pueden apreciar los siguientes tipos de auditoria:

    .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #E1F5D6")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Auditoria de vulnerabilidades
            p Este tipo de auditorías permite reconocer las fallas de seguridad a la que se enfrentan las aplicaciones con las cuales opera la organización, estaría incluido también la seguridad que se puede desplegar hacia su uso y las debilidades de manejo de las aplicaciones.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/3.jpg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Auditoria de código fuente
            p Permite reconocer la calidad y la seguridad de las aplicaciones desde su código fuente y busca identificar algunas malas prácticas o agujeros existentes que pueden poner en riesgo la seguridad de la información.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/4.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Auditoria de redes
            p Como su nombre lo indica, permite evaluar la seguridad en las infraestructuras de redes conectadas como inalámbricas, incluye la evaluación de dispositivos de gestión y aplicaciones de red #[i (firewall, router, switch, utm, acces point,]etc).

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/5.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Auditoria forense
            p Se realiza posterior a un incidente sucedido en la organización y busca en primer lugar identificar el origen del incidente, vulnerabilidades explotadas e impacto generado, para tomar decisión y establecer controles necesarios para que no vuelva a suceder.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/6.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 #[i Hacking] ético
            p Se desarrollan a partir de pruebas de penetración o también conocido como #[i pentesting], con el cual se indagan vulnerabilidades a partir de la búsqueda y posible explotación de sistemas de información, aplicaciones, servicios o infraestructura de red, para determinar el grado de explicación de la organización.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/6.jpg', alt='Imagen decorativa')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_3 5.3 Plan de auditoria
    p(data-aos="fade-left") El ejercicio de la auditoria debe estar enmarcado en un plan que permita establecer su alcance, objetivos, técnicas entre otros aspectos claves para su desarrollo.
    p(data-aos="fade-left") La norma ISO 19011, sugiere un ciclo de vida, que permite estructurar los pasos necesarios para el desarrollo de estos ejercicios (ICONTEC, 2018), como lo presenta en la siguiente figura: 

    .row.justify-content-center.mt-5
      .col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span #[i Flujograma de la gestión de un programa de auditoría]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema5/8.svg' alt='En la figura se representan el flujo de planear, hacer, verificar y actuar. Planear tiene los puntos: 5.2 Establecer los objetivos del programa. 5.2 Establecer los objetivos de programa 5.3 Determinar y evaluar los riesgos y oportunidades del programa de auditoría 5.4 Establecer el programa de auditoría. Pasa el flujo a Hacer con el punto: 5.5 Implementar el programa de auditoría. Pasa el flujo a verificar con el punto: 5.6 Monitorear el programa de auditoría. Pasa el flujo a Actuar con el punto: 5.7 Revisar y mejorar el programa de auditoría Pasa el flujo a Planear con el punto: 6.2 Iniciar auditoría. 6.3 Preparar actividades de auditoría. Pasa el flujo a Hacer con el punto: 6.4 Realizar actividades de auditoría. 6.5 Preparar y distribuir informe de auditoría. Pasa el flujo a Verificar con el punto: 6.6 Completar la auditoría. Pasa el flujo a Actuar con el punto 6.7 Realizar auditoría de seguimiento.')
            figcaption Nota: tomado de Norma ISO 19011:2018
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/9.svg' alt='En la figura se representan el flujo de planear, hacer, verificar y actuar. Planear tiene los puntos: 5.2 Establecer los objetivos del programa. 5.2 Establecer los objetivos de programa 5.3 Determinar y evaluar los riesgos y oportunidades del programa de auditoría 5.4 Establecer el programa de auditoría. Pasa el flujo a Hacer con el punto: 5.5 Implementar el programa de auditoría. Pasa el flujo a verificar con el punto: 5.6 Monitorear el programa de auditoría. Pasa el flujo a Actuar con el punto: 5.7 Revisar y mejorar el programa de auditoría Pasa el flujo a Planear con el punto: 6.2 Iniciar auditoría. 6.3 Preparar actividades de auditoría. Pasa el flujo a Hacer con el punto: 6.4 Realizar actividades de auditoría. 6.5 Preparar y distribuir informe de auditoría. Pasa el flujo a Verificar con el punto: 6.6 Completar la auditoría. Pasa el flujo a Actuar con el punto 6.7 Realizar auditoría de seguimiento.')
              figcaption Nota: tomado de Norma ISO 19011:2018
    p.mt-5(data-aos="fade-left") En material complementario se puede consultar más información sobre el desarrollo una auditoria en la norma ISO 19011.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_4 5.4 Informe de auditoría
    p(data-aos="fade-left") Una vez desarrollada la auditoria, en donde se realizaron las verificaciones y validaciones, se podrá dar cierre al ejercicio y proceder a conformar un informe donde se consolidan las conclusiones de la misma; de acuerdo a la norma ISO 19011, este informe deberá de reforzar aspectos como:
    .cajon.p-4.mb-3(style="background-color: #FDFDE3")
      .row.justify-content-center 
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-lg-8.col-12
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Objetivos de la auditoría.
                li
                  i.fas.fa-angle-right
                  | Alcance de la auditoría, particularmente la identificación de la organización (el auditado) y las funciones o procedimientos auditados.
                li
                  i.fas.fa-angle-right
                  | Identificación del cliente auditado.
                li
                  i.fas.fa-angle-right
                  | Identificación del equipo auditor y de los participantes del auditado que han sido participantes.
                li
                  i.fas.fa-angle-right
                  | Fechas y locaciones donde las actividades de auditoría fueron llevadas a cabo.
                li
                  i.fas.fa-angle-right
                  | Los criterios de auditoría.
                li
                  i.fas.fa-angle-right
                  | Hallazgos de auditoría y evidencia relacionada.
                li
                  i.fas.fa-angle-right
                  | Conclusiones de auditoría.
                li
                  i.fas.fa-angle-right
                  | Una declaración del grado en el cual los criterios de auditoría han sido cumplidos.
                li
                  i.fas.fa-angle-right
                  | Alguna opinión divergente sin resolver entre el equipo auditor y el auditado.
                li
                  i.fas.fa-angle-right
                  | Las auditorías son por naturaleza un ejercicio de muestreo; como tal hay un riesgo de que la evidencia de auditoría examinada no sea representativa.
            .col-lg-4.col-12
              figure
                img(src='@/assets/curso/temas/tema5/10.svg', alt='Imagen decorativa')
    p.mt-5 Además, se deberá de especificar claramente:

    .cajon.p-4.mb-3(style="background-color: #E1F5D6")
      .row.justify-content-center 
        .col-lg-10.col-12
          .row.justify-content-center.align-items-center
            .col-lg-8.col-12
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Plan de auditoría, incluido el cronograma.
                li
                  i.fas.fa-angle-right
                  | Resumen del proceso de auditoría, presentando cualquier obstáculo encontrado que pudiera disminuir la confiablidad en las conclusiones de auditoría.
                li
                  i.fas.fa-angle-right
                  | Confirmación del alcance de los objetivos del plan de auditoría.
                li
                  i.fas.fa-angle-right
                  | Aclaración, si alguna área no puso ser incluida, especificando la causa y justificación.
                li
                  i.fas.fa-angle-right
                  | Resumen incluyendo conclusiones de la auditoría y los hallazgos principales.
                li
                  i.fas.fa-angle-right
                  | Buenas prácticas identificadas.
                li
                  i.fas.fa-angle-right
                  | Plan de acción de seguimiento acordado, si aplica.
                li
                  i.fas.fa-angle-right
                  | Declaración de la naturaleza confidencial de los contenidos.
                li
                  i.fas.fa-angle-right
                  | Cualquier implicación para el programa de auditoría o auditorías posteriores.
            .col-lg-4.col-12
              figure
                img(src='@/assets/curso/temas/tema5/11.svg', alt='Imagen decorativa')
    
    p.mt-5(data-aos="fade-left") Este informe deberá ser presentado y entregado a las partes interesadas, líderes de sistemas de gestión o la alta gerencia cuando sea el caso.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_5 5.5 Plan de mejoramiento
    
    p(data-aos="fade-left") Tomando como referencia el informe de la auditoria, en donde se consignaron los hallazgos tanto negativos como positivos de la evaluación realizada, la organización, deberá establecer un plan de tratamiento que permita mejorar las condiciones para hacer frente a los riesgos que pueden presentarse en la organización.
    p(data-aos="fade-left") Así mismo se deberá de establecer planes de atención a cada una de los hallazgos, informando de aspectos como son:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center 
          .col-lg-7.col-12
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Causas que llevaron a la identificación del problema raíz.
              li
                i.fas.fa-angle-right
                | Responsable de la acción de mejoramiento.
              li
                i.fas.fa-angle-right
                | Actividades destinadas a la remediación del problema o falla.
            p - Estas deben ser realistas.
            p - Alcanzables.
            p - Permitir registro de su aplicación y validez.
            p - Las actividades no deberán depender de entidades externas.
            p - Las actividades deben ser establecidas para eliminar la causa detectada.
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Tiempo estimado para aplicar acciones de mejora.
          .col-lg-5.col-8
            figure
              img(src='@/assets/curso/temas/tema5/12.svg', alt='Imagen decorativa')

    p.mt-5(data-aos="fade-left") Los planes de mejoramiento deberán contar con revisiones periódicas para validar sus avances y una vez se realicen completamente o se cumpla el tiempo establecido, deberán ser comunicadas al auditor quien verificará su aplicación y dará por cerrado el plan de mejoramiento.
    p(data-aos="fade-left") Para la construcción de estos planes de mejoramiento, se pueden apoyar en instrumentos como hojas de cálculo que permiten mantener un registro de las acciones implementadas.

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .cajon.color-primario.p-4.mb-4(style="background-image: #E1F5D6")
          p Es así que se puede concluir que el ejercicio de la evaluación del riesgo en las organizaciones es un factor fundamental para mantener la seguridad de los activos de información, este ejercicio debe ser continuo y permanente a partir de su ciclo PHVA, el cual permite el mejoramiento continuo.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
