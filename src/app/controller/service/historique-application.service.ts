import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class HistoriqueApplicationService {

  constructor(private http: HttpClient,
              private router: Router,
              private toast: ToastrService
  ) { }
}
