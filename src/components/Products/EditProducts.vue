<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Edit</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Product
            </div>
            <div class="card-body">
                <form @submit.prevent="updateProduct">
                
                <div class="row mb-3">
                    <label for="id" class="form-label">ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="Id Product" disabled
                        v-model="product.id"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="name" class="form-label">NAME : </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Name Product"
                        v-model="product.name"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="price" class="form-label">PRICE</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="price" placeholder="Price Products" disabled
                        v-model="product.price"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="stock" class="form-label">STOCK</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="stock" placeholder="Stock Product" disabled
                        v-model="product.stock"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="categorie_id" class="form-label">CATEGORIE ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="categorie_id" placeholder="Categorie Id" disabled
                        v-model="product.categorie_id"
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
    name: 'EditProduct',
    data(){
        return{
            product:{
                id:0,
                name: '',
                price: '',
                stock: '',
                categorie_id: '',
                
            },
            }
        },
        methods:{
            cancelar(){
                this.$router.push({name: 'Product'})
            },

            async updateProduct(){
                const res = await axios.put(`http://127.0.0.1:8000/api/product/${this.product.id}`, this.product)

                if (res.status ==200){
                    this.$router.push({name: 'Product'})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Client has been update',
                        showConfirmButton: false,
                    })
                }
            },
            mounted(){
                this.product.id = this.$router.params.id;
                axios.get(`http://127.0.0.1:8000/api/product/${this.product.id}`)
                .then(response => {
                    this.product = response.data.product;
                })
            },
        }
    }

</script>