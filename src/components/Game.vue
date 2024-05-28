<template>
   <div>
     <!-- <v-row>
     <v-col cols="4">
          <img width="250" src="../assets/cs2.jpeg" />
      </v-col>
       <v-col cols="4">
          <img width="250" src="../assets/valo.jpeg" />
      </v-col>
       <v-col cols="4">
          <img width="250" src="../assets/rb6.jpeg" />
      </v-col>
     </v-row> -->
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
        { src: 'cs2.jpeg' },
        { src: 'valo.jpeg' },
        { src: 'rb6.jpeg' }
        ],
      }
    },
}
</script>

<style>

</style>