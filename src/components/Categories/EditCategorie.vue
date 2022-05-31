<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Edit</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Categorie
            </div>
            <div class="card-body">
                <form @submit.prevent="updateCategorie">
                
                <div class="row mb-3">
                    <label for="id" class="form-label">ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="Id Categorie" disabled
                        v-model="categorie.id"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="name" class="form-label">NAME : </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Name Categorie"
                        v-model="categorie.name"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="description" class="form-label">DESCRIPTION</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="description" placeholder="Description Categorie" disabled
                        v-model="categorie.description"
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
    name: 'EditCategorie',
    data(){
        return{
            categorie:{
                id:0,
                name: '',
                description: '',
                
            },
            }
        },
        methods:{
            cancelar(){
                this.$router.push({name: 'Categorie'})
            },

            async updateClient(){
                const res = await axios.put(`http://127.0.0.1:8000/api/categorie/${this.categorie.id}`, this.categorie)

                if (res.status ==200){
                    this.$router.push({name: 'Categorie'})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Categorie has been update',
                        showConfirmButton: false,
                    })
                }
            },
            mounted(){
                this.categorie.id = this.$router.params.id;
                axios.get(`http://127.0.0.1:8000/api/categorie/${this.categorie.id}`)
                .then(response => {
                    this.categorie = response.data.categorie;
                })
            },
        }
    }

</script>