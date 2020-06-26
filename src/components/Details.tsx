import React, {
  Dispatch,
  Fragment,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { RouteComponentProps } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import { fetchShipmentById, getIdFromPath } from "../utils/detailUtils";
import {
  Cargo,
  ShipmentDetails,
  Shipment,
  shipmentDetails,
} from "../entities/commonEntities";
import BackButton from "./BackButton";

type Props = RouteComponentProps;

const Details: FunctionComponent<Props> = ({
  location: { pathname },
}): JSX.Element | null => {
  const [shipment, setShipment]: [
    Shipment,
    Dispatch<SetStateAction<Shipment>>,
  ] = useState();

  useEffect(() => {
    const idFromPath = getIdFromPath(pathname);
    fetchShipmentById(idFromPath).then(shipment => {
      setShipment(shipment);
    });
  }, [pathname]);

  const { cargo, id, name, services } = shipment || ({} as ShipmentDetails);

  const renderCargoDetails = isEmpty(cargo) ? (
    <p>No Cargo Details Available</p>
  ) : (
    <dl>
      {map(cargo, ({ volume, description, type }: Cargo) => (
        <div className="cargo-wrapper" key={`${type}${volume}`}>
          <h4>{type}</h4>
          <div>{description}</div>
          <div>
            {volume}m<sup>3</sup>
          </div>
        </div>
      ))}
    </dl>
  );

  const renderServicesDetails = (): JSX.Element => {
    if (isEmpty(services)) {
      return <p>No Service Details Available</p>;
    }
    return (
      <ul>
        {map(services, ({ value, type }) => (
          <Fragment key={type}>
            <li>{isEmpty(value) ? type : `${value} x ${type}`}</li>
          </Fragment>
        ))}
      </ul>
    );
  };

  const renderBasicDetails =
    shipment &&
    map(shipmentDetails, (value, key) => (
      <Fragment key={key}>
        <h3>{key}</h3>
        <div>{shipment[value]}</div>
      </Fragment>
    ));

  return shipment ? (
    <div className="details-wrapper">
      <BackButton />
      <h1>
        {id} {name}
      </h1>
      <div className="details">
        <div className="details-right">{renderBasicDetails}</div>
        <div className="details-middle">
          <h3>Cargo Details</h3>
          {renderCargoDetails}
        </div>
        <div className="details-left">
          <h3>Services</h3>
          {renderServicesDetails()}
        </div>
      </div>
    </div>
  ) : (
    <BackButton />
  );
};

export default Details;
