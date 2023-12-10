<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de gestión del riesgo
    p(data-aos="fade-left") La gestión del riesgo se consolida como la combinación de actividades encaminadas a reducir una vulnerabilidad, que puede convertirse más adelante en una amenaza que afecte el desarrollo normal de una organización.
    p(data-aos="fade-left") La gestión del riesgo se compone de dos actividades principales: el análisis y el tratamiento, las cuales, se revisan a continuación: 

    .row.justify-content-center
      .col-lg-10.col-12
        ImagenInfografica.desktop.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/1.svg', alt='Imagen decorativa')

          .tarjeta.color-acento-botones.p-3(x="19.5%" y="66.8%" numero="")
            .h5.mb-2 Tratamiento del riesgo
            p Esta etapa, permite establecer los controles y acciones necesarias para hacer frente a todos los riesgos que fueron identificados, de esta forma evitar que se genere un impacto negativo en la organización.
          .tarjeta.color-acento-botones.p-3(x="80.6%" y="45%" numero="")
            .h5.mb-2 Gestión del riesgo
            p Es un enfoque estructurado para manejar la incertidumbre relativa a una amenaza a través de una secuencia de actividades que incluyen la identificación, el análisis y la evaluación de riesgo, para luego establecer las estrategias de su tratamiento utilizando diferentes recursos.
          .tarjeta.color-acento-botones.p-3(x="19.5%" y="28.5%" numero="")
            .h5.mb-2 Análisis de riesgo
            p En esta etapa la organización es evaluada, el análisis abarca el estudio de las posibles amenazas, y eventos no deseados, y el impacto, daños, o consecuencias que estos podrían producir a la organización. 
    
    .row.justify-content-center
      .col-12        
        figure.movil
          img(src='@/assets/curso/temas/tema1/2.svg', alt='Imagen decorativa')

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        p(data-aos="fade-left") A continuación, se darán a conocer algunos conceptos importantes para el desarrollo de estas actividades, y como estas pueden ser útiles para hacer frente a los riesgos que pueden afectar a la organización.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Caracterización de amenazas

    p(data-aos="fade-left") Antes de hablar de amenazas es importante comprender el concepto de vulnerabilidad, la cual de acuerdo a INCIBE (2017), se define de la siguiente manera:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Vulnerabilidad
        br
        br
        p.mb-0 Una debilidad o fallo en un sistema de información que pone en riesgo la seguridad de la información pudiendo permitir que un atacante pueda comprometer la integridad, disponibilidad o confidencialidad de la misma.
          br
          br

    .row.mb-5
      p(data-aos="fade-left") Teniendo en cuenta la anterior definición es más fácil definir lo que se considera una amenaza:

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Amenaza
        br
        br
        p.mb-0 Cualquier acción que se aprovecha de una vulnerabilidad, para ocasionar un incidente que puede poner en riesgo la seguridad de la información.
          br
          br
    p.mt-5(data-aos="fade-left") Así mismo, algunas metodologías para la gestión de riesgo, sugiere tener presente las categorías de amenazas, entre las que se pueden resaltar:

    .row.justify-content-center
      .col-lg-10.col-12
        ImagenInfografica.desktop.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/5.svg', alt='Imagen decorativa')

          .tarjeta.color-acento-botones.p-3(x="23.2%" y="15%" numero="")
            .h5.mb-2 De origen natural
            p Comprende todas las amenazas que son causadas a partir de eventos generados por la naturaleza y causados de forma natural, por ejemplo: sismos, huracanes, inundaciones, tormentas, entre otros.
          .tarjeta.color-acento-botones.p-3(x="50%" y="71%" numero="")
            .h5.mb-2 Defectos de aplicaciones
            p Son aquellas amenazas generadas a partir de la debilidad o errores en programas, por ejemplo: bugs, desactualización, malas prácticas, entre otros.
          .tarjeta.color-acento-botones.p-3(x="77%" y="15%" numero="")
            .h5.mb-2 Causadas por personas de forma deliberada
            p A diferencia de la anterior, estas amenazas son causadas con intención o para obtener un beneficio, bien sea causando daños o no.
          .tarjeta.color-acento-botones.p-3(x="23.2%" y="54.5%" numero="")
            .h5.mb-2 Del entorno
            p Son amenazas generadas a partir de desastres industriales, como por ejemplo sobrecarga eléctrica, infección, contaminación.
          .tarjeta.color-acento-botones.p-3(x="77%" y="54.5%" numero="")
            .h5.mb-2 Causadas por personas de forma accidental
            p Como su nombre lo indica, son causadas por las personas, pero que no tenían la intención de generar daño, y se entiende que fue causada por desconocimiento o error.
    
    .row.justify-content-center
      .col-12        
        figure.movil
          img(src='@/assets/curso/temas/tema1/6.svg', alt='Imagen decorativa')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Tipos de riesgo
    p(data-aos="fade-left") Una vez, identificados y reconocidos los términos de vulnerabilidad y amenaza, es momento de hablar del riesgo, además, resulta fundamental reconocer la relación de dichos conceptos.

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .cajon.color-primario.p-4.mb-4(style="background-image: #E1F5D6")
          p El riesgo es entendido como la probabilidad de que se genere un incidente de seguridad, mediante la materialización de una amenaza que aprovecho una vulnerabilidad para materializarse.

    p.mt-5(data-aos="fade-left") Ahora bien, el riesgo siempre existe, y generalmente prevalecen en el tiempo, por ende, es necesario conocer los aspectos fundamentales para su tratamiento, lo que permitirá reducir la probabilidad de ocurrencia o reducir el impacto que puede tener para una organización, de acuerdo a lo anterior, se puede decir que existe un riesgo antes de la gestión y uno diferente después de la gestión realizada, lo que permite categorizar el riesgo de la siguiente manera:


    .tarjeta--container.row.mb-5.justify-content-center.mt-5
      .col-md.tarjeta.color-primario.p-5(style="background-color: #E1F5D6")
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')
          
        h2.text-center(style="color: #12263F")  Riesgo inherente
        p(style="color: #12263F")  Este tipo de riesgo, es aquel que se identifica sobre un activo de información y sobre el cual, no se ha realizado ninguna acción ni aplicado control alguno.
      .col-md.tarjeta.color-primario.p-5(style="background-color: #FDFDE3")
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema1/8.svg', alt='Texto que describa la imagen')
          
        h2.text-center(style="color: #12263F")  Riesgo residual
        p(style="color: #12263F")  Este tipo de riesgo, corresponde al riesgo que prevalece después de haber aplicado acciones o controles para la mitigación del riesgo.

    
    p(data-aos="fade-left") Se espera que una vez se realiza una gestión del riesgo, el residual sea muy diferente al inherente, ya que se debieron de haber aplicado los controles y/o correctivos para evitar que estos afecten la organización.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3 Normatividad
    p(data-aos="fade-left") La gestión del riesgo se ha convertido en uno de los insumos principales para la gestión de la ciberseguridad y la seguridad de la información, y esto, se ve reflejado en diferentes propuestas de normatividad tanto técnica como legal. Para las organizaciones salvaguardar la disponibilidad, confidencialidad y la integridad de la información a partir de la aplicación de controles, tanto lógicos como técnicos, se ha convertido en una obligación imperante.

    P(data-aos="fade-left") A continuación, se pueden identificar una serie de normas técnicas que orientan la aplicación de este proceso:

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Normas y técnicas para la gestión de riesgo:
      div.titulo-herramientas.d-block.d-md-none Normas y técnicas para la gestión de riesgo:

    p(data-aos="fade-left") ISO:31000 Gestión del riesgo – Directrices: Esta norma comparte las directrices para la gestión de los riesgos en las organizaciones (ICONTEC, 2018).
    p(data-aos="fade-left") Dicha norma se fundamenta en 3 elementos claves:

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-5.col-8.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/9.png', alt='Imagen decorativa')
      .col-lg-7.col-12.mb-3
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Los principios para la gestión de riesgos")
            .col-md-12.mb-4.mb-md-0
              p Se aplican para mayor eficacia en una organización.
          .row(titulo="La estructura de soporte o marco de trabajo")
            .col-md-12.mb-4.mb-md-0
              p El objetivo de este elemento es integrar el proceso de gestión de riesgos con la dirección, para que esta adquiera un fuerte compromiso con la implantación de la gestión del riesgo.
          .row(titulo="El proceso de gestión de riesgos")
            .col-md-12.mb-4.mb-md-0
              p Este proceso consta de tres etapas: establecimiento del contexto, valoración de riesgos y tratamiento de los mismos.

    .row.justify-content-center.mt-5
      p(data-aos="fade-left") Además, la norma establece los siguientes principios:

    .tarjeta.tarjeta--gris.p-4.mb-5(style="background-color: #E1F5D6")
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="1")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Estar integrada en los procesos de una organización
            p No debe ser entendida como una actividad aislada, sino como parte de las actividades y procesos principales de una organización.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/10.jpg', alt='Imagen decorativa')
        .row(titulo="2")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Crear y proteger el valor
            p Contribuye a la consecución de objetivos, así como la mejora de ciertos aspectos tales como la seguridad y salud laboral, cumplimiento de los requisitos legales, protección ambiental, etc.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/11.jpg', alt='Imagen decorativa')
        .row(titulo="3")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Formar parte de la toma de decisiones
            p La gestión del riesgo ayuda a la toma de decisiones evaluando la información sobre las distintas alternativas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/12.jpg', alt='Imagen decorativa')
        .row(titulo="4")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Tratar explícitamente la incertidumbre
            p La gestión del riesgo trata aquellos aspectos de la toma de decisiones que son inciertos, la naturaleza de esa incertidumbre y como puede tratarse.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/13.jpg', alt='Imagen decorativa')
        .row(titulo="5")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Ser sistemática, estructurada y adecuada
            p Contribuye a la eficiencia y, consecuentemente, a la obtención de resultados fiables.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/14.jpg', alt='Imagen decorativa')
        .row(titulo="6")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Basarse en la mejor información disponible
            p Los inputs del proceso de gestión del riesgo están basados en fuentes de información como la propia experiencia, la observación y la opinión de expertos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/15.jpg', alt='Imagen decorativa')
        .row(titulo="7")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Estar hecha a medida
            p La gestión del riesgo está alineada con el contexto externo e interno de la organización, y con su perfil de riesgo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/16.jpg', alt='Imagen decorativa')
        .row(titulo="8")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Tener en cuenta factores humanos y culturales
            p Reconoce la capacidad y percepción de los empleados y personas interesadas, esto puede facilitar o dificultar la consecución de los objetivos de la organización.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/17.jpg', alt='Imagen decorativa')
        .row(titulo="9")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Ser transparente e inclusiva
            p La apropiada y oportuna participación de los grupos de interés (stakeholders) y, en particular, de los responsables a todos los niveles, asegura que la gestión del riesgo permanece relevante y actualizada.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/18.jpg', alt='Imagen decorativa')
        .row(titulo="10")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Ser dinámica, iterativa y sensible al cambio
            p La organización debe velar para que la gestión del riesgo detecte y responda a los cambios de la empresa y de su entorno.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/19.jpg', alt='Imagen decorativa')
        .row(titulo="11")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [AD] AdministFacilitar la mejora continua de la organizaciónración
            p Las organizaciones deberían desarrollar e implementar estrategias para mejorar continuamente, tanto en la gestión del riesgo como en cualquier otro aspecto de la organización.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/20.jpg', alt='Imagen decorativa')

    p(data-aos="fade-left") Esta norma considera que la aplicación y relación de políticas, procedimientos y prácticas, conforman el proceso general de la gestión de riesgos.
    p(data-aos="fade-left") Como es común en todas las normas ISO, esta norma incorpora el ciclo PHVA para el proceso de mejora continua y para garantizar que sea permanente en las organizaciones, generando una cultura de la seguridad basada en la gestión del riesgo.

    TabsA.color-acento-botones.mb-5.mt-5
      .tarjeta.color-primario--borde.p-4(titulo="ISO:27001")
        h4 ISO:27001 Tecnología de la información
        p Técnicas de seguridad, sistemas de gestión de la seguridad de la información.
        p Requisitos: esta norma brinda los lineamientos para el establecimiento de un Sistema de Gestión de la Seguridad de la Información SGSI en una organización.
        p Un sistema de gestión de la seguridad de la información se entiende como un sistema compuesto por una serie de procesos para implementar, mantener y mejorar de forma continua la seguridad de la información tomando como base los riesgos que afectan la seguridad en una organización (ICONTEC, 2018).

      .tarjeta.color-primario--borde.p-4(titulo="ISO:9001")
        h4 ISO:9001 Sistemas de gestión de la calidad
        p Requisitos: esta norma brinda las orientaciones para el establecimiento de los sistemas de gestión de la calidad en las organizaciones.
        p En su última versión, adopta un enfoque basado en procesos para los sistemas de gestión de la calidad, buscando siempre un mejoramiento de los procesos, procedimientos y productos de las organizaciones (ICONTEC, 2015).
        p Además, adopta un pensamiento basado en riesgos en la aceptación de su sistema, con el cual se busca mantener un adecuado control de los activos de información de las organizaciones.

      .tarjeta.color-primario--borde.p-4(titulo="ISO:55002")
        h4 ISO:55002 Gestión de activos,  Sistemas de gestión
        p Esta norma da continuidad con la norma ISO 55000 con la cual se contempla el concepto, terminología y entorno de cuidado de los activos, con la norma ISO 55001 que indica los requerimientos para el Sistema de Gestión de Activos- SGA, La ISO 55002 comparte la interpretación y guía de implementación de las normas en las organizaciones (UpKeep, 2023).
        p La norma ISO 55002, resalta como establecer un programa de gestión de riesgos aplicado a los activos, agregándole un plus al programa integrado de gestión de activos, dando a la alta dirección una mejor comprensión de la relación entre la gestión de activos y la gestión de riesgos.

      .tarjeta.color-primario--borde.p-4(titulo="ISO:19011")
        h4 ISO:19011 Directrices auditoría de los sistemas de gestión
        p Esta norma brinda los lineamientos para la auditoria de cualquier sistema de gestión.
        p Puede aplicarse a cualquier tipo de organización, independiente si mantiene un sistema de gestión o no, pero su apropiación es de vital importancia para validar el cumplimiento del sistema dentro de la organización (ICONTEC, 2018).
         

      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
