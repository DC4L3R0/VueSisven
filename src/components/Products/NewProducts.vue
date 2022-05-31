<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New Product</h1>
        <div class="card">
            <div class="card-heade fw-bold">
                Product
            </div>
            <div class="card-body">
                <form @submit.prevent="saveProduct">
                <div class="row mb-3">
                    <label for="id" class="form-label">ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="ID Product" disabled
                        v-model="product.id"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="name" class="form-label">NAME</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="name" placeholder="Name Product" 
                        v-model="product.name"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="price" class="form-label">PRICE</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="surname" placeholder="Price Product" 
                        v-model="product.price"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="stock" class="form-label">STOCK</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="stock" placeholder="Stock Product" 
                        v-model="product.stock"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="categorie_id" class="form-label">CATEGORIE_ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="categorie_id" placeholder="Categorie_id" 
                        v-model="product.categorie_id"
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
    methods: {
        cancel(){
            this.$router.push({name: 'Product'})
        },

        async saveProduct(){
            this.product.id = this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/product`, this.product)
            console.log(res);
            if (res.status ==200){
                this.$router.push({name: 'Product'})
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