<template>
    <div class="container">
            <h1 class="text-start">Listado De Modo de Pago |
                <button @click='newModePayment()'
                        class="btn btn-success mx-2">
                        <font-awesome-icon icon="plus" />
                        </button>
            </h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">OTHER DETAILS</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(mode_payment,index) in mode_payment" :key="index">
                        <th scope="row">{{mode_payment.id}}</th>
                        <td>{{mode_payment.name}}</td>
                        <td>{{mode_payment.other_details}}</td>
                        
                        <td>
                            <button @click="deleteModePayment(mode_payment.id)"
                                    class="btn btn-danger mx-2">
                                    <font-awesome-icon icon="trash" />
                            </button>
                            <button @click="editClient(mode_payment.id)"
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
    name: 'ModePayment',
    data(){
        return{
            modepayment: []
        }
    },
    methods: {
        deleteModePayment(id){
            Swal.fire({
                position: 'top-center',
                title: `Do you want to delete the ModePayment with id ${id}?`,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/mode_payment/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            Swal.fire('Deleted!! ', '', 'success')
                            this.modepayment = response.data.modepayment
                        }
                    })
                }
            })
        },
    
    editModePayment(id){
        this.$router.push({name: 'EditModePayment', params: {id: `${id}`}})
    },
    newModePayment(){
        this.$router.push({name: `NewModePayment`});
    }
    },
    mounted(){
        axios
        .get('http://147.0.0.1:8000/api/mode_payment')
        .then(response => (this.modepayment = response.data.modepayment));
    }, 
}
</script>