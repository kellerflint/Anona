import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/services/web-socket.service';

@Component({
  selector: 'app-response-dashboard',
  templateUrl: './response-dashboard.component.html',
  styleUrls: ['./response-dashboard.component.scss'],
})
export class ResponseDashboardComponent implements OnInit {
  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.listen('test event').subscribe((data: any) => {
      console.log(data);
    });
  }
}
