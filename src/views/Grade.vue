<template>
   <div class="container-xxl">
     <div class="d-flex justify-md-center grade-card">
            <v-card width="auto">
                <v-card-title class="d-flex justify-md-center grade-card" style="font-size: 100px">
                    {{ result }}
                </v-card-title>
            </v-card>
        </div>
        <div class="d-flex justify-md-center grade-card">
            <v-card width="500">
                <v-card-title class="d-flex justify-md-center grade-card">
                    คำนวณเกรด
                </v-card-title>
                <v-card-text>
                    <v-form> 
                        <v-text-field v-model="grade" label="กรุณากรอกคะแนน 0-100"></v-text-field>
                        <v-btn color="success" @click="Grade()" width="100%">คำนวณ</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return{
            grade : 0 , 
            result : 'กรุณากรอกคะแนนของคุณด้วย'
        }
    },
    methods : {
        Grade() {
            if (this.grade > 100 || this.grade < 0) {
                this.result = "กรุณากรอกคะแนนระหว่าง 0-100";
                alert('กรุณากรอกคะแนนระหว่าง 0-100') ;
            }
            else if (this.grade >= 0 || this.grade <= 100){
                this.grade >=80 ? this.result = 'A' : 
                this.grade >=70 ? this.result = 'B' : 
                this.grade >=60 ? this.result = 'C' : 
                this.grade >=50 ? this.result = 'D' : 
                this.grade <=49 ? this.result = 'F' :
                alert('กรุณากรอกคะแนนระหว่าง 0-100') 
            }
            else if(typeof this.grade == 'string'){
                alert('ห้ามกรอกตัวอักษร') 

            }
        }
    }  
}
</script>

<style>
.grade-card {
    padding: 20px 20px 20px 20px;
}
</style>