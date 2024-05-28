<template>
  <div>
        <!-- <hi>
            Welcome to Login Page
        </hi>
        {{data1}} -->

        <h1 v-if="show" >hello {{name}}</h1>

        <v-btn color="warning" @click="show = !show">switch</v-btn>
    </div>
</template>

<script>
export default {
   data: () => ({
     name: 'Oat',
     show : 0
   })
}
</script>

<style>

</style>