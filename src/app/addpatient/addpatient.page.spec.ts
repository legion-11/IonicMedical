import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';




import { AddpatientPage } from './addpatient.page';

xdescribe('AddpatientPage', () => {
  let component: AddpatientPage;
  let fixture: ComponentFixture<AddpatientPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpatientPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Firebase Authentication', () => {
    expect(component).toBeTruthy();
  });
});

