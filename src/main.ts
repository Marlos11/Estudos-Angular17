/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router'
import routesConfig from './app/routes'

bootstrapApplication(AppComponent,
    {providers: [provideProtractorTestingSupport(),
      provideRouter(routesConfig)

    ]
  }
) .catch(err => console.error(err));
