<template>
  <div class="full-background">
    <v-row>
      <v-col cols="6">
        <cardimg style=" margin-left: 100px;"/>
      </v-col>
      <v-col cols="6" style="marginTop: 100px">
        <v-row>
          <v-col cols="12">
            <h1 class="name">Thitiwat Damrongpririyapong</h1>
            <h2 class="position">Software Engineer</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style=" background-color: #00adb5;">
            <p>My nickname is oat</p>
            <p>
              I graduated from Prince of Songkla University Thailand with a
              bachelor’s degree in IT
            </p>
            <p>I enjoy playing guitar but I don't like insects</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="4">
    <v-row class="mini-blackground" style="display: flex; justify-content: center; marginTop: 100px">
        <h1>Hobby</h1>
    </v-row>
     <v-row class="mini-blackground" style="display: flex; justify-content: center;">
       <hobby/>
     </v-row>
     </v-col>
     <v-col cols="4" >
     <v-row style="display: flex; justify-content: center; marginTop: 100px; background-color: #31363F; color: #00adb5;">
        <h1>Favorite Games</h1>
    </v-row>
     <v-row style="display: flex; justify-content: center; background-color: #31363F">
        <game/>
     </v-row>
     </v-col>
      <v-col cols="4">
     <v-row class="mini-blackground" style="display: flex; justify-content: center; marginTop: 100px">
        <h1>My Idol</h1>
    </v-row>
     <v-row class="mini-blackground" style="display: flex; justify-content: center;">
        <idol/>
     </v-row>
     </v-col>
     </v-row>
  </div>
</template>

<script>
import cardimg from "../components/CardImg.vue";
import hobby from "../components/Hobby.vue";
import game from "../components/Game.vue";
import idol from "../components/Idol.vue";
export default {
  components: {
    cardimg,
   hobby,
   game,
   idol,
  },
};
</script>

<style>
.full-background {
  background-color: #eeeeee;
  width: 100%;
  /* height: 100vh; */
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

.mini-blackground{
    background-color: #00adb5;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

/* สไตล์ของชื่อ */
.name {
  font-family: "Poppins", sans-serif;
  color: #00adb5;
  font-size: 3rem;
  margin: 0;
}

/* สไตล์ของตำแหน่ง */
.position {
  font-family: "Poppins", sans-serif;
  color: #393e46;
  font-size: 2rem;
  margin: 0;
}

.p {
    font-family: "Poppins", sans-serif;
}
</style>
