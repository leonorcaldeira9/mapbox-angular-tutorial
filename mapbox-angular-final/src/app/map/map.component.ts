import { environment } from '../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number = 39.268706165892766;
  lng: number = -7.442989975129187;

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 8,
      center: [this.lng, this.lat]
    });

    this.map.on('load', () => {
      new mapboxgl.Marker()
        .setLngLat([39.26820496105775, -7.442801065929057])
        .addTo(this.map);
    });
  }
}