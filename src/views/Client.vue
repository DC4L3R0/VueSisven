<template>
    <div class="container">
            <h1 class="text-start">Listado De Clientes |
                <button @click='newClient()'
                        class="btn btn-success mx-2">
                        <font-awesome-icon icon="plus" />
                        </button>
            </h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">SURNAME</th>
                        <th scope="col">ADRESS</th>
                        <th scope="col">BIRTH_DATE</th>
                        <th scope="col">PHONE_NUMBER</th>
                        <th scope="col">EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in client" :key="client.id">
                        <th scope="row">{{client.id}}</th>
                        <td>{{client.name}}</td>
                        <td>{{client.surname}}</td>
                        <td>{{client.adress}}</td>
                        <td>{{client.birth_date}}</td>
                        <td>{{client.phone_number}}</td>
                        <td>{{client.email}}</td>
                        <td>
                            <button @click="deleteClient(client.id)"
                                    class="btn btn-danger mx-2">
                                    <font-awesome-icon icon="trash" />
                            </button>
                            <button @click="editClient(client.id)"
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

export default {
    name: 'Client',
    data(){
        return{
            client: []
        }
    },
    methods: {
        deleteClient(id){
            Swal.fire({
                position: 'top-center',
                title: `Do you want to delete the client with id ${id}?`,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/client/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            Swal.fire('Deleted!! ', '', 'success')
                            this.client = response.data.client
                        }
                    })
                }
            })
        },
    
    editClient(id){
        this.$router.push({name: 'EditClient', params: {id: `${id}`}})
    },
    newClient(){
        this.$router.push({name: `NewClient`});
    }
    },
    mounted(){
        axios
        .get(`http://127.0.0.1:8000/api/client`)
        .then(response => (this.client = response.data.client));
    }, 
}
</script>