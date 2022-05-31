<template>
    <div class="container">
            <h1 class="text-start">Listado De Products |
                <button @click='newProducts()'
                        class="btn btn-success mx-2">
                        <font-awesome-icon icon="plus" />
                        </button>
            </h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">STOCKS</th>
                        <th scope="col">ID CATEGORIE</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product,index) in product" :key="index">
                        <th scope="row">{{product.id}}</th>
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td>{{product.stock}}</td>
                        <td>{{product.categories_id}}</td>
                        
                        <td>
                            <button @click="deleteProduct(product.id)"
                                    class="btn btn-danger mx-2">
                                    <font-awesome-icon icon="trash" />
                            </button>
                            <button @click="editProduct(product.id)"
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
    name: 'Products',
    data(){
        return{
            product: []
        }
    },
    methods: {
        deleteProduct(id){
            Swal.fire({
                position: 'top-center',
                title: `Do you want to delete the product with id ${id}?`,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/product/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            Swal.fire('Deleted!! ', '', 'success')
                            this.product = response.data.product
                        }
                    })
                }
            })
        },
    
    editProduct(id){
        this.$router.push({name: 'EditProduct', params: {id: `${id}`}})
    },
    newProduct(){
        this.$router.push({name: `NewProduct`});
    }
    },
    mounted(){
        axios
        .get('http://147.0.0.1:8000/api/product')
        .then(response => (this.product = response.data.product));
    }, 
}
</script>