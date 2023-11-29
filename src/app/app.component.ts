import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { TareasComponent } from './tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { TareasCompletadasComponent } from './tareas-completadas/tareas-completadas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TareasCompletadasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listaTareas';

  tareasComp: string[] = []
  tareaIngresada: string = ''
  tareas: string[] = []
  

  comprueba(event:KeyboardEvent){
    if(event.key == 'Enter'){
      this.tareas.unshift(this.tareaIngresada)
      this.tareaIngresada = ''
    }
  }

  agregarTarea(){
    if(this.tareaIngresada != ''){
      this.tareas.unshift(this.tareaIngresada)
      this.tareaIngresada = ''
    }
  }

  eliminarTarea(idTarea:number){this.tareas.splice(idTarea,1)}

  completarTarea(tarea:string,idTarea:number){
    this.tareasComp.unshift(tarea)
    this.tareas.splice(idTarea,1)
  }




}
