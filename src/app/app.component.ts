import {Component} from '@angular/core';
import {HelloRepository} from './hello/hello.repository';
import {UserService} from './services/user/user.service';
import {AuthentificationService} from "./services/authentification/authentification.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'private-showcase';

    selecetdFile: File;
    imagePreview: string;

    constructor(private hello: HelloRepository) {
    }

    onFileUpload(event) {

        this.selecetdFile = event.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            this.imagePreview = reader.result;
            this.hello.uploadFile(this.selecetdFile)
                .subscribe(
                    () => console.log('Upload success'),
                    error => console.log('Upload error', error),
                );
        };
        reader.readAsDataURL(this.selecetdFile);
    }
}


// OnUploadFile() {
// //Upload file here send a binary data
//     this.http.post(‘yourdomain.com/file-upload’, this.selectedFile)
//   .subscribe(…);
//   }
