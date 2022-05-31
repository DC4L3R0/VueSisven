<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New Client</h1>
        <div class="card">
            <div class="card-heade fw-bold">
                Client
            </div>
            <div class="card-body">
                <form @submit.prevent="saveClient">
                <div class="row mb-3">
                    <label for="id" class="form-label">ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="ID Client" disabled
                        v-model="client.id"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="name" class="form-label">NAME</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="name" placeholder="Name Client" 
                        v-model="client.name"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="surname" class="form-label">SURNAME</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="surname" placeholder="Surname Client" 
                        v-model="client.surname"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="adress" class="form-label">ADRESS</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="adress" placeholder="Adress Client" 
                        v-model="client.adress"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="birth_date" class="form-label">BIRTH_DATE</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="birth_date" placeholder="Birth_Date Client" 
                        v-model="client.birth_date"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="phone_number" class="form-label">PHONE_NUMBER</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="phone_number" placeholder="Phone Number Client" 
                        v-model="client.phone_number"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="email" class="form-label">EMAIL</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="email" placeholder="Email Number Client" 
                        v-model="client.email"
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
    name: 'EditClient',
    data(){
        return{
            client:{
            id:0,
            name: '', 
            surname: '',
            adress: '',
            birth_date: '',
            phone_number: '',
            email: ''
        },
        
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Client'})
        },

        async saveClient(){
            this.client.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/client`, this.client)
            console.log(res);
            if (res.status ==200){
                this.$router.push({name: 'Client'})
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
