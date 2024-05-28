<template>
    <div>
        <!-- <hi>
            Welcome to Login Page
        </hi>
        {{data1}} -->

        <h1 v-if="show">{{data}}</h1>
    </div>
</template>

<script>
export default {
//    data: () => ({
//     data1: 'Login'
//    })

   data2 () {
    return{
        data: 'Hello from Login',
        show: false
    }
   }  
}
</script>
