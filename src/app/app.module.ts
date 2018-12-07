import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { GitSearchService } from './git-search.service';
import { GitCodeSearchService } from './git-code-search.service';
import { UnifiedSearchService } from './unified-search.service';

import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoSpecialCharsDirective } from './no-special-chars.directive';
import { RepositoryDisplayComponent } from './repository-display/repository-display.component';
import { CodeDisplayComponent } from './code-display./code-display.component';
import { FadeDirective } from './fade.directive';
import { FavoriteTextPipe } from './favorite-text.pipe';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'search',
    redirectTo: 'search/angular',
    pathMatch: 'full'
   
  },
  {
    path: 'search/:query',
    component: GitSearchComponent,
    data: {
      title: 'Git Search'
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent,
    NoSpecialCharsDirective,
    RepositoryDisplayComponent,
    CodeDisplayComponent,
    FadeDirective,
    FavoriteTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GitSearchService, GitCodeSearchService, UnifiedSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
