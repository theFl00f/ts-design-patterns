// Product
export class Building {
  floor: string | null;
  size: string | null;
  constructor() {
    this.floor = null;
    this.size = null;
  }
  toString() {
    return `Floor: ${this.floor} | Size: ${this.size}`;
  }
}

// Abstract Builder
export class Builder {
  building: Building | null;
  constructor() {
    this.building = null;
  }

  buildFloor() {
    throw new AbstractError();
  }

  buildSize() {
    throw new AbstractError();
  }

  newBuilding() {
    this.building = new Building();
  }
}

// Concrete Builders
export class HouseBuilder extends Builder {
  buildFloor(): void {
    if (this.building) {
      this.building.floor = 'One';
    }
  }

  buildSize(): void {
    if (this.building) {
      this.building.size = 'Big';
    }
  }
}

export class ApartmentBuilder extends Builder {
  buildFloor(): void {
    if (this.building) {
      this.building.floor = 'More than One';
    }
  }

  buildSize(): void {
    if (this.building) {
      this.building.size = 'Small';
    }
  }
}

// Director

export class Director {
  builder: Builder | null;
  constructor() {
    this.builder = null;
  }

  construct(builder: Builder) {
    this.builder = builder;
  }

  private validateBuilder(builder: Builder | null | undefined) {
    if (!(builder instanceof Builder)) {
      throw new UndefinedError('Builder');
    }
    return builder;
  }

  constructBuilding() {
    const builder = this.validateBuilder(this.builder);
    builder.newBuilding();
    builder.buildFloor();
    builder.buildSize();
  }

  getBuilding() {
    const builder = this.validateBuilder(this.builder);
    if (!builder.building) {
      throw new UndefinedError('builder.building');
    }
    return builder.building;
  }
}
