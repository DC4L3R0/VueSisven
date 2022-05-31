<template>
    <div class="container">
            <h1 class="text-start">Listado De Categorias |
                <button @click='newCategorie()'
                        class="btn btn-success mx-2">
                        <font-awesome-icon icon="plus" />
                        </button>
            </h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DESCRIPTION</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(categories,index) in categories" :key="index">
                        <th scope="row">{{categorie.id}}</th>
                        <td>{{categorie.name}}</td>
                        <td>{{categorie.description}}</td>
                        
                        <td>
                            <button @click="deleteCategorie(categorie.id)"
                                    class="btn btn-danger mx-2">
                                    <font-awesome-icon icon="trash" />
                            </button>
                            <button @click="editCategorie(categorie.id)"
                                     class="btn btn-warning mx-2">
                                     <font-awesome-icon icon="pencil" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
    name: 'Categorie',
    data(){
        return{
            categorie: []
        }
    },
    methods: {
        deleteCategorie(id){
            Swal.fire({
                position: 'top-center',
                title: `Do you want to delete the client with id ${id}?`,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/categories/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            Swal.fire('Deleted!! ', '', 'success')
                            this.categorie = response.data.categorie
                        }
                    })
                }
            })
        },
    
    editCategorie(id){
        this.$router.push({name: 'EditCategorie', params: {id: `${id}`}})
    },
    newCategorie(){
        this.$router.push({name: `NewCategorie`});
    }
    },
    mounted(){
        axios
        .get('http://147.0.0.1:8000/api/categorie')
        .then(response => (this.categorie = response.data.categorie));
    }, 
}
</script>
