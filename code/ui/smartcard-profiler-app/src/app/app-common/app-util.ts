import { OnInit } from '@angular/core';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AppUtil implements OnInit {

   ngOnInit(): void {
  }

  public getIdFromUrl(url: string): string {
    if (url) {
        const regex = /\/(\d*)\/$/;
        const id = url.match(regex);
        if (id) {
          return id[1];
        }
    }
    return ''  ;
  }

  public build_model_url(model_name_url_prefix: string, url_suffix: string): string {
    return model_name_url_prefix + '/' + url_suffix;
  }

  public build_model_view_url(model_id_django_url: string, model_name_url_prefix: string) {

    const model_id = this.getIdFromUrl(model_id_django_url);

    // tslint:disable-next-line: max-line-length
    const model_id_path = this.build_model_url(model_name_url_prefix, model_id);

    const model_url = { isLink: true, name: model_id, link: model_id_path };
    return model_url;
  }

  public build_title_as_link(title_text: string, model_id_django_url: string) {

    return { isLink: true, name: title_text, link: this.getIdFromUrl(model_id_django_url) };

  }


}
