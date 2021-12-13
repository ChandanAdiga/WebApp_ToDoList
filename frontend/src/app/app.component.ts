import { Component } from '@angular/core';

export class Item {
  name:string = "";
  time:string = "";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemList:Array<Item> = [];
  
  itemName = "";
  itemTime = "";
  errorMessage = "";

  ngOnInit() {
    // //SEED ITEMS:
    // this.itemList = [
    //   { name: "Breakfast", time: "08.00 AM" },
    //   { name: "Lunch", time: "01.00 PM" },
    //   { name: "Dinner", time: "08.00 PM" }
    // ];
  }

  onClickAddItem() {
    this.errorMessage = "";
    if(this.itemName && this.itemTime) {
      let existingItem = this.itemList.find(it => {
        return it.time === this.itemTime;
      });
      if(existingItem) {
        //Item exists!
        this.errorMessage = "Unable to add. Item already exists!";
      } else {
        let item = new Item();
        item.name = this.itemName;
        item.time = this.itemTime;
        this.itemList.push(item);
        this.resetInputFields();
      }
    }
  }

  onClickDeleteItem(idx:number) {
    if(idx>=0 && idx<this.itemList.length) {
      this.itemList.splice(idx, 1);
    } else {
      this.errorMessage = "Failed to delete. Invalid item index!";
    }
  }

  resetInputFields() {
    this.itemName = "";
    this.itemTime = "";
    this.errorMessage = "";
  }
}
