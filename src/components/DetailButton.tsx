import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";

interface Props {
  id: string;
}

const DetailButton: FunctionComponent<Props> = ({ id }) => {
  const history = useHistory();
  const redirectToDetails = (): void => {
    history.push(`/${id}`);
  };
  return (
    <button
      className="details-btn"
      data-testid="details-btn"
      onClick={redirectToDetails}
      type="button"
    >
      View Details
    </button>
  );
};

export default DetailButton;
