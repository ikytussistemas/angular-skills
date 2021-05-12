import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { componentAnimations, ComponentAnimationState } from '../../shared/component-animation';
import { ComponentRef } from '../../shared/component-ref';
import { LOADING_CONFIG_TOKEN, LoadingConfig, LoadingData } from './loading-config';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [componentAnimations.fadeComponent],
})
export class LoadingComponent implements OnInit {

  static teste = new EventEmitter<boolean>();
  color = 'red';
  style = { color: 'blue', fontWeight: 'bolder', fontStyle: 'italic'};
  animationState: ComponentAnimationState = 'default';

  constructor(
    readonly data: LoadingData,
    readonly ref: ComponentRef,
    @Inject(LOADING_CONFIG_TOKEN) private loadingConfig: LoadingConfig
  ) {
    data.message = data.message || 'Aguarde...';
  }

  ngOnInit() {

  }

  ct() {
    const t = LoadingComponent.teste.emit(true);
  }

  close() {
    this.animationState = 'closing';
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ComponentAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
}
