<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plan de tratamiento del riesgo
    
    p(data-aos="fade-left") Como parte integral en el ejercicio de la gestión de riesgo, se encuentra el establecimiento de los planes para el tratamiento del riesgo, para el establecimiento de estos planes es importante apoyarse  en normas técnicas como la ISO 19011 (ICONTEC, 2018), la cual brinda las directrices para la auditoria de sistemas de gestión y que puede adoptarse para la conformación de auditorías no únicamente de estos sistemas, si no de cualquier auditoria.

    .row.justify-content-center 
      .col-lg-10.col-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            br
            p.mb-0 Es importante tener presente que los planes de tratamiento contemplan la identificación y de evaluación realizada a la organización y a sus procesos o procedimientos, y que de acuerdo a los hallazgos identificados deberá de establecerse un conjunto de acciones que unidas, permitirán hacer frente a todas las debilidades de la organización.
              br
              br
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Reconocimiento del impacto del riesgo

    p(data-aos="fade-left") El impacto potencial, es reconocido como la medida del daño sobre un activo en particular, a partir de la materialización de una amenaza, este impacto se puede determinar una vez se haya establecido el valor de los activos y su degradación, causando dicha amenaza.
    p(data-aos="fade-left") El impacto potencial, se puede clasificar de la siguiente manera:

    TabsC.color-acento-botones.mt-5
      .py-3.py-md-4(titulo="Impacto acumulado")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/2.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Impacto acumulado
            p Es el impacto sobre un activo, teniendo como referencia:
            p - El valor acumulado.
            p - Las amenazas a las que se puede enfrentar un activo.
      .py-3.py-md-4(titulo="Impacto repercutido")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/3.jpg', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h4 Impacto repercutido
            p Es el impacto que se determina sobre un activo partir de:
            p La importancia para la organización.
            p Las amenazas a las que están expuestas los activos. Este se calcula para cada activo, por cada amenaza y en cada dimensión de valoración.

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .cajon.color-primario.p-4.mb-4(style="background-image: #E1F5D6")
          p El impacto se incrementa, cuando mayor es el valor propio de un activo y mayor se degrade el activo de información, así como cuando el activo depende de otros sistemas o viceversa.
          p El impacto es mayor de acuerdo a su dependencia sobre sí mismo, dicho impacto, permitirá identificar las consecuencias que tendría una afectación para la organización.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Agregación de valores de impacto
      div.titulo-herramientas.d-block.d-md-none Agregación de valores de impacto

    p(data-aos="fade-left")  A continuación, se revisarán algunas condiciones que permiten agrupar algunos criterios y así determinar el impacto:

    ol.lista-ol--cuadro.lista-ol--separador
      li 
        .lista-ol--cuadro__vineta
          span 1
        | El impacto repercutido puede aplicarse sobre activos de diferente tipo.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | El impacto acumulado puede acumularse sobre activos que no sean dependientes entre sí, y no hereden valor de un activo superior.
      li 
        .lista-ol--cuadro__vineta
          span 3
        | No se recomienda agregar el impacto acumulado sobre activos que no sean independientes, dado que esto supondría sobreponderar el impacto al incluir varias veces el valor acumulado de activos superiores.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | Pueden concluir el impacto de otras amenazas sobre un mismo activo, aunque se recomienda considerar en qué medida las otras amenazas son independientes y pueden ser concurrentes.
      li 
        .lista-ol--cuadro__vineta
          span 5
        | El impacto de una amenaza se puede agregar en diferentes dimensiones.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3.col-8.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/4.jpg', alt='Imagen decorativa')
      .col-lg-9.col-12.mb-3
        .h4.py-4.mb-4(data-aos="zoom-down-right")
          span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Impacto residual
          div.titulo-herramientas.d-block.d-md-none Impacto residual
        p De acuerdo al conjunto de salvaguardas determinadas y desplegadas, así como también medir la madurez de su proceso de gestión, posibilita que el sistema quede en una situación de posible impacto, el cual debe ser mínimo, a esto se le denomina residual. Y se consolida una vez se haya modificado el impacto, desde un valor potencial a un valor residual.
        p Su cálculo es determinado a partir de la premisa de que un activo no ha sufrido cambio ni degradación, y que las salvaguardas implementadas han actuado de manera positiva evitando la consolidación de algún tipo de incidente.
        p El impacto residual puede calcularse a partir de los activos inferiores, o repercutido sobre los activos superiores.
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2 Establecimiento de controles
    p(data-aos="fade-left") En esta etapa, se procede a determinar los controles que serán necesarios para reducir el riesgo, algunas amenazas pueden ser controladas a partir de cambios y acciones de gestión sobre algún activo, pero en otras ocasiones, estas deberán de intervenirse a partir de controles técnicos tecnológicos o procedimentales.
    p(data-aos="fade-left") #[b Selección de salvaguardas:] es un ejercicio donde se revisan las posibles acciones necesarias para reducir el riesgo sobre un activo, para lo cual, es necesario tener presente lo siguiente:

    .row.justify-content-center.alig-items-center.mt-5
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center 
          .col-lg-5.col-8.mb-3
            figure
              img(src='@/assets/curso/temas/tema4/5.jpg', alt='Imagen decorativa')
          .col-lg-7.col-12.mb-3
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Tipo de activos a proteger.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Dimensión que requiere mejorar la protección.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Amenazas sobre las que se actuara.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                |  Posibles salvaguardas complementarias.
          .cajon.p-3.mb-3(style="background-color: #FDFDE3")
            p Además, es necesario determinar un principio de proporcionalidad para este ejercicio.
            ol.lista-ol--cuadro.lista-ol--separador.p-4
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | El mayor o menor valor propio o acumulado sobre un activo, tomando como referente lo más valioso y obviando lo irrelevante.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | La mayor o menor probabilidad de que una amenaza se materialice, tomando como referencia los riesgos más importantes.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | La cobertura que proporciona cada salvaguarda sobre los riesgos.
          p(data-aos="fade-left") Lo anterior permite establecer dos tipos de excepciones sobre las cuales no se ejercerá un control:
          .row
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul(style="background-color: #E1F5D6")
                  .p-4
                    h2 No aplica
                    p Cuando una salvaguarda no es adecuada o no se ajusta técnicamente al activo, o no se considera eficiente.
            .col-lg-6
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/tema4/7.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul(style="background-color: #E1F5D6")
                  .p-4
                    h2 No se justifica
                    p cuando la salvaguarda es adecuada, pero desproporcionada al riesgo que se desea proteger.

    p(data-aos="fade-left") El resultado de estas consideraciones se reflejará en un documento denominado #[b “declaración de aplicabilidad”] que corresponde a la determinación de las salvaguardas que serán implementadas, como se aplicarán, y cuales, no justificando la decisión.
    p(data-aos="fade-left") #[b Efecto de las salvaguardas:] una vez determinadas las salvaguardas, estas deberán ser evaluadas de acuerdo a su impacto sobre el riesgo, así:

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .cajon.color-secundario.p-4.mb-4(style="background-image: #FDFDE3")
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | #[b Reduciendo la probabilidad de las amenazas.] También denominadas salvaguardas preventivas. Las cuales deben de impedir que una amenaza se materialice.
            li
              i.fas.fa-angle-right
              | #[b  Limitando el daño causado.] Salvaguardas que reducen la posible degradación del activo, mientras que otras permiten detectar 

    p(data-aos="fade-left") La lógica de su aplicación, se puede apreciar en la siguiente figura, en donde se integran las salvaguardas al procedimiento de gestión del riesgo.

    .row.justify-content-center
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span #[i Elementos de análisis del riesgo residual]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/8.svg' alt='En la figura se representan los activos expuestos a amenazas, que causan degradación residual, con probabilidad residual, igualmente los activos con su valor tienen impacto residual y riesgo residual. Salvaguardar degradación y probabilidad.')
            figcaption Nota: con base en MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/9.svg' alt='En la figura se representan los activos expuestos a amenazas, que causan degradación residual, con probabilidad residual, igualmente los activos con su valor tienen impacto residual y riesgo residual. Salvaguardar degradación y probabilidad.')
              figcaption Nota: con base en MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Tipo de protección
      div.titulo-herramientas.d-block.d-md-none Tipo de protección
    
    p(data-aos="fade-left") La determinación del tipo de protección es fundamental a continuación, se reconocen los tipos sugeridos por la metodología MAGERIT:

    .tarjeta.tarjeta--gris.p-4.mb-5(style="background-color: #E1F5D6")
      LineaTiempoC.color-acento-botones(text-small)
        .row.col-ipad(titulo="1")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [DR] Disuasión
            p Salvaguarda disuasoria, tiene efecto sobre los atacantes, reduciendo la intención de que estos se atrevan a atacar un activo.
            p Ejemplos: vallas elevadas, guardias de seguridad, avisos sobre la persecución del delito o persecución del delincuente.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/10.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="2")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [PR] Prevención
            p Salvaguardas preventivas que reducen las oportunidades de que un incidente ocurra. Si la salvaguarda falla y el incidente llega a ocurrir, los daños son los mismos.
            p Ejemplos: autorización previa de los usuarios, gestión de privilegios, planificación de capacidades, metodología segura de desarrollo de software, pruebas en preproducción, segregación de tareas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/11.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="3")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [EL] Eliminación
            p Son salvaguardas que eliminan un incidente, impidiendo que éste tenga lugar. Actúan antes de que el incidente se haya producido. No reducen los daños en caso de que la salvaguarda no sea perfecta y el incidente llegue a ocurrir.
            p Ejemplos: eliminación de cuentas estándar, de cuentas sin contraseña, en general, todo lo que tenga que ver con la fortificación o bastionado, cifrado de la información.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/12.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="4")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [IM] Minimización del impacto / limitación del impacto
            p Salvaguarda que minimiza o limita el impacto acotando las consecuencias de un incidente.
            p Ejemplos: desconexión de redes o equipos en caso de ataque, detención de servicios en caso de ataque, seguros de cobertura, cumplimiento de la legislación vigente.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/13.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="5")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [CR] Corrección
            p Salvaguarda que actúa después de un incidente, ejerciendo una reparación al activo. 
            p Ejemplos: gestión de incidentes, líneas de comunicación alternativas, fuentes de alimentación redundantes, entre otros.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/14.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="6")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [RC] Recuperación
            p Salvaguarda que ofrece la recuperación de un activo que ha sufrido una alteración, regresándolo al estado útil y viable.
            p Ejemplos: copias de seguridad #[i (back-up)].
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/15.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="7")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [MN] Monitorización
            p Salvaguardas enfocadas en la vigilancia y monitoreo de activos para identificar posibles cambios o alteraciones en el normal comportamiento de un activo de información.
            p Ejemplos: registros de actividad, registro de descargas de web.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/16.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="8")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [DC] Detección
            p Salvaguarda que detecta un ataque, determinando lo que está sucediendo. No necesariamente debe detener la acción, pero si permite establecer las medidas mínimas necesarias para su protección.
            p Ejemplos: antivirus, IDS, detectores de incendio, etc.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/17.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="9")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [AW] Concienciación
            p Actividades relacionadas con la transferencia del conocimiento para la seguridad de todos los actores involucrados en la organización y que dependan de los activos de información.
            p Ejemplos: cursos de concienciación, cursos de formación.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/18.jpg', alt='Imagen decorativa')
        .row.col-ipad(titulo="10")
          .col-md-6.mb-4.mb-md-0.p-4
            h4 [AD] Administración
            p Salvaguardas relacionadas con los componentes de seguridad del sistema.
            p Ejemplos: inventario de activos, análisis de riesgos, plan de continuidad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/19.jpg', alt='Imagen decorativa')

    p De acuerdo al modelo anterior, se puede determinar y agrupar las salvaguardas de acuerdo a su efecto sobre una amenaza, como se puede identificar en la siguiente tabla:

    .row.justify-content-center.mt-5
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span #[i Tipos de salvaguardas sugeridos por MAGERIT]
        .tabla-a.color-primario.mb-5
          table
            caption Nota: con base en MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información
            thead(style="background-color: #E1F5D6")
              tr
                th Efecto
                th Tipo
            tbody
              tr
                td Preventivas: reducen la probabilidad
                td 
                  li [PR] Preventivas
                  li [DR] Disuasorias
                  li [EL] Eliminatorias
              tr
                td Acotan la degradación
                td 
                  li [IM] Minimizadoras
                  li [CR] Correctivas
                  li [RC] Recuperativas
              tr
                td Consolidan el efecto de las demás
                td 
                  li [MN] De monitorización
                  li [DC] De detección
                  li [AW] De concienciación
                  li [AD] Administrativas

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Eficacia de la Protección
      div.titulo-herramientas.d-block.d-md-none Eficacia de la Protección

    p(data-aos="fadeleft") Las salvaguardas también por la eficacia en el momento de actuar frente al riesgo para el cual fueron consideradas, una salvaguarda adecuada en 100 % eficaz si combina los siguientes factores:
    p(data-aos="fade-left") Desde el punto de vista técnico:

    .row.mb-5.justify-content-center
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style="height: 100%")
          .tarjeta-numerada__numero
            .h2 1
          p
            b Técnicamente adecuada para enfrentarse al riesgo que protege.

      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5(style="height: 100%")
          .tarjeta-numerada__numero
            .h2 2
          p
            b Aplicación permanente.
    p Desde el punto de vista de operación de la salvaguarda:
    .row.mb-5.justify-content-center
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style="height: 100%")
          .tarjeta-numerada__numero
            .h2 1
          p
            b Perfectamente desplegada, configurada y mantenida.

      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5(style="height: 100%")
          .tarjeta-numerada__numero
            .h2 2
          p
            b Existen procedimientos claros de uso normal y en caso de incidencias.

      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height: 100%")
          .tarjeta-numerada__numero
            .h2 3
          p
            b Los usuarios están formados y concienciados.

      .col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5(style="height: 100%")
          .tarjeta-numerada__numero
            .h2 4
          p
            b Existen controles que avisan de posibles fallos.

    p(data-aos="fade-left") Entre una eficacia del 0 % para aquellas que faltan y el 100 % para aquellas que son idóneas y que están perfectamente implantadas, se estimará un grado de eficacia real en cada caso concreto. Para medir los aspectos organizativos, se puede emplear una escala de madurez que recoja en forma de factor corrector, la confianza que merece el proceso de gestión de la salvaguarda:

    .row.justify-content-center.mt-5
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span #[i Eficacia y madurez de las salvaguardas]
        .tabla-a.color-primario.mb-5
          table
            caption Nota: con base en MAGERIT– versión 3.0 Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información.
            thead(style="background-color: #E1F5D6")
              tr
                th Factor
                th Nivel
                th Significados
            tbody
              tr
                td 0 %
                td L0
                td Inexistente
              tr
                td 
                td L1
                td Inicial / ad hoc
              tr
                td 
                td L2
                td Reproducible intuitivo
              tr
                td 
                td L3
                td Proceso definido
              tr
                td 
                td L4
                td Gestionado y medible
              tr
                td 100%
                td L5
                td Optimizado

    .row.justify-content-center 
      .col-lg-10.col-12
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/20.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            br
            br
            p.mb-0 Desde la norma ISO/IEC 27001:2013, como norma fundamental para la implementación de sistemas de gestión de la seguridad de la información, de propone una serie de medidas que a partir de su implementación, permite controlar las posibles vulnerabilidades que se presentan en las organizaciones, estas recomendaciones se muestran de manera general y sin sugerir marcas, acciones específicas, ni referencias a productos, su interpretación obedece a las capacidades y la decisión de cada organización para realizar su implementación.
              br
              br

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        p Los controles de seguridad se recomiendan que sean implementados a partir del análisis de riesgos, esto permitirá hacer frente de manera asertiva a las necesidades identificadas en cada uno de los activos de información.
        p La norma ISO/IEC 27001:2013 en su anexo A, que equivale a la norma ISO/IEC 27002:2013, presenta una propuesta de controles bajo un esquema basada en dominios, los cuales tienen enfoque desde lo operativo, lógico, físico y legal.
        p Los controles que se proponen en dicha norma, corresponden a las categorías y/o aspectos que deben ser abordados desde la estrategia de seguridad propuesta para contar con un nivel mínimo de resistencia ante cualquier riesgo.

    .row.justify-content-center
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span #[i Dominios de seguridad de la norma ISO/IEC 27001:2013]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/21.svg' alt='En la figura se representan lo operativo y estratégico, para seguridad operativa, lógica, física, legal.')
            figcaption Nota:   ISO/IEC 27001:2013 – Anexo A
        .row.justify-content-center
          .col-12.movil
            .row
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/Figura 3.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Descargar. Figura 3, Dominios de seguridad de la norma ISO/IEC 27001:2013.

    p.mt-5(data-aos="fade-left") Estas categorías se enumeran desde la A5 hasta la A18, que corresponden a 14 dominios que representan los niveles de seguridad como son: operativos, lógicos, físicos y legales, y que estos también se pueden identificar desde el ámbito estratégico como operativo, como se puede observar en la siguiente figura:

    .row.justify-content-center.mt-5
      .col-lg-8.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span #[i Ejemplo de dominio de la norma ISO/IEC 27001:2013]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/22.svg' alt='La figura 4 indica un ejemplo de dominio de la norma ISO/IEC 27001:2013, mediante el dominio, los objetivos de control y los controles aplicados en dicha norma.')
            figcaption Nota: ISO/IEC 27001:2013 – Anexo A
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/23.svg' alt='La figura 4 indica un ejemplo de dominio de la norma ISO/IEC 27001:2013, mediante el dominio, los objetivos de control y los controles aplicados en dicha norma.')
              figcaption Nota: ISO/IEC 27001:2013 – Anexo A

    p.mt-5(data-aos="fade-left") Estos dominios permiten reconocer cada uno de los ámbitos de aplicación y administración, los cuales necesariamente deben ser tenidos en cuenta, estos 3 ámbitos son abordados desde la óptica de la organización y de acuerdo a sus necesidades, activos de información, relación con terceros y desde el análisis de riesgo que se debe realizar.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Objetivos de control
      div.titulo-herramientas.d-block.d-md-none Objetivos de control

    p(data-aos="fade-left") Cada uno de los dominios de seguridad que nos presenta la norma ISO/IEC 27001:2013, se encuentra dividido en categorías denominadas objetivos de control. Estos objetivos como su nombre lo indica, representa aquello que se busca obtener con la aplicación de los controles de seguridad, de tal manera que, en un ejercicio de aplicación, su adopción corresponde a las necesidades y problemas que la organización quiere abordar. Se presentan como las propuestas y directrices para la implementación de una estrategia de seguridad, que puede ir desde el endurecimiento de la infraestructura, hasta la consolidación de un sistema de gestión de la seguridad SGSI, y con los cuales se busca garantizar los objetivos de seguridad de la organización.
    p(data-aos="fade-left") En este orden de ideas, la estructura de los objetivos de control se presenta en la figura 5, plasmando una idea principal de manera general, acompañada de una descripción de la utilidad del mismo.
    
    .row.justify-content-center.mt-5
      .col-lg-8.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span #[i Ejemplo de dominio de la norma ISO/IEC 27001:2013]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema4/24.svg' alt='La figura 5 indica un ejemplo de dominio de la norma ISO/IEC 27001:2013, mediante el dominio, los objetivos de control y los controles aplicados en dicha norma.')
            figcaption Nota: ISO/IEC 27001:2013 – Anexo A
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/25.svg' alt='La figura 5 indica un ejemplo de dominio de la norma ISO/IEC 27001:2013, mediante el dominio, los objetivos de control y los controles aplicados en dicha norma.')
              figcaption Nota: ISO/IEC 27001:2013 – Anexo A
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_3 4.3 Estrategia de implementación de controles
    
    p(data-aos="fade-left") Una vez se haya realizado la evaluación de los riesgos en los activos de la organización, y se hayan determinado las salvaguardas necesarias para gestionar el riesgo, es recomendable establecer un documento que consolide los controles o salvaguardas necesarios para implementar, este documento se denomina: Declaración de Aplicabilidad o también conocido como #[b #[i (Statement of Aplicability SoA)]], se profundiza un poco más en que consiste dicho documento a continuación:

    .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #E1F5D6")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Control o las salvaguardas para mitigar riesgos
            p ¿Has escuchado hablar del documento SoA? Pues bien, este documento permite a una organización establecer control o las salvaguardas necesarias para mitigar los riesgos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/26.jpg', alt='Imagen decorativa')

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Norma ISO/IEC 27001:2013
            p Este se apoya en normas técnicas como la Norma ISO/IEC 27001:2013, la cual sugiere algunas recomendaciones generales para la gestión segura de los activos de información.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/27.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Análisis y evaluación del riesgo
            p Dicho documento debe ser construido a partir del ejercicio de análisis y evaluación del riesgo realizado por los miembros encargados.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/28.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Ajustado las necesidades
            p Y deberá ser ajustado a las necesidades, sin sobredimensionar o subvalorar el riesgo, así se determinará las acciones necesarias.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/29.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Ejemplo de documento SoA
            p A continuación, se presente un ejemplo de documento SoA, el cual muestra un ejercicio de establecimiento de controles, aplicación, justificación, responsable, así como el plan de acción  para implementarlo.
            .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/34.svg')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Descargar. Figura 3, Dominios de seguridad de la norma ISO/IEC 27001:2013.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/30.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Diligenciada en su totalidad
            p La declaración de aplicabilidad debe ser diligenciada en su totalidad, realizando el registro de todos y cada uno de los controles establecidos por la norma.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/31.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Aplicables y no aplicables
            p Indicando cuales serán aplicables en la organización y cuales no, y su razón de no aplicabilidad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/32.jpg', alt='Imagen decorativa')
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Aplicable hacia los activos de información
            p Así como la forma en que será aplicable hacia los activos de información, de esta manera permitirá a las partes interesadas identificar los controles que se deben realizar y establecer el plan de acción para ejecutarlos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/33.jpg', alt='Imagen decorativa')      

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
