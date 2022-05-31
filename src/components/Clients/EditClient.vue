<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Edit</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Client
            </div>
            <div class="card-body">
                <form @submit.prevent="updateClient">
                
                <div class="row mb-3">
                    <label for="id" class="form-label">ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="Id Client" disabled
                        v-model="client.id"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="name" class="form-label">NAME : </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Name Client"
                        v-model="client.name"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="surname" class="form-label">SURNAME</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="surname" placeholder="Surname Client" disabled
                        v-model="client.surname"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="adress" class="form-label">ADRESS</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="adress" placeholder="Adress Client" disabled
                        v-model="client.adress"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="birth_date" class="form-label">BIRT DATE</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="birth_date" placeholder="Birth Date Client" disabled
                        v-model="client.birth_date"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="phone_number" class="form-label">PHONE NUMBER</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="phone_number" placeholder="Phone Number Client" disabled
                        v-model="client.phone_number"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="email" class="form-label">EMAIL</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="email" placeholder="Email Client" disabled
                        v-model="client.email"
                        >
                    </div>
                </div>
                <button class="btn btn-primary" type="submit"> Acttualizar</button>
                <button class="btn btn-secondary mx-" @click="cancelar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: 'EditClient',
    data(){
        return{
            client:{
                id:0,
                name: '',
                surnme: '',
                adress: '',
                birth_date: '',
                phone_number: '',
                email: '',
            },
            }
        },
        methods:{
            cancelar(){
                this.$router.push({name: 'Client'})
            },

            async updateClient(){
                const res = await axios.put(`http://127.0.0.1:8000/api/client/${this.client.id}`, this.client)

                if (res.status ==200){
                    this.$router.push({name: 'Client'})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Client has been update',
                        showConfirmButton: false,
                    })
                }
            },
            mounted(){
                this.client.id = this.$router.params.id;
                axios.get(`http://127.0.0.1:8000/api/client/${this.client.id}`)
                .then(response => {
                    this.client = response.data.client;
                })
            },
        }
    }

</script>