import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PumpService } from 'src/app/core/pump.service';
import { PumpStation } from 'src/app/interfaces/pump.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  nodes!: Observable<PumpStation[]>;

  constructor(private pumpService: PumpService) {}

  ngOnInit(): void {
      this.nodes = this.pumpService.getNodes();
  }

  updateControlState(node:PumpStation, controlUnitIndex:number) {
    node.controlUnits[controlUnitIndex].controlState = node.controlUnits[controlUnitIndex].controlState == 1 ? 0 : 1;
    this.pumpService.updateNode(node);
  }

}
