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
export default {
 data () {
      return {
       items: [
        { src: 'game.jpeg' },
        { src: 'guitar.jpeg' },
        { src: 'sleep.jpeg' }
        ],
      }
    },
    
}
</script>

<style>

</style>