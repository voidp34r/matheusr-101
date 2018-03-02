import { XHRBackend } from '@angular/http';
import { DefaultRequestOptions } from '../core/default.options';
import { HttpService } from '../core/http.service';
import { LoaderService } from '../core/loader/loader.service';

function httpServiceFactory(backend: XHRBackend, options: DefaultRequestOptions, loaderService: LoaderService ) {
    return new HttpService(backend, options, loaderService);
}

export { httpServiceFactory };
