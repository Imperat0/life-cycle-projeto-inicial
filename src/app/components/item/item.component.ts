import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy, OnChanges {

  @Input() item!: Item;
  @Output() emitindoItemEditar = new EventEmitter();
  @Output() emitindoIdDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){}

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  deletarItem() {
    this.emitindoIdDeletar.emit(this.item.id);
  }

  ngOnDestroy() {

  }

  editarItem(){
    this.emitindoItemEditar.emit(this.item);
  }
}
