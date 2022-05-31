<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New ModePayment</h1>
        <div class="card">
            <div class="card-heade fw-bold">
                ModePayment
            </div>
            <div class="card-body">
                <form @submit.prevent="saveModePayment">
                <div class="row mb-3">
                    <label for="id" class="form-label">ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="ID ModePayment" disabled
                        v-model="modepayment.id"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="name" class="form-label">NAME</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="name" placeholder="Name ModePayment" 
                        v-model="modepayment.name"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="otherdetails" class="form-label">OTHER DETAILS</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="otherdetails" placeholder="OtherDetails ModePayment" 
                        v-model="modepayment.otherdetails"
                        >
                    </div>
                </div>

                
                <button class="btn btn-primary" type="submit">Save</button>
                <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2"

export default {
    name: 'EditModePayment',
    data(){
        return{
            modepayment:{
            id:0,
            name: '', 
            otherdetails: '',
            
        },
        
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'ModePayment'})
        },

        async saveModePayment(){
            this.modepayment.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/modepayment`, this.client)
            console.log(res);
            if (res.status ==200){
                this.$router.push({name: 'ModePayment'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Client has been Saved',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
}
</script>