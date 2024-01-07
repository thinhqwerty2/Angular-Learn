import {Injectable} from '@angular/core';
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = []

  getReservations(): Reservation[] {
    return this.reservations
  }

  getReservationById(id: String): Reservation | undefined {
    return this.reservations.find(value => value.id === id)
  }

  addReservation(reservation:Reservation):void{
    this.reservations.push(reservation)
  }
  deleteReservation(id:String):void{
    let idx = this.reservations.findIndex(value => value.id===id)
    this.reservations.splice(idx,1)
  }
  updateReservation(reservation:Reservation):void{
    let idx = this.reservations.findIndex(value => value.id===reservation.id)
    this.reservations[idx] = reservation
  }
}
