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
              <v-row>
                <v-col cols="6" sm="5">
                  <v-select
                    :items="marcas"
                    item-text="marca"
                    item-value="marca"
                    label="Marca"
                    v-model="idMarca"
                    outlined
                    @click="newMarca==true"
                  ></v-select>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-btn
                    text
                    color="blue-grey"
                    outlined
                    @click="dialogMa=true"
                  >
                    Nueva marca
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="5">
                  <v-select
                    :items="modelos"
                    item-text="nombre"
                    item-value="nombre"
                    label="Modelo"
                    v-model="id_modelo"
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="4" sm="3">
                  <v-btn
                    text
                    color="blue-grey"
                    outlined
                    @click="dialogMo=true"
                  >
                    Nuevo Modelo
                  </v-btn>
                </v-col>
              </v-row>
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
    <div class="text-center">
      <v-dialog
        v-model="dialogMa"
        persistent
        width="500"
      >

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Nueva Marca
          </v-card-title>

          <v-divider></v-divider>
          <v-container >
            <v-text-field
              label="Nueva marca"
              v-model="newMarca"
            ></v-text-field>
          </v-container>

          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialogMa = false"
            >
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              text
              @click="nuevamarca"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div class="text-center">
      <v-dialog
        v-model="dialogMo"
        persistent
        width="500"
      >

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Nueva Modelo
          </v-card-title>

          <v-divider></v-divider>
          <v-container >
            <v-text-field
              label="Nuevo modelo"
              v-model="newModelo"
            ></v-text-field>
            <v-select
                    :items="marcas"
                    item-text="marca"
                    item-value="id"
                    label="Marca"
                    v-model="idNuevaMarca"
                    outlined
                  ></v-select>
          </v-container>

          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialogMo = false"
            >
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              text
              @click="nuevomodelo"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main'
import {db,storage} from '../db'
  export default {
    name:'AddNew',
    data () {
      return {
        newMarca:'',
        newModelo:'',
        idNuevaMarca:'',
        dialog: false,
        dialogMa:false,
        dialogMo:false,
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
        upload:false,
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
        },
        nuevamarca(){
          this.dialogMa=!this.dialogMa;
          var marca = {
            marca:this.newMarca
          }
          db.collection('marca').add(marca)
          this.newMarca=''

        },
        nuevomodelo(){
          this.dialogMo= !this.dialogMo

          var modelo = {
            nombre: this.newModelo,
            id_marca: this.idNuevaMarca,
          }

          db.collection('modelo').add(modelo)
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

<style scoped>
.nose{
  background-color:#3d587e;
}
.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>