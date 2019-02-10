import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

export interface PhotoUi {
  id: string;
  htmlUrl: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  photos$;
  localUser;
  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photos$ = this.photosService.getPhotos();
    if (localStorage.getItem('localUser')) {
      this.localUser = JSON.parse(localStorage.getItem('localUser'));
    } else {
      this.localUser = {favlist: []};
    }
  }

  checkedInput(id: string) {
    const index = this.localUser.favlist.findIndex(p => p.id === id);
    return index > -1;
  }

  ngOnDestroy() {
    localStorage.setItem('localUser', JSON.stringify(this.localUser));
  }

  onInputChange(e, photo) {
    e.target.checked ? this.addToFavList(photo) : this.removeFromFavList(photo);
  }

  addToFavList(photo) {
    const photoUi: PhotoUi = {
      id: photo.id,
      htmlUrl: photo.urls.regular,
    };
    this.localUser.favlist.push(photoUi);
  }

  removeFromFavList(photo) {
    const id = photo.id;
    const index = this.localUser.favlist.findIndex(p => p.id === id);
    this.localUser.favlist.splice(index, 1);
  }
}
