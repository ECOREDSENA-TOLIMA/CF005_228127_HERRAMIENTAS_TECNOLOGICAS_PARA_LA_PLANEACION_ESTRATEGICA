<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Identificación de riesgos
    
    p(data-aos="fade-left") Para el ejercicio de identificar y reconocer los riesgos que pueden afectar a una organización, es necesario aplicar las metodologías que han sido puestas a disposición para este fin, es aquí, donde se trae como referente a  #[i MAGERIT], la cual es una metodología para la gestión del riesgo, que está basada en la norma ISO 31000, precisamente en su apartado 4.4 denominado “Implementar la gestión del riesgo”, consolida el marco para la gestión (ICONTEC, 2018), como se representa en la siguiente figura.

    .row.justify-content-center
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span #[i Marco de trabajo para la gestión de riesgos de acuerdo a ISO 31000]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/1.svg' alt='Figura 1 Marco de trabajo para la gestión de riesgos de acuerdo a ISO 31000 En la figura se representa los siguientes pasos en el mismo orden: 3. Principios. 4.2 Mandato y compromiso 4.3 Diseño del marco de trabajo 4.4 Implementación de la gestión de riesgos, acá interactúa con MAGERIT 4.5 Seguimiento y revisión del marco 4.6 Mejora continua del marco, y regresa al punto 4.3')
            figcaption Nota. Nota: adaptado de #[i MAGERIT]– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/2.svg' alt='Figura 1 Marco de trabajo para la gestión de riesgos de acuerdo a ISO 31000 En la figura se representa los siguientes pasos en el mismo orden: 3. Principios. 4.2 Mandato y compromiso 4.3 Diseño del marco de trabajo 4.4 Implementación de la gestión de riesgos, acá interactúa con MAGERIT 4.5 Seguimiento y revisión del marco 4.6 Mejora continua del marco, y regresa al punto 4.3')
              figcaption Nota. Nota: adaptado de #[i MAGERIT]– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información
    p.mt-5(data-aos="fade-left") A continuación, se van a reconocer los principales pasos para realizar una identificación de los riesgos en la organización.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Técnicas de recolección de información
    p(data-aos="fade-left") La aplicación de la metodología requiere de un insumo fundamental que es la información, y en esta ocasión el primer paso a realizar es la recopilación de la información tanto de la organización, como de los activos de la misma, lo cual serán objeto de la evaluación.
    p(data-aos="fade-left") Un insumo principal para realizar una evaluación de riesgos, es en primer lugar, conocer la organización en la cual se va a trabajar, funciones, procesos, áreas, así como todos y cada uno de los activos de información importantes para el desarrollo de las operaciones, en este orden de ideas, se puede hacer uso de las siguientes técnicas:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").mt-5
      .tarjeta.color-secundario.p-4.col-ipad(style="background-color: #FDFDE3")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/3.svg' alt='AvatarTop')
        h2.text-center Seguimiento en medios
        p Realizar el seguimiento a través de medios como las redes sociales y páginas Web, permite reconocer la importancia en el medio de la organización.
      .tarjeta.color-secundario.p-4.col-ipad(style="background-color: #FDFDE3")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/4.svg' alt='AvatarTop')
        h2.text-center Entrevista
        p Se debe realizar con personas preseleccionadas, a las cuales se les realizarán preguntas para conocer más de la organización, procesos, activos de información, y todos aquellos detalles importantes y que pueden ser útiles para analizar.
      .tarjeta.color-secundario.p-4.col-ipad(style="background-color: #FDFDE3")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/5.svg' alt='AvatarTop')
        h2.text-center Lectura de documentos
        p Esta técnica se basa en la revisión de otros recursos, como libros, documentos, registros, que hayan sido entregados a los funcionarios y que no están siendo objeto de revisión.
      .tarjeta.color-secundario.p-4.col-ipad(style="background-color: #FDFDE3")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
        h2.text-center Encuesta
        p Esta técnica se realiza a partir de una interrogación a terceros, mediante instrumentos que permiten documentar aspectos generales, y que sea útil para conocer las respuestas de cada uno de los actores. Estas encuestas pueden realizarse a partir de cuestionarios tanto impresos, como en línea.
      .tarjeta.color-secundario.p-4.col-ipad(style="background-color: #FDFDE3")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema3/7.svg' alt='AvatarTop')
        h2.text-center Observación
        p Esta técnica permite identificar comportamientos, hechos, reconocimiento de lugares y actividades, y que pueden ser útiles para tomar decisiones.
        p Pueden hacer uso de instrumentos para grabar, tomar fotografías, realizar una grabación de la narración mientras realizar el reconocimiento.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Valoración de activos
    
    p(data-aos="fade-left") En esta etapa es necesario que se identifiquen todos los activos relacionados con los procesos de negocio que se deben proteger, teniendo en cuenta los siguientes elementos en un sistema de información:

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-5.col-8.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/8.jpg', alt='Imagen decorativa')
          .col-lg-7.col-12.mb-3
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Información propia.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Información de terceros.
            p(data-aos="fade-left") Entre los activos de información que se deben de identificar, se encuentran:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Datos.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Servicios.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Aplicaciones Informáticas.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                | Equipos informáticos.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                | Soportes de información.
              li 
                .lista-ol--cuadro__vineta
                  span 6
                | Equipamiento auxiliar.
              li 
                .lista-ol--cuadro__vineta
                  span 7
                | Redes de comunicaciones.
              li 
                .lista-ol--cuadro__vineta
                  span 8
                | Instalaciones.
              li 
                .lista-ol--cuadro__vineta
                  span 9
                | Personas.
    p(data-aos="fade-left") Otro aspecto importante por identificar será la dependencia entre los activos, lo cual es fundamental para determinar la relación y la correspondiente necesidad de un activo para con todo el sistema, estas dependencias se deben de estructurar a manera de árbol, lo que va a permitir establecer las ramas de relaciones, entre las más comunes se pueden encontrar:

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Dependencia de activos
      div.titulo-herramientas.d-block.d-md-none Dependencia de activos

    .row.justify-content-center
      .col-lg-10.col-12 
        //- .titulo-sexto.color-acento-contenido
        //-   h5 Figura 1.
        //-   span #[i Marco de trabajo para la gestión de riesgos de acuerdo a ISO 31000]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/9.svg' alt='La dependencia de activos se divide en cinco. 1. Activos Esenciales 2. Servicios internos 3. Instalaciones físicas, personal 4. Del entorno 5. Equipamiento Informático')
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/10.svg' alt='La dependencia de activos se divide en cinco. 1. Activos Esenciales 2. Servicios internos 3. Instalaciones físicas, personal 4. Del entorno 5. Equipamiento Informático')

    .row.justify-content-center
      .col-lg-10.col-12
        p(data-aos="fade-left") Otro aspecto muy importante a tener presente, será la valoración del activo, aquí, se debe dar respuesta a las siguientes preguntas, teniendo en cuenta las diferentes dimensiones:

    .row.justify-content-center
      .col-lg-10.col-12
        ImagenInfografica.desktop.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/11.svg', alt='Imagen decorativa')

          .tarjeta.color-acento-botones.p-3(x="19.5%" y="7.5%" numero="")
            .h5.mb-2 Confidencialidad:
            p ¿Cómo afectaría que la información la conociera un tercero que no debe?
          .tarjeta.color-acento-botones.p-3(x="19.5%" y="55.4%" numero="")
            .h5.mb-2 Integridad:
            p ¿Cómo afectaría a la organización, si la información es dañada?
          .tarjeta.color-acento-botones.p-3(x="50%" y="29.8%" numero="")
            .h5.mb-2 Disponibilidad:
            p ¿Cómo afectaría que una organización no pueda consultar o acceder a la información?
          .tarjeta.color-acento-botones.p-3(x="80.7%" y="7.5%" numero="")
            .h5.mb-2 Autenticidad:
            p ¿Cómo afectaría no conocer las acciones desarrolladas sobre la información?
          .tarjeta.color-acento-botones.p-3(x="80.7%" y="55.5%" numero="")
            .h5.mb-2 Trazabilidad:
            p ¿Cómo afectaría no tener un registro detallado  de las transacciones sobre la información?
    .row.justify-content-center
      .col-12        
        figure.movil
          img(src='@/assets/curso/temas/tema2/12.svg', alt='Imagen decorativa')

    p.mt-5(data-aos="fade-left") Una vez se cuente con la información anterior, se podrá continuar con las valoraciones tanto cualitativa como cuantitativa, estas permiten realizar la valoración sistemática de los activos, a partir del establecimiento de escalas de medición:

    .row.justify-content-center 
      .col-lg-10.col-12
        .row.mb-5.justify-content-center.mt-5
          .col-sm-6.col-xl-6.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h1 Valoración cualitativa
                  p Permiten evaluar rápidamente un activo, identificando el peso de cada activo en comparación a los demás.
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/13.jpg')})`}")
          .col-sm-6.col-xl-6.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  h1 Valoración cuantitativa
                  p Estas valoraciones, se presentan en escalas numéricas absolutas las cuales son algo complejas de establecer; pero permiten establecer operaciones matemáticas para sus evaluaciones
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/14.jpg')})`}")

        p(data-aos="fade-left") Un último elemento a tener presente en la caracterización de los activos es valorar la interrupción del servicio, ya que esta apreciación se diferencia de las anteriores porque afecta directamente la disponibilidad, por ende, se requiere determinar el costo de tener por fuera el servicio por un determinado tiempo, esta valoración se debe establecer en una línea de tiempo que permita identificar claramente las consecuencias de no contar con un sistema de información disponible y su impacto para la organización.
        p(data-aos="fade-left") Los anteriores criterios son necesarios para identificar y caracterizar cada uno de los activos de la organización, y así poder continuar con la identificación de amenazas para cada uno de ellos.
            
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Identificación de amenazas
    p(data-aos="fade-left") De acuerdo a la metodología #[i MAGERIT], y como ya se mencionó anteriormente, existen una serie de amenazas “típicas”, entre las que se encuentran:
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-4.col-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/15.svg', alt='Imagen decorativa')
          .col-lg-8.col-12.mb-3
            ul.lista-ul
              li(style="color: #12263F") 
                i.fas.fa-angle-right(style="color: #12263F")
                | Naturales.
              li(style="color: #12263F") 
                i.fas.fa-angle-right(style="color: #12263F")
                | Industriales.
              li(style="color: #12263F") 
                i.fas.fa-angle-right(style="color: #12263F")
                | Por errores de aplicación.
              li(style="color: #12263F") 
                i.fas.fa-angle-right(style="color: #12263F")
                | Causadas por las personas de forma accidental.
              li(style="color: #12263F") 
                i.fas.fa-angle-right(style="color: #12263F")
                | Causadas por las personas de forma deliberada.
            .cajon.color-primario.p-4.mb-4(style="background-image: #E1F5D6")
              p Las amenazas sugeridas no necesariamente deben aplicarse a todos los activos, pero se debe determinar cuál es la relación entre el activo y la existencia de la amenaza, para identificar cómo esta pueda afectarlo en un determinado momento.
    p.mt-5(data-aos="fade-left") Una vez se haya realizado la identificación de las amenazas, se procede a realizar la valoración de las mismas, y así reconocer cual sería el efecto de influencia sobre el activo en los siguientes sentidos:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Degradación:
        br
        br
        p.mb-0 Como afectaría a un activo, mide el daño causado por un incidente en el supuesto de que ocurriera, y esta se suele caracterizar como una fracción del valor del activo y da origen a expresiones como “activo totalmente degradado” o “degradado” en una pequeña fracción.
          br
          br

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Probabilidad
        br
        br
        p.mb-0 Que tan probable es que una amenaza sea aprovechada y llegue a materializarse en un riesgo.
          br
          br
    
    p.mt-5(data-aos="fade-left") La complejidad de ocurrencia es difícil de determinar y expresar, y se puede apoyar en escalas de tipo nominal, como la que se muestra a continuación:

    .col-12
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1.
        span #[i Ejemplo de escala de degradación del valor por probabilidad de ocurrencia]
      .tabla-a.color-primario.mb-5
        table.text-center
          caption Nota: con base en #[i MAGERIT]– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información.
          thead(style="background-color: #E1F5D6")
            tr
              th MA
              th Muy alta
              th Casi seguro
              th Fácil
          tbody
            tr
              td A
              td Alta
              td Muy alto
              td Medio
            tr
              td M
              td Media
              td Posible
              td Difícil
            tr
              td B
              td Baja
              td Poco probable
              td Muy difícil
            tr
              td B
              td Muy baja
              td Muy raro
              td Extremadamente difícil
    p(data-aos="fade-left") Ahora bien, en términos de tiempo, lo más recomendado es realizarlo en 1 año para establecer una frecuencia, de tal manera es posible reconocer una escala de probabilidad de ocurrencia de la siguiente manera:

    .col-12
      .titulo-sexto.color-acento-contenido
        h5 Tabla 2.
        span #[i Escala de probabilidad de ocurrencia]
      .tabla-a.color-primario.mb-5
        table.text-center
          caption Nota: con base en #[i MAGERIT–] versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información.
          thead(style="background-color: #E1F5D6")
            tr
              th MA
              th 100
              th Muy frecuente
              th A diario
          tbody
            tr
              td A
              td 10
              td Frecuente
              td Mensualmente
            tr
              td M
              td 1
              td Normal
              td Una vez al año
            tr
              td B
              td 1/10
              td Poco frecuente
              td Cada varios años
            tr
              td MB
              td 1/100
              td Muy poco frecuente
              td Siglos


    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4 Estimación del riesgo
    p(data-aos="fade-left") Riesgo potencial, se le llama a la medida del daño probable sobre un sistema, teniendo en cuenta el impacto de las amenazas de cada uno de los activos, este riesgo crece con el impacto y la probabilidad, estableciendo las zonas de riesgo como se determinan a continuación:

    .row.justify-content-center
      .col-12
        ImagenInfografica.desktop.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/16.svg', alt='Imagen decorativa')

          .tarjeta.color-acento-botones.p-3(x="83.7%" y="14.8%" numero="")
            .h5.mb-2 Zona 1
            p Franja roja: zona de riesgo muy probable, así como de alto impacto.
          .tarjeta.color-acento-botones.p-3(x="51.8%" y="40.1%" numero="")
            .h5.mb-2 Zona 2
            p Franja amarilla: abarca un amplio espectro que representa desde las diferentes situaciones improbables y de impacto medio, hasta situaciones muy probables, pero de impacto reducido.
          .tarjeta.color-acento-botones.p-3(x="13.3%" y="76.7%" numero="")
            .h5.mb-2 Zona 3
            p Franja verde: riesgos poco probables y de bajo impacto.
          .tarjeta.color-acento-botones.p-3(x="13.3%" y="14.6%" numero="")
            .h5.mb-2 Zona 4
            p Franja naranja: riesgos improbables, de muy alto impacto.
    
    .row.justify-content-center
      .col-12        
        figure.movil
          img(src='@/assets/curso/temas/tema3/17.svg', alt='Imagen decorativa')

    p(data-aos="fade-left") Es importante revisar con atención otros tipos de riesgos que se pueden presentar en una organización:

    TabsC.color-acento-botones.mt-5
      .py-3.py-md-4(titulo="Riesgo acumulado")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/19.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Riesgo acumulado
            p Este es el riesgo que es calculado sobre un activo de información a partir de:
            p - Impacto acumulado.
            p - Probabilidad de ocurrencia de la amenaza.
            p Este riesgo se debe calcular en cada activo, amenaza y dimensión de seguridad, convirtiéndose en una función del valor acumulado, la degradación causada y la probabilidad de la amenaza.
            p Cuando se calcula sobre los activos base de la información, permite identificar las salvaguardas necesarias para aplicar en los entornos de trabajo: endurecimiento de equipos, #[i backup], etc.
      .py-3.py-md-4(titulo="Riesgo repercutido")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/18.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Riesgo repercutido
            p Es el calculado sobre un activo teniendo en cuenta:
            p - Impacto repercutido.
            p - Probabilidad de ocurrencia de la amenaza.
            p Este riesgo repercutido se obtiene para activo, amenaza y dimensión de valoración, convirtiéndose en una función del valor propio, la degradación causada y la probabilidad de la amenaza.
            p Este riesgo, permite determinar las consecuencias de las incidencias técnicas sobre la finalidad del sistema de información. Ya que se consolida como un recurso gerencial que permite la toma de decisiones críticas de un análisis de riesgos.
      .py-3.py-md-4(titulo="Riesgos de agrupación")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/20.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Riesgos de agrupación
            p  Bajo las siguientes condiciones, se permite la agregación de los riesgos:
            p - Se puede agregar el riesgo repercutido a diferentes activos.
            p - Se puede agregar el impacto acumulado sobre activos que no sean dependientes entre sí, y no hereden valor de un activo superior común.
            p - No debe agregarse el riesgo acumulado sobre activos que no sean independientes, pues ello supondría sobre ponderar el riesgo al incluir varias veces el valor acumulado de activos superiores.
            p - Puede agregarse el riesgo de diferentes amenazas sobre un mismo activo, aunque conviene considerar en qué medida las diferentes amenazas son independientes y pueden ser concurrentes.
            p - Se puede agregar el riesgo de una amenaza en diferentes dimensiones.
      .py-3.py-md-4(titulo="Riesgo residual")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/21.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Riesgo residual
            p Este riesgo es calculado a partir del conjunto de salvaguardas implementadas y que conllevan a que un activo no esté sujeto a una potencial alteración en su calidad por ende no ha sido degradado.
            p Su cálculo se determina de la siguiente manera. Tomando como referente que los activos no han cambiado, ni sus dependencias, sino solamente la magnitud de la degradación y la probabilidad de las amenazas, se repiten los cálculos de riesgo usando el impacto residual y la probabilidad residual de ocurrencia.
            p La magnitud de la degradación se toma en consideración en el cálculo del impacto residual.
            p La magnitud de la probabilidad residual tomando en cuenta la eficacia de las salvaguardas, es la proporción que resta entre la eficacia perfecta y la eficacia real.
            p El riesgo residual puede calcularse acumulado sobre los activos inferiores, o repercutido sobre los activos superiores.
        
          

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
