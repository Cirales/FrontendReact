
package com.Proyecto2.ejemplo2.services;

import com.Proyecto2.ejemplo2.model.Aprendiz;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Proyecto2.ejemplo2.repository.AprendizRepository;


@Service
public class AprendizServiceImplement implements AprendizService{
    
    @Autowired
    private AprendizRepository aprendizRepository;

    @Override
    public Aprendiz newAprendiz(Aprendiz newAprendiz) {
      return aprendizRepository.save(newAprendiz);
    }

    @Override
    public Iterable<Aprendiz> getAll() {
       return this.aprendizRepository.findAll();
    
    }

    @Override
    public Aprendiz modifyAprendiz(Aprendiz aprendiz) {
     Optional<Aprendiz> aprendizEncontrado=this.aprendizRepository.findById(aprendiz.getIduser());
     
     if(aprendizEncontrado.get()!=null){
         aprendizEncontrado.get().setNomuser(aprendiz.getNomuser());
         aprendizEncontrado.get().setApellido(aprendiz.getApellido());
         aprendizEncontrado.get().setEmail(aprendiz.getEmail());
         return this.newAprendiz(aprendizEncontrado.get());
           
     }
       
        return null;
    }

    @Override
    public Boolean deleteAprendiz(Long iduser) {
      this.aprendizRepository.deleteById(iduser);
          return true;
        }
 
    
    
}
