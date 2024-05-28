<template>
   <div>
      <v-carousel 
     height="250">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        width="250"

      >
        <img :src="require('@/assets/' + item.src)" alt="Carousel Item" width="250"/>
      </v-carousel-item>
    </v-carousel>

  </div>
</template>

<script>
export default {data () {
      return {
       items: [
        { src: 'jimi.jpeg' },
        { src: 'srv.jpeg' },
        { src: 'mayer.jpeg' }
        ],
      }
    },
}
</script>

<style>

</style>