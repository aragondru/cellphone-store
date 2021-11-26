<template>
  <div class="text-center">
    <v-dialog
      width="500"
      v-model="dialog"
      transition="dialog-bottom-transition"
      persistent
    >

      <v-card >
        <v-card-title class="text-h6 font-weight-regular white--text justify-space-between" style="background-color:#2b456e;">
          <span class="text-caption white--text text--darken-1">
                Nuevo anuncio
          </span>
          <v-spacer></v-spacer>
          <span>{{ currentTitle }}</span>
          <v-spacer></v-spacer>
          <v-avatar
            color="success"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title>

        <v-window v-model="step">
          <v-window-item :value="1">
            <v-card-text>
              <v-text-field
                label="Nombre"
                v-model="vendedor"
              ></v-text-field>
              <v-text-field
                label="Telefono"
                v-model="telefono"
              ></v-text-field>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="2">
            <v-card-text>
              <v-text-field
                label="Titulo del anuncio"
                v-model="titulo"
              ></v-text-field>
              <v-select
                :items="marcas"
                item-text="marca"
                item-value="id"
                label="Marca"
                v-model="idMarca"
                outlined
              ></v-select>
              <v-select
                :items="modelos"
                item-text="nombre"
                item-value="id"
                label="Modelo"
                v-model="id_modelo"
                outlined
              ></v-select>
              <v-select
                :items="sistemaL"
                label="Sistema operativo"
                v-model="sistema"
                outlined
              ></v-select>
              <v-text-field
                label="Tamaño de pantalla"
                v-model="pantalla"
                type="number"
              ></v-text-field>
              <v-text-field
                label="Rom"
                v-model="rom"
                type="number"
              ></v-text-field>
              <v-text-field
                label="RAM"
                v-model="ram"
                type="number"
              ></v-text-field>
              <v-row>
                <v-col cols="4">
                  <v-subheader>Estado del telefono</v-subheader>
                </v-col>
                <v-col cols="8">
                  <v-radio-group v-model="estado">
                    <v-radio
                      v-for="n in estadoL"
                      :key="n"
                      :label="`${n}`"
                      :value="n"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-text-field
                label="Precio"
                v-model="precio"
                type="number"
                step="0.01"
              ></v-text-field>
              <v-textarea
                outlined
                name="input-7-4"
                label="Descripción del anuncio"
                v-model="descripcion"
              ></v-textarea>
            </v-card-text>
          </v-window-item>

          <v-window-item :value="3">
            <div class="pa-4 text-center">
              <v-file-input
                label="File input"
                v-model="files"
                filled
                show-size
                prepend-icon="mdi-camera"
              ></v-file-input>
              <v-btn
                color="primary"
                elevation="2"
                fab
                outlined
                @click="subir"
                v-show="!upload"
                :disabled="fotoUrl!==''"
              >
              <v-icon>mdi-upload</v-icon>
              </v-btn>
              <v-progress-linear
                indeterminate
                color="teal"
                v-show="upload"
              ></v-progress-linear>
            </div>
          </v-window-item>
        </v-window>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            v-show="step !== 1"
            text
            @click="step--"
          >
            Back
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="blue-grey"
            @click="modalR"
          >
            Cancel
          </v-btn>
          <v-btn
            v-show="step !== 3"
            color="primary"
            depressed
            @click="step++"
          >
            Next
          </v-btn>
          <v-btn
            v-show="step === 3"
            color="success"
            depressed
            :disabled="fotoUrl===''"
            @click="guardar"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {eventBus} from '../main'
import {db,storage} from '../db'
  export default {
    name:'AddNew',
    data () {
      return {
        dialog: false,
        step:1,
        vendedor:"",
        telefono:"",
        titulo:"",
        sistemaL:["Android","IOs","Windows phone","Otro"],
        sistema:"",
        marcas:[],
        idMarca:"",
        id_modelo:"",
        modelos:[],
        pantalla:"",
        ram:"",
        rom:"",
        estadoL:["nuevo","usado"],
        estado:"",
        precio:"",
        descripcion:"",
        files:null,
        filename:'',
        fotoUrl:'',
        anuncios:[],
        upload:false
      }
    },
    methods: {
        modalR(){
          this.step=1;
          this.dialog=false;
          this.id_modelo='';
          this.pantalla='';
          this.estado='';
          this.precio='';
          this.ram='';
          this.rom='';
          this.sistema='';
          this.vendedor='';
          this.telefono='';
          this.titulo='';
          this.descripcion='';
          this.fotoUrl='';
          this.files=null,
          this.filename=''
          this.idMarca=''

        },
        guardar(){
          var anuncioNew={
              id_modelo:  this.id_modelo,
              pantalla:   this.pantalla,
              estado:     this.estado,
              precio:     Number(this.precio),
              ram:        parseFloat(this.ram),
              rom:        parseFloat(this.rom),
              sistema:    this.sistema,
              vendedor:   this.vendedor,
              telefono:   this.telefono,
              titulo:     this.titulo,
              descripcion:this.descripcion,
              fecha: new Date(Date.now()),
              foto:       this.fotoUrl,
              id_marca:   this.idMarca,
          }
          db.collection('anuncio').add(anuncioNew)
          this.dialog=false;

          this.id_modelo='';
          this.pantalla='';
          this.estado='';
          this.precio='';
          this.ram='';
          this.rom='';
          this.sistema='';
          this.vendedor='';
          this.telefono='';
          this.titulo='';
          this.descripcion='';
          this.fotoUrl='';
          this.files=null,
          this.filename=''
          this.step=1
          this.id_marca=''
        },
        subir(){
          console.log("Subiendo imagen");
          this.upload=true
          console.log(this.files.name);
          this.filename=this.files.name

          var ref=storage.ref('anuncios/'+this.files.name)
          ref.put(this.files).then(()=>{
            console.log("Se subió la imagen xd");
            ref.getDownloadURL().then((url)=>{
              this.fotoUrl=url
              this.upload=false
            })
          }).catch((error)=>{
            console.log(error);
          })
        }
    },
    mounted(){
        eventBus.$on('showModal',(data)=>{
            this.dialog=data;
        })
    },
    computed:{
      currentTitle () {
        switch (this.step) {
          case 1: return 'Vendedor'
          case 2: return 'Telefono'
          default: return 'Upload picture'
        }
      },
    },
    destroyed(){
        eventBus.$off('showModal');
    },
    firestore:{
      marcas: db.collection('marca'),
      modelos: db.collection('modelo'),
      anuncios: db.collection('anuncio')
    }
  }
</script>

<style lang="scss" scoped>
.nose{
  background-color:#3d587e;
}
</style>