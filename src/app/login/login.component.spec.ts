import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { platformBrowser } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create username and password fields', ()=>{
      const username = fixture.debugElement.query(By.css('input[name=username]')).nativeElement
      const password = fixture.debugElement.query(By.css('input[name=password]')).nativeElement

      expect(username).toBeTruthy();
      expect(password).toBeTruthy();

  })

  it('should make username and password required', ()=>{
    const username = fixture.debugElement.query(By.css('input[name=username]')).nativeElement
    const password = fixture.debugElement.query(By.css('input[name=password]')).nativeElement

    username.value = '';
    password.value = '';
    fixture.detectChanges()
    const submit = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement

    expect(submit.disabled).toBeTrue();

  })
  it('should make enable submit when form is valid', ()=>{
    const username = fixture.debugElement.query(By.css('input[name=username]')).nativeElement
    const password = fixture.debugElement.query(By.css('input[name=password]')).nativeElement

    username.value = 'test1';
    password.value = 'test1';
    username.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));
    fixture.detectChanges()

    const submit = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement

    expect(submit.disabled).toBeFalse();

  })
});
