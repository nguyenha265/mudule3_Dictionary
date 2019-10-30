import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  key: string;
  value: string;
  private sub: Subscription;

  constructor(
    private activatedRouter: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) {
  }

  ngOnInit() {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.key = paramMap.get('key');
      console.log(this.key);
      this.value = this.dictionaryService.search(paramMap.get('key'));
    });
  }
}
