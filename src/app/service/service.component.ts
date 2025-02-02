import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  serviceid: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.serviceid = this.route.snapshot.paramMap.get('id') || ''; // Get parameter from URL
  }
}
