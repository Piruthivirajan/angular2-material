import { Route } from '@angular/router';
import { AppComponent } from "./app.component";

export const routes: Route[] = [
  { path: '', component: AppComponent }
  // { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  // { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' },
  // { loadChildren: 'app/weather/weather.module#WeatherModule', path: 'weather' }
];
