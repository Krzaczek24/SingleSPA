# **Single SPA**

## **Pomocne linki**
* https://www.bitovi.com/blog/how-to-build-a-single-spa-angular-application
* https://github.com/angular-microfrontends
* https://single-spa.js.org/docs/api/#navigatetourl

## **Przygotowanie wydmuszek i pierwsze uruchomienie**

### Utworzenie aplikacji Angular-owej
```
ng new <NAZWA> --prefix <NAZWA> --standalone false --routing true --skip-tests true --style scss
cd <NAZWA>
ng add single-spa-angular --project <NAZWA>
ng add @angular-builders/custom-webpack
```

### Uruchomienie
Każdą alikację można uruchomić osobno, ale też można odpalić [skrypt uruchamiający całość](__bulkNPMinstall.bat)

## **Działanie**
![](https://onedrive.alior.corp/personal/pi30957/Documents/Udost%C4%99pnione%20wszystkim/single-spa.gif)
