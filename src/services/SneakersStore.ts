import Sneaker from "../models/Sneaker";

class SneakersStore {
  private sneakers: Sneaker[];

  constructor() {
    this.sneakers = JSON.parse(localStorage.getItem('sneakers') || '[]');
  }

  private saveSneakers() {
    localStorage.setItem('sneakers', JSON.stringify(this.sneakers));
  }

  create(sneaker: Sneaker) {
    this.sneakers.push(sneaker);
    this.saveSneakers();
  }

  read(): Sneaker[] {
    return [...this.sneakers];
  }

  update(id: string, updatedSneaker: Partial<Sneaker>) {
    const index = this.sneakers.findIndex((sneaker) => sneaker.id === id);
    if (index !== -1) {
      this.sneakers[index] = { ...this.sneakers[index], ...updatedSneaker };
      this.saveSneakers();
    }
  }

  delete(id: string) {
    this.sneakers = this.sneakers.filter((sneaker) => sneaker.id !== id);
    this.saveSneakers();
  }
}

export default SneakersStore;
