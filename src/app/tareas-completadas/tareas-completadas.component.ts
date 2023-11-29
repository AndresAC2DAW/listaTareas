import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas-completadas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas-completadas.component.html',
  styleUrl: './tareas-completadas.component.css'
})
export class TareasCompletadasComponent {

  @Input() tareasCompletadas: string[] = [];


  eliminarTarea(idTarea:number){
    this.tareasCompletadas.splice(idTarea,1)
  }
}
