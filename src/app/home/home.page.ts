import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}
  // ngOnInit() {
  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-6.899000567174442, 107.61874186356987], 10)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);
  const baseMaps = {
    'OpenStreetMap': L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    'Satellite': L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; <a href="https://maps.google.com">Google Maps</a>'
    }),
    'Terrain': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> contributors'
    })
  };

   // Tambahkan kontrol lapisan ke peta
   L.control.layers(baseMaps).addTo(this.map)

  const markerIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Ganti dengan URL ikon marker default dari CON
    iconRetinaUrl:'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',//GantidenganURLikonmarkerdefault2xdariCDN
    shadowUrl:'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',//GantidenganURLbayanganmarkerdefaultdariCON
    iconSize: [25, 41], // Sesuaikan dengan ukuran ikon Anda
    iconAnchor: [12, 41], // Sesuaikan dengan titik penunjuk ikon Anda
  });

  const marker = L.marker([-6.899000567174442, 107.61874186356987], { icon: markerIcon}).addTo(this.map)
  .bindPopup('Gedung Sate')
  .openPopup();

}
  }
