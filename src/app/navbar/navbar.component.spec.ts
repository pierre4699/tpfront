import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const nav = fixture.componentInstance;
    expect(nav).toBeTruthy();
  });

  it(`should have as title 'tpfront'`, () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const nav = fixture.componentInstance;
    expect(nav.title).toEqual('tpfront');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('tpfront app is running!');
  });
});
