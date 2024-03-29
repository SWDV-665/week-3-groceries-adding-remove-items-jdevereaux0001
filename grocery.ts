class Grocery {
  public item: string;
  public quantity: number;
}

const arr: { item: string; quantity: number }[] = [
  { item: 'Milk', quantity: 10 },
  { item: 'Bread', quantity: 20 },
  { item: 'Eggs', quantity: 30 } ]

const obj = { item: 'Butter', quantity: 40 };
arr.push(obj);
console.log(arr)
