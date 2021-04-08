import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthenticationService } from "../auth/shared/authentication.service";

import { AngularFireAuth } from "@angular/fire/auth";


import { LandingPage } from './landing.page';

xdescribe('LandingPage', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;


  
const authStub: AngularFireAuth = jasmine.createSpyObj('authStub', ['getAuthInstance', 'getRedirectResult']);

//  const authStub2: AngularFirestore = ja

  const FirestoreStub: any = {
    authState: {},
    auth: {
      authService() {
        return Promise.resolve();
      }
    }
  };
  


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
        providers: [
          { provide: AngularFireAuth, useValue: AuthenticationService },
          { provide: AngularFirestore, useValue: FirestoreStub },
        ]    
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('AngularFireAuth issues', () => {
    expect(component).toBeTruthy();
  });
});
