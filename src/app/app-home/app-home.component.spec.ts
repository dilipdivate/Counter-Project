

import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppHomeComponent } from './app-home.component';
import { DebugElement } from '@angular/core';

describe('AppHomeComponent', () => {
  let component: AppHomeComponent;
  let fixture: ComponentFixture<AppHomeComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({

      declarations: [
        AppHomeComponent
      ],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppHomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the HomeComponent', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppHomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it(`should have css Panel class property`, waitForAsync(() => {

    const elPanel = el.queryAll(By.css(".panel"))
    expect(elPanel).toBeTruthy("Could not find Panel");

  }));

  it('Check property binding value of counter', () => {

    const counter = component.counter;
    fixture.detectChanges();
    expect(counter).toEqual(0);

    const counters = component.counters;
    fixture.detectChanges();
    expect(counters).toHaveSize(1);

  });


  it('Check property binding value of counters', () => {

    const counters = component.counters;
    fixture.detectChanges();
    expect(counters).toHaveSize(1);

  });

});
