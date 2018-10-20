import {Component, Input, OnInit} from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {SyncableTree} from 'sync_ot';
import {EstimationNode} from '../../models/estimation-node';

@Component({
  selector: 'etmr-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  @Input() public topicNode: SyncableTree<EstimationNode>;
  public faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
