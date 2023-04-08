import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, doc, DocumentData, Firestore, updateDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { PumpStation } from '../interfaces/pump.model';

@Injectable({
  providedIn: 'root'
})
export class PumpService {


  private nodeCollection: CollectionReference<DocumentData>;
  private nodes: Observable<PumpStation[]>;



  constructor(private firestore: Firestore) {
    this.nodeCollection = collection(this.firestore, 'gateways/gateway1/nodeID');
    this.nodes = collectionData(this.nodeCollection, { idField: 'id' }) as Observable<PumpStation[]>;

  }

  getNodes() {
    return this.nodes;
  }

  updateNode(node: PumpStation) {
    updateDoc(doc(this.firestore, `gateways/gateway1/nodeID/${node.id}`), {...node});
  }




}
