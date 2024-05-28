<template>
  <div>
       <v-row>
        <v-col cols="12">
            <h1 v-if="show" >hello {{name}}</h1>
            <h1 >Welcome user :{{user}}</h1>
            <v-btn color="warning" @click="show = !show">switch</v-btn>
        </v-col>
         <v-col cols="3" v-for="(item, index) in stock " :key="index">
            <v-card width="250">
            <img width="250" :src="item.imglink" />
            <v-car-title primary-title>{{item.name}}</v-car-title>
            <v-card-action>
                <v-btn color="success" @click="callAlet(item.name)">call</v-btn>
            </v-card-action>
        </v-card>
        </v-col>
        <v-col cols="12">
            <v-text-field
            name="name"
            label="label"
            id="name"
            v-model="name">
            </v-text-field>
            <v-btn color="success" @click="callAlert(name)">call-text</v-btn>
        </v-col>
        <v-col cols="12">
            <subsimple :name="name" @callAlert="callAlert"/>
        </v-col>
       </v-row>
      
    </div>
</template>

<script>

import {EventBus } from '@/EventBus'

import subsimple from '../components/SubSimple.vue';
export default {
    components:{
        subsimple
    },
   data: () => ({
     user:'',
     name: 'Oat',
     show : 0,
     stock: [
        {name: 'oat', imglink: require('../assets/me.jpeg')},
        {name: 'catEiEi', imglink:require('../assets/cat1.jpeg')},

     ]
   }),
   created(){
    this.user = localStorage.getItem("user");
   },
   mounted() {
    EventBus.$on('callAlert', this.callAlert)
   },
   beforeDestroy(){
    EventBus.$off('callAlert', this.callAlert)
   },
   methods: {
        callAlert (item){
            localStorage.setItem("user", item);
            alert('sus'+ item )
        }
   },
}
</script>

<style>

</style>