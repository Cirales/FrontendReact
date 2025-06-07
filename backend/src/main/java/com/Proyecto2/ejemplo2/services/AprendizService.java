
package com.Proyecto2.ejemplo2.services;

import com.Proyecto2.ejemplo2.model.Aprendiz;


public interface AprendizService {
    Aprendiz newAprendiz (Aprendiz newAprendiz);
    Iterable<Aprendiz> getAll();
    Aprendiz modifyAprendiz (Aprendiz aprendiz);
    Boolean deleteAprendiz (Long iduser);
    
}

