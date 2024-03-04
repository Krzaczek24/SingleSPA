import { Component } from '@angular/core'
import { navigateToUrl } from 'single-spa'

@Component({
    selector: 'beta-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'beta'
    singleSpaNavigate = navigateToUrl
    singleSpaAngularNavigate = (event: MouseEvent) => {
        event.preventDefault()
        navigateToUrl((event.target as HTMLLinkElement).href)
    }
}
