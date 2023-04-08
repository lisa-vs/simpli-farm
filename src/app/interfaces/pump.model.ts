import { Timestamp } from "@angular/fire/firestore";

export interface PumpStation {
  lastUpdate: Timestamp;
  controlUnits: ControlUnit[];
  id: string;
  displayName: string;
}

export interface ControlUnit {
  relayState: number;
  controlState: number;
  displayName: string;
  sensorValue: number;
}
