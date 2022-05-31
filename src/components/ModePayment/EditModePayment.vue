<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Edit</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Mode Payment
            </div>
            <div class="card-body">
                <form @submit.prevent="updateModePayment">
                
                <div class="row mb-3">
                    <label for="id" class="form-label">ID</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="id" placeholder="Id ModePayment" disabled
                        v-model="modepayment.id"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="name" class="form-label">NAME : </label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="building" /> </div>
                        <input type="text" class="form-control" name="name" id="name" placeholder="Name ModePayment"
                        v-model="modepayment.name"
                        >
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="otherdetails" class="form-label">OTHER DETAILS</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                        <input type="text" class="form-control" id="otherdetails" placeholder="OtherDEtails ModePayment" 
                        v-model="modepayment.otherdetails"
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
    name: 'EditModePayment',
    data(){
        return{
            modepayment:{
                id:0,
                name: '',
                other_details: '',
                
            },
            }
        },
        methods:{
            cancelar(){
                this.$router.push({name: 'modepayment'})
            },

            async updateModePayment(){
                const res = await axios.put(`http://127.0.0.1:8000/api/modepayment/${this.modepayment.id}`, this.modepayment)

                if (res.status ==200){
                    this.$router.push({name: 'ModePayment'})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'ModePayment has been update',
                        showConfirmButton: false,
                    })
                }
            },
            mounted(){
                this.modepayment.id = this.$router.params.id;
                axios.get(`http://127.0.0.1:8000/api/modepayment/${this.modepayment.id}`)
                .then(response => {
                    this.modepayment = response.data.modepayment;
                })
            },
        }
    }

</script>