import trimStart from "lodash/trimStart";
import { Shipment } from "../entities/commonEntities";
import { SHIPMENT_API_URL } from "./commonUtils";

export const getIdFromPath = (pathname: string): string =>
  trimStart(pathname, "/");

export const fetchShipmentById = async (id: string): Promise<Shipment> => {
  const res = await fetch(`${SHIPMENT_API_URL}/${id}`);
  return res.json();
};
