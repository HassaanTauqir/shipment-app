export enum shipmentDetails {
  Mode = "mode",
  Type = "type",
  Origin = "origin",
  Destination = "destination",
  Total = "total",
  Status = "status",
  User = "userId",
}

interface Type {
  type: string;
}

type Services = Type & {
  value?: string;
};

export type Cargo = Type & {
  description: string;
  volume: string;
};

export interface ShipmentDetails {
  id: string;
  name: string;
  cargo: Cargo[];
  mode: string;
  type: string;
  destination: string;
  origin: string;
  services: Services[];
  total: string;
  status: string;
  userId: string;
}

export type Shipment = ShipmentDetails | undefined;
