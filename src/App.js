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
    this.state = { aprendices: [] ,
        nomuser: '',
        apellido: '',
        email: '',
        iduser: null,
        selectedAprendiz: null,
        editando: false};
    
     this.items=[
    {
        label:"Nuevo",
        icon: "pi pi -fw pi-user-plus",
        command: this.showFormNuevo
      },
      {
        label: "Editar",
        icon: "pi pi-user-edit",
        command: this.showFormEditar
      },
      {
        label: "Eliminar",
        icon: "pi pi-user-minus",
        command: this.deleteAprendiz
      }
    ];


    this.aprendizService = new AprendizService();
  }

  componentDidMount() {
    this.aprendizService.getAll()
      .then(data => {
        this.setState({ aprendices: data });
      })
      .catch(error => {
        console.error("Error al cargar datos:", error);
      });
 }

    showFormNuevo = () => {
    this.setState({
      nomuser: '',
      apellido: '',
      email: '',
      iduser: null,
      editando: false
    });
 };

  showFormEditar = () => {
    const { selectedAprendiz } = this.state;
    if (!selectedAprendiz) {
      alert("Selecciona un aprendiz para editar");
      return;
    }

    this.setState({
      iduser: selectedAprendiz.iduser,
      nomuser: selectedAprendiz.nomuser,
      apellido: selectedAprendiz.apellido,
      email: selectedAprendiz.email,
      editando: true
    });
  };

  saveAprendiz = () => {
    const { iduser, nomuser, apellido, email } = this.state;
    const aprendiz = { iduser, nomuser, apellido, email };

    if (iduser) {
      this.aprendizService.update(aprendiz).then(() => this.reloadList());
    } else {
      this.aprendizService.create(aprendiz).then(() => this.reloadList());
    }
  };

  deleteAprendiz = () => {
    const { selectedAprendiz } = this.state;
    if (!selectedAprendiz) {
      alert("Selecciona un aprendiz para eliminar");
      return;
    }

    this.aprendizService.delete(selectedAprendiz.iduser).then(() => this.reloadList());
  };

  reloadList = () => {
    this.aprendizService.getAll().then(data => {
      this.setState({
        aprendices: data,
        nomuser: '',
        apellido: '',
        email: '',
        iduser: null,
        selectedAprendiz: null,
        editando: false
      });
    });
  };


  render() {
    return (
      <div style={{width:'80%', margin:'30px auto: 0px auto'}}>
        <Menubar model={this.items}/>

          <br/>

              <Panel header={this.state.editando ? "Editar Aprendiz" : "Nuevo Aprendiz"}>
            <div className="p-fluid">
            <div className="p-field">
            <label htmlFor="nomuser">Nombres</label>
            <input
              type="text"
              id="nomuser"
              value={this.state.nomuser}
              onChange={(e) => this.setState({ nomuser: e.target.value })}
            />
              </div>
              <div className="p-field">
              <label htmlFor="apellido">Apellidos</label>
            <input
              type="text"
              id="apellido"
              value={this.state.apellido}
              onChange={(e) => this.setState({ apellido: e.target.value })}
            />
          </div>
          <div className="p-field">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button onClick={() => this.saveAprendiz()} className="p-button p-component">
            Guardar
          </button>
        </div>
      </Panel>

    <br />

      <Panel header= "Listado de usuarios"> 
      <DataTable value={this.state.aprendices}
            selectionMode="single"
            selection={this.state.selectedAprendiz}
            onSelectionChange={(e) => this.setState({ selectedAprendiz: e.value })}
       >
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
