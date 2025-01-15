import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FormsModule } from '@angular/forms';
import { StarratingComponent } from './components/partial/starrating/starrating.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partial/search/search.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { TagComponent } from './components/partial/tag/tag.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partial/title/title.component';
import { NotFoundComponent } from './components/partial/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StarratingComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
