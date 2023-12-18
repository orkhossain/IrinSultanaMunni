import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  hovered: boolean = false;
  darkMode: boolean = false;
  drawerOpen: boolean = false;


  ngOnInit() {
    // Listen for window resize for mobile view changes
    window.addEventListener('resize', () => {
      this.drawerOpen = false; // Close drawer on window resize
    });

  }

setDrawerOpen(value: boolean){
    this.drawerOpen  = value;
}

    setHovered(value: boolean): void {
    this.hovered = value;
  }

  handleDarkModeToggle(): void {
    this.darkMode = !this.darkMode;
  }

  handleDrawerToggle(): void {
    this.drawerOpen = !this.drawerOpen;
  }

  get isMobile(): boolean {
    // Adjust the breakpoint as needed
    return window.innerWidth < 600;
  }

}
