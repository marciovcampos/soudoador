import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { WhereDonateComponent } from './pages/where-donate/where-donate.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campanhas', component: CampaignsComponent },
  { path: 'onde-doar', component: WhereDonateComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'cadastro', component: RegistrationComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'contato', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
