import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { ICategory } from 'src/app/models/Category.model';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.sass']
})
export class DetailCategoryComponent implements OnInit {
  idCategory: number;
  category: any;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.idCategory = route.snapshot.params['id'];
   }

  ngOnInit(): void {
    //console.log("Valor de id");
    //console.log(this.idCategory);
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getById(this.idCategory)
    .subscribe(
      (response: ICategory) => {
        this.category = response;
      }
      );
  }

}
