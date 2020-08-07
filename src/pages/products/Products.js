import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, Container } from '@material-ui/core';
import useWidth from '../../hooks/useWidth';
import ProductItem from './ProductItem';

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: '100%',
    margin: '0!important',
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));
const products = [
  {name: 'Star', imageId: 1, tag: {name: 'Bán chạy', type: 'hotTag'}},
  {name: 'Sunny', imageId: 21},
  {name: 'Cloud', imageId: 33, tag: {name: 'Khuyến mãi', type: 'saleOffTag'}},
  {name: 'Ring', imageId: 45, tag: {name: 'Mới về', type: 'newTag'}},
  {name: 'Star', imageId: 98},
  {name: 'Sunny', imageId: 87},
  {name: 'Ring', imageId: 451, tag: {name: 'Mới về', type: 'newTag'}},
  {name: 'Cloud', imageId: 339},
];

export default function Products() {
  const classes = useStyles();
  const [cols, setCols] = useState(1);
  const width = useWidth();
  useEffect(() => {
    switch (width) {
      case 'xs':
        setCols(1);
        break;
      case 'sm':
        setCols(2);
        break;
      case 'md':
        setCols(3);
        break;
      case 'lg':
      case 'xl':
        setCols(4);
        break;
      default:
        setCols(1);
    }
  }, [width]);

  return (
    <Container maxWidth="lg">
      <GridList
        cellHeight={340}
        className={classes.gridList}
        cols={cols}
        spacing={cols === 1 ? 0 : 24}
      >
        {products.map((product) => {
          return (
            <ProductItem product={product} classes={classes}/>
          );
        })}
      </GridList>
    </Container>
  );
}
