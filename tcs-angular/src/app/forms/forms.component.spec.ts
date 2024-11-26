import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';
import { provideRouter } from '@angular/router';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when passowrds match', ()=>{

    component.form.controls.firstname.setValue('test1')
    component.form.controls.lastname.setValue('test1')
    component.form.controls.email.setValue('test@gmail.com')
    component.form.controls.username.setValue('test1')
    component.form.controls.password.setValue('test123')
    component.form.controls.confirmpassword.setValue('test123')
    fixture.detectChanges();
    expect(component.form.valid).toBeTruthy()
    expect(component.form.errors?.['passwordMismatch']).toBeFalsy();
  })
  it('should be invalid when passowrds dont match', ()=>{
    component.form.controls.password.setValue('test1')
    component.form.controls.confirmpassword.setValue('test2')
    fixture.detectChanges();
    console.log(component.form.get('confirmpassword')?.errors?.['passwordMismatch'])
    expect(component.form.valid).toBeFalsy()
    expect(component.form.get('confirmpassword')?.errors?.['passwordMismatch']).toBeTruthy();
  })

});
