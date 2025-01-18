import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../provider/post-provider';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  nama: string = '';
  nohp: string = '';
  email: string = '';
  prodi: string = '';
  tahunlulus: string = '';

  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider
  ) {

  }
  
  ngOnInit() {
  }

  async addRegister() {
    if (this.nama == '') {
      const toast = await this.toastController.create({
        message: 'Nama lengkap harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.nohp == '') {
      const toast = await this.toastController.create({
        message: 'No HP/WA harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.email == '') {
      const toast = await this.toastController.create({
        message: 'Email harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.prodi == '') {
      const toast = await this.toastController.create({
        message: 'Password harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.tahunlulus == '') {
      const toast = await this.toastController.create({
        message: 'Tahun lulus harus di isi',
        duration: 2000
      });
      toast.present();
    } else {
      let body = {
        nama: this.nama,
        nohp: this.nohp,
        email: this.email,
        prodi: this.prodi,
        tahunlulus: this.tahunlulus,
        aksi: 'add_register'
      };
      this.postPvdr.postData(body, 'action.php').subscribe(async data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tab4']);
          const toast = await this.toastController.create({
            message: 'Selamat! Registrasi alumni sukses.',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
        }
      });

    }
  }
  /*
  showAlumni() {
    this.router.navigate(['/showalumni']);
  }
  */

}
