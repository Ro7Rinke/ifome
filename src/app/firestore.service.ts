import { Injectable } from '@angular/core';
import {AngularFirestore } from 'angularfire2/firestore'
import Estabelecimento from './estabelecimento.interface'

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  criarEstabelecimanto = (estabelecimento: Estabelecimento) => {
    const id = this.firestore.createId()

    return this.firestore.doc(`estabelecimentos/${id}`).set({
      id,
      estabelecimento
    })
  }

}
