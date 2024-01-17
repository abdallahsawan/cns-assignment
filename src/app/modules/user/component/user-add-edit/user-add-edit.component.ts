import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { UserService } from '../../service/user.service';
import {nationalities} from "../../../../config/nationalities";
import {AttachmentViewComponent} from "../attachment-view/attachment-view.component";
@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit{
  userForm: FormGroup = this.formBuilder.group({});
  uploadedPassportFile: string = "";
  uploadedUserPhoto: string = "";
  nationalitiesList: string[] = nationalities;
  editMode = false;
  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<UserAddEditComponent>,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.initUserForm();
  }

  ngOnInit(): void {
    this.editMode = this.data !== null;
    this.initUserForm();
    this.userForm.patchValue(this.data);
    if (this.data && this.data.passportFile) this.uploadedPassportFile = this.data.passportFile;
    if (this.data && this.data.userPhoto) this.uploadedUserPhoto = this.data.userPhoto;
  }

  initUserForm() {
    this.userForm = this.formBuilder.group({
      name: [{value: '', disabled: this.editMode}, Validators.required],
      mobileNumber: ['', Validators.pattern(/^[0-9]{8,15}$/)],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: [{value: '', disabled: this.editMode}, Validators.required],
      nationality: [{value: '', disabled: this.editMode}, Validators.required],
      passportNumber: [{value: '', disabled: this.editMode}, Validators.required],
      passportExpiryDate: [{value: '', disabled: this.editMode}, Validators.required],
      passportFile: ['', Validators.required],
      userPhoto: ['', Validators.required],
    });
  }

  uploadPassportFile(event: any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.uploadedPassportFile = reader.result as string;
      this.userForm.controls['passportFile'].setValue(this.uploadedPassportFile);
    }
  }

  uploadUserPhoto(event: any) {
    var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.uploadedUserPhoto = reader.result as string;
      this.userForm.controls['userPhoto'].setValue(this.uploadedUserPhoto);
    }
  }

  openPassportFile() {
    this.openAttachment(this.uploadedPassportFile, 'Passport')
  }

  openUserPhoto() {
    this.openAttachment(this.uploadedUserPhoto, 'User Photo')
  }

  openAttachment(attachment: any, title: any) {
    this.dialog.open(AttachmentViewComponent, {
      data: {attachment, title }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this.userService
          .updateUser(this.data.id, this.userForm.getRawValue())
          .subscribe({
            next: (val: any) => {
              alert('User details updated!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
              alert("Error while updating the user!");
            },
          });
      } else {
        this.userService.addUser(this.userForm.value).subscribe({
          next: (val: any) => {
            alert('User added successfully!');
            this.userForm.reset();
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
            alert("Error while adding the user!");
          },
        });
      }
    }
  }
}
