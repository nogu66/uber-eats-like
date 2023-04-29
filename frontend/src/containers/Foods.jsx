import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

export const Foods = (props) => {
    const {restaurantsId} = useParams();
  return (
    <Fragment>
      フード一覧
      <p>restaurantsIDは{restaurantsId}です</p>
    </Fragment>
  )
}