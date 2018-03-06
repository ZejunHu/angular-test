import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() featureSeclected = new EventEmitter<string>();

  onSeclect(feature: string) {
    this.featureSeclected.emit(feature);
  }
}
