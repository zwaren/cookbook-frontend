import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe/recipe.service';
import { FilesUploadService } from '../../../services/files-upload/files-upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.less']
})
export class RecipeAddComponent implements OnInit {

  public addForm: FormGroup;
  fileToUpload: File;
  fileUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService,
    private filesUploadService: FilesUploadService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit() {
    this.filesUploadService.upload(this.fileToUpload)
      .subscribe(data => {
        this.fileUrl = `${environment.apiUrl + data['file']}`;
        this.addForm.value['image'] = this.fileUrl;
        this.recipeService.create(this.addForm.value)
          .subscribe(data => {
            this.router.navigate(['admin', 'recipe']);
          });
      });

  }
}
