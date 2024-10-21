class DataStore {
  private items: number[] = [];

  addItem(item: number): void {
    this.items.push(item);
  }

  getItem(index: number): number {
    return this.items[index];
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  getAllItems(): number[] {
    return this.items;
  }
}
