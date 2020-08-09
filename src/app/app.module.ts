import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { LabComponent } from './pages/lab/lab.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { MarketComponent } from './pages/market/market.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
  { path: 'lab', component: LabComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'market', component: MarketComponent },
  { path: 'contact', component: ContactComponent }
  ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, ModalWindowComponent, AboutComponent, LabComponent, PortfolioComponent, MarketComponent, ContactComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ RouterModule ]
})
export class AppModule { }
