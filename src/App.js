import './App.css';
import 'primeicons/primeicons.css';

import AprendizService  from './services/AprendizService';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Component } from 'react';  
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';
        


export default class App extends Component {
  constructor() {
    super();
    this.state = { aprendices: [] };
    this.items=[
    {
        label:"Nuevo",
        icon: "pi pi -fw pi-user-plus",
        command:()=>{alert('Saved')}
    },

    {
        label:"Editar",
        icon: "pi pi -fw pi-user-edit",
        command:()=>{alert('Edited')}
    },

    {
        label:"Eliminar",
        icon: "pi pi -fw pi-user-minus",
        command:()=>{alert('Deleted')}
     }

    ]

    this.aprendizService = new AprendizService();
  }

  componentDidMount() {
    this.aprendizService.getAll()
      .then(data => {
        console.log("Datos recibidos en App.js:", data);
        this.setState({ aprendices: data });
      })
      .catch(error => {
        console.error("Error al cargar datos:", error);
      });
  }

  render() {
    return (
      <div style={{width:'80%', margin:'30px auto: 0px'}}>
        <Menubar model={this.items}/>

        <br/>

      <Panel header= "Listado de Aprendices"> 
      <DataTable value={this.state.aprendices}>
        <Column field="iduser" header="ID" />
        <Column field="nomuser" header="NOMBRES" />
        <Column field="apellido" header="APELLIDOS" />
        <Column field="email" header="CORREO" />
      </DataTable>
      </Panel>
      </div>
    );
  }
}
