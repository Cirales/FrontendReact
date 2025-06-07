 
package com.Proyecto2.ejemplo2.controller;

import com.Proyecto2.ejemplo2.model.Aprendiz;
import com.Proyecto2.ejemplo2.services.AprendizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController 
@RequestMapping("/aprendiz")
public class AprendizController {

 @Autowired
 private AprendizService AprendizService;

 @PostMapping("/nuevo")
 public Aprendiz newAprendiz(@RequestBody Aprendiz aprendiz){
     return this.AprendizService.newAprendiz(aprendiz); 
 }
 @GetMapping("/mostrar")
 public Iterable<Aprendiz> getAll(){
 return AprendizService.getAll();
 }
 
 @PostMapping("/modificar")
 public Aprendiz  UpdateAprendiz(@RequestBody Aprendiz aprendiz){
 return this.AprendizService.modifyAprendiz(aprendiz);
 }
 
  @PostMapping(value="/{id}")
  public Boolean deleteAprendiz (@PathVariable(value="id")Long id){
  return this.AprendizService.deleteAprendiz(id);
  }
}
