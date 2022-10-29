import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  
  start?:number;
  progress?:string; 
  finished?: string;

  constructor() { }

  ngOnInit(): void {
    this.start = 25/12/2022;
    this.progress = "Aguardando pagamento";
    this.finished = "Credito agendado"
  }

}
