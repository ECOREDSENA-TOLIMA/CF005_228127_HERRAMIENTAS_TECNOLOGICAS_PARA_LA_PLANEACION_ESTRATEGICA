<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-left") Bienvenido a este componente formativo, para comenzar el recorrido por el mismo, revise la información que se presenta a continuación:

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9ahtOzNyOVU?si=VZ_poUbG36T3DPpF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
