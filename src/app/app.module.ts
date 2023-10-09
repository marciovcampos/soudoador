import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { WhereDonateComponent } from './pages/where-donate/where-donate.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { TwoColumnLayoutComponent } from './components/two-column-layout/two-column-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeMessageComponent } from './components/home-message/home-message.component';
import { HomeInstitutionComponent } from './components/home-institution/home-institution.component';
import { environment } from '../environments/environment';
import { InstitutionListComponent } from './components/institution-list/institution-list.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    CampaignsComponent,
    WhereDonateComponent,
    FaqComponent,
    RegistrationComponent,
    HomeComponent,
    HomeTitleComponent,
    PageTitleComponent,
    TwoColumnLayoutComponent,
    LoginComponent,
    HomeMessageComponent,
    HomeInstitutionComponent,
    InstitutionListComponent,
    CampaignListComponent,
    FaqListComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
