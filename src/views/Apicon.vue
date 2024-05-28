<template>
  <div>
    
      <v-col cols="12">
        <h1>API Connect Page</h1>
        <!-- {{savemode()}} -->
      </v-col>
  <v-btn text color="success" @click="newItem()"> 
                    add
                </v-btn>
      <v-col cols="3" v-for="(item, index) in apicon" :key="index">
        <v-card width="250">
          <img width="250" src="../assets/cat1.jpeg" alt="" />
          <v-card-title primary-title>
            {{ item.product_id }} {{ item.product_name }} - {{ item.price }}
          </v-card-title>
          <v-card-actions>
                
                <v-btn text color="info" @click="updateItem(item)"> 
                    edit
                </v-btn>

                 <v-btn text color="waring" @click="deleteData(item)"> 
                    delete
                </v-btn>

            </v-card-actions>
        </v-card>
      </v-col>
    <v-dialog v-model="dialogedit" max-width="500px">
        <v-card>
            <v-card-title primary-title>
                <!-- title -->
                {{savemode}} 
            </v-card-title>
            <v-card-text>
            <v-row>
                <v-col cols="6">
                    <v-text-field
                        name="name"
                        label="Name"
                        id="name"
                        v-model="postdata.product_name">
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field
                        name="price"
                        label="Price"
                        id="price"
                        v-model="postdata.price">
                    </v-text-field>
                </v-col>
            </v-row>
            </v-card-text>
            <v-card-actions>
                 <v-btn text color="warning" @click="closeItem()"> 
                    cancel
                </v-btn>
                <v-btn text color="info" @click="saveSelect()"> 
                    save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </div>
</template>

<script >
import axios from "axios";

export default {
  data() {
    return {
      apicon: [],
      dialogedit: false,
      id:'',
      postdata: {
        product_name: "",
        price: "",
        amount: "",
        detail: {
          memory: "",
        },
      },
      postdefault: {
        postdata: {
          product_name: "",
          price: "",
          amount: "",
          detail: {
            memory: "",
          },
        },
      },
    };
  },
  created() {
    this.getData();
  },
  computed : {
        savemode() {
            return this.id == "" ? 'NewItem' : 'EditItem'
        }
  },
  methods: {
    newItem(){
        this.id = ''
        this.postdata = {...this.postdefault}
        this.dialogedit = true
    },
    updateItem(item){
        this.id = item._id
        this.postdata = item
        this.dialogedit = true
    },
    closeItem(){
       this.id = ''
        this.postdata = {...this.postdefault}
        this.dialogedit = false
    },
    saveSelect() {
        if(this.id != ''){
            this.savePutData()
        }
        else this.savePostData()
        
    },
    getData() {
      axios.get("http://localhost:3000/products/").then((response) => {
        console.log("data get", response.data);
        this.apicon = response.data.data; // สมมติว่าข้อมูลอยู่ในฟิลด์ 'data'
      });
    },
    async savePostData() {
        try{
            const {data} = await this.axios.post('http://localhost:3000/products/',this.postdata)
            console.log(data)
            alert('create complete');
            this.getData()
            this.closeItem()
        }catch (error){
            console.log(error);
            alert('error')
        }
    },
    async savePutData() {
        try{
            const {data} = await this.axios.put('http://localhost:3000/products/'+this.id ,this.postdata)
            console.log(data)
            alert('Update complete');
            this.getData()
            this.closeItem()
        }catch (error){
            console.log(error);
            alert('error')
        }
    },
     async deleteData(item) {
        try{
            this.id = item._id
            await this.axios.delete('http://localhost:3000/products/'+this.id ,this.postdata)
            alert('delete complete');
            this.getData()
            this.closeItem()
        }catch (error){
            console.log(error);
            alert('error')
        }
    },
  },
};
</script>

<style scoped></style>
