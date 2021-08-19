import { DebugElement } from '@angular/core';
import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppComponent } from './app.component';

const ButtonClickEvents = {
  left: {button: 0},
  right: {button: 2}
};

function click(el:DebugElement | HTMLElement,
                      eventObj: any = ButtonClickEvents.left): void {
       if (el instanceof HTMLElement) {
         el.click();
       } else {
         el.triggerEventHandler('click', eventObj);
       }
                      }
describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      })
  }));


  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have button with Label 'Reset'`, waitForAsync(() => {
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Reset');
  }));

  it(`should have css Panel class property`, waitForAsync(() => {
    // const currentCountTest = component.currentCount;
    fixture.detectChanges();

    const elPanel = el.queryAll(By.css(".panel"))
    expect(elPanel).toBeTruthy("Could not find Panel");

  }));

  it(`should display the initial counter value`, waitForAsync(() => {
    const currentCounter = component.currentCount;
    fixture.detectChanges();

    expect(currentCounter).toEqual(0);

  }));

  it(`should update with click event`, waitForAsync(() => {
    const updateArrayCounter = component.updateArrayCounter;
    fixture.detectChanges();

    const elContainer = el.queryAll(By.css(".container"))
    click(elContainer[0])
    expect(updateArrayCounter).toHaveSize(1);

  }));

  it(`should reset with click event`, waitForAsync(() => {
    const currentCounter = component.currentCount;

    // const updateArrayCounter = component.updateArrayCounter;
    fixture.detectChanges();

    const resetEl = fixture.debugElement.nativeElement.querySelector('button');

    click(resetEl)
    expect(currentCounter).toEqual(0);

  }));

  it(`should have css Header class property`, waitForAsync(() => {
    // const currentCountTest = component.currentCount;
    const elHeader = el.queryAll(By.css(".header"))
    expect(elHeader).toBeTruthy("Could not find Header");

  }));

  it(`should have css button class property`, waitForAsync(() => {
    // const currentCountTest = component.currentCount;
    const elButton = el.queryAll(By.css(".button"))
    expect(elButton).toBeTruthy("Could not find Button");

  }));


  it(`should have css Container class property`, waitForAsync(() => {
    // const currentCountTest = component.currentCount;
    const elContainer = el.queryAll(By.css(".container"))
    expect(elContainer).toBeTruthy("Could not find Container");

  }));


  it(`should have css Header class property`, waitForAsync(() => {
    // const currentCountTest = component.currentCount;
    const elHeader = el.queryAll(By.css(".header"))
    expect(elHeader).toBeTruthy("Could not find Header");

  }));

});
