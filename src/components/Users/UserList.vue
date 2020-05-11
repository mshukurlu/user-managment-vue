<template>
  <div>

<div class="row m-2">
<b-button v-b-modal.modal-1 @click="addNewUser()">Yeni istifadəçi əlavə et</b-button>
<b-modal id="modal-1" :title="!userForm.id ? 'Yeni istifadəçi əlavə et':'Readktə et - '+userForm.name">
   <div class="form-group">
     <label>Adınız , Soyadınız:</label>
     <input placeholder="Ad Və Soyadı daxil edin" v-model="userForm.name" class="form-control" />
   </div>

   <div class="form-group">
     <label>Email:</label>
     <input placeholder="Email ünvanınız" v-model='userForm.email' class="form-control">
   </div>

  <div class="form-group">
    <button class="btn btn-primary" @click="saveUser()">{{!userForm.id ? 'Qeydiyyata al': 'Yenilə'}}</button>
  </div>

  </b-modal>
</div>


<div class="row">
   <div class="col-md-12">
   <b-table striped hover :items="users" :fields='fields'>
  
  <template v-slot:cell(actions)="data">
   <b-button v-b-modal.modal-1 @click="openAndFillUserForm(data.item.id)" class="mr-2">Yenilə</b-button>

   <b-button variant='danger' @click="deleteUser(data.item.id)">Sil</b-button>
   </template>
     
   </b-table>
  </div>
</div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Form from '../../helper/Form'
export default {
    data(){
    return { 
       userForm: new Form({
         id:"",
         name:"",
         email:""
    }),
      fields:[
        {
          key:'id',
          label:'Sıra Nömrəsi'
        },
        {
         key:'name',
         label:'Ad Soyad'
         },
         {
           key:'email',
           label:'Email'
         },
         {
           key:'actions',
           label:'Hərəkətlər'
         }
         ]
    }  
    },
    computed:
    {
        ...mapState(['users']),
        
    },
    methods:
    {
      ...mapActions(['addUserToList','deleteUserById']),
      openAndFillUserForm(userId)
      {
          this.userForm.reset();

          this.userForm = this.users.find(user => {
            return user.id === userId;
          });
      },
      saveUser()
      {
        this.addUserToList({
          name:this.userForm.name,
          email:this.userForm.email
        })
      },
      addNewUser()
      {
        this.userForm.reset();
      },
      deleteUser(userId)
      {
        this.$swal({
          title:'Useri silmək istədiyinizə əminsiniz?',
          text:'Bu əməliyyat geri qaytarıla bilmir!',
          showCancelButton:true,
          confirmButtonText:'Bəli Silin'
        }).then(result => {
          if(result.value){
            this.deleteUserById(userId)
          }
       });
         
      }
    }
}
</script>

<style>

</style>