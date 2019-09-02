import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { AboutComponent } from './components/about/about.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { SquadComponent } from './components/squad/squad.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { ArrayPipe } from './pipes/array.pipe';
import { ExperiencePipe } from './pipes/experience.pipe';
import { ArrowComponent } from './components/arrow/arrow.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FixtureComponent } from './components/fixture/fixture.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LandingPageComponent,
    ArticleComponent,
    AboutComponent,
    FixturesComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    SquadComponent,
    PlayerCardComponent,
    ArrayPipe,
    ExperiencePipe,
    ArrowComponent,
    ContactFormComponent,
    FixtureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
