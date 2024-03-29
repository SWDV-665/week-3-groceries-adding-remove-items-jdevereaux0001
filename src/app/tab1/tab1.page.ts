import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  [x: string]: any;

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 3
    },
    {
      name: "Eggs",
      quantity: 12
    },
    {
      name: "Cheese",
      quantity: 4
    },
  ];
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public toastCtrl: ToastController) {}

  async removeItem(item: any, index: any) {
    console.log("Successfully removed item - ", item, index);
    const toast = this.toastCtrl.create({
      message: "Successfully removed item - " + item.name + " - from the list.",
      duration: 3000
    }); 
    (await toast).present();
    this.items.splice(index, 1);
  }
  async addItem() {
    console.log("Adding item");
    this.showAddItemPrompt();
  }
  async showAddItemPrompt() {
    const prompt = this.alertCtrl.create(
      {
      header: "Add item",
      subHeader: "Please enter an item.",
      inputs: [
        {
        name: "name",
        placeholder: "Name"
        },
        {
        name: "quantity",
        placeholder: "Quantity"
        },
              ],
      buttons: [
        {
        text: "Cancel",
        handler: data => {
          console.log("Cancel clicked");  }
        },
        {
        text: "Save",
        handler: item => {
          console.log("Save clicked", item);
          this.items.push(item);   }
        }
               ]
    });
    (await prompt).present();
  }
}
