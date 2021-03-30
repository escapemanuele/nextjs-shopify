import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { styles } from "../utils";

interface SingleProductInventoryType {
  availableForSale: boolean;
  quantity: number;
}

const SingleProductInventory: React.FC<SingleProductInventoryType> = ({
  availableForSale,
  quantity,
}) => {
  if (!availableForSale) {
    return <InventoryLowWrapper>Non disponibile!</InventoryLowWrapper>;
  } else if (quantity > 0) {
    const remaining = quantity === 1 ? "rimanente" : "rimanenti";

    if (quantity < 5) {
      return (
        <InventoryLowWrapper>
          Solo {quantity} {remaining}
        </InventoryLowWrapper>
      );
    }
  } else {
    return <></>;
  }
};

const InventoryStyle = css`
  ${styles.defaultBox};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 auto;
  margin-bottom: 0.8rem;
  text-align: center;
  width: 40%;
`;

const InventoryLowWrapper = styled.div`
  color: ${styles.colors.warningColor};
  ${InventoryStyle};
`;

const InventoryWrapper = styled.div`
  ${InventoryStyle};
`;

export default SingleProductInventory;
