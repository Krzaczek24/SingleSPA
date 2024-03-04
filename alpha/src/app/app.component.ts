import { Component } from '@angular/core'
import { navigateToUrl } from 'single-spa'

@Component({
    selector: 'alpha-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'alpha'
    singleSpaNavigate = navigateToUrl
    singleSpaAngularNavigate = (event: MouseEvent) => {
        event.preventDefault()
        navigateToUrl((event.target as HTMLLinkElement).href)
    }
}
