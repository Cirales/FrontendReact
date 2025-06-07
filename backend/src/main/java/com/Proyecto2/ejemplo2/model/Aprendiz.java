
package com.Proyecto2.ejemplo2.model;

//clase para elaborar la entidad de la aplicación 

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;


@Entity
@Data
public class Aprendiz {
    
    @Id
    @Column (name = "Id_cliente")
    private Long iduser;
    
    @Column (name = "Nombres", nullable=false, length=20)
    
    private String nomuser;
    
     @Column(name = "Apellidos", nullable=false, length=25)
    private String apellido;
     
      @Column (name = "Correo_electronico", unique=true, nullable=false)
    private String email;
    
}
