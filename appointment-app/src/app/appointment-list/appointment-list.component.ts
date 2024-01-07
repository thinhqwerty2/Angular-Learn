import {Component, OnInit} from '@angular/core';
import {Appointment} from "../models/appointment";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = []


  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        date: this.newAppointmentDate,
        id: Date.now(),
        title: this.newAppointmentTitle

      }
      this.appointments.push(newAppointment);
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }

  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments))

  }

  loadAppointment() {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  ngOnInit(): void {
    this.loadAppointment()
  }
}
