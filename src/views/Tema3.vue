<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Identificación de riesgos

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Técnicas de recolección de información
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Valoración de activos
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 Identificación de amenazas
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4 Estimación del riesgo

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
