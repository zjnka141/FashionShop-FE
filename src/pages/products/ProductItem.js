import React from 'react';
import { GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import get from 'lodash/get';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  productItem: {
    '& > div': {
      boxShadow: '0 1px 10px #adadad',
      borderRadius: 5,
      '& > img': {
        transition: '0.3s'
      }
    },
    '&:hover': {
      '& img': { transform: 'scale(1.05) translateY(-50%)', top: '50%' },
    },
  },
  tag: {
    color: 'white',
    position: 'absolute',
    top: 10,
    left: 10,
    padding: '5px 10px',
    zIndex: 10,
    fontSize: 12,
    fontWeight: 400,
  },
  hotTag: {
    backgroundColor: '#dc3545',
  },
  saleOffTag: {
    backgroundColor: '#28a745',
  },
  newTag: {
    backgroundColor: '#FF9F00',
  },
  productFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10,
    width: '100%',
    height: 85,
    background: 'white',
    padding: '0 20px',
    '& > h3': {
      color: 'black',
      fontWeight: 400,
      margin: '10px 0 5px 0'
    }
  },
  productPrice: {
    '& span:nth-child(1)': {
      color: theme.palette.secondary.main,
      fontWeight: 500,
      paddingRight: 5
    },
    '& span:nth-child(2)': {
      fontSize: 15,
      textDecoration: 'line-through',
      paddingRight: 5,
      color: 'grey'
    },
    '& span:nth-child(3)': {
      fontSize: 15,
      paddingRight: 5,
      color: theme.palette.success.main
    }
  },
  rating: {
    margin: '5px 0'
  }
}));

const ProductItem = (props) => {
  const { product, style } = props;
  const classes = useStyles();
  const tagClassNames = `${classes.tag} ${
    product.tag ? classes[get(product, 'tag.type')] : null
  }`;
  const [value, setValue] = React.useState(2);
  return (
    <GridListTile
      key={product.imageId}
      cols={1}
      className={classes.productItem}
      style={style}
    >
      <div className={tagClassNames}>{get(product, 'tag.name') || ''}</div>
      <img
        src={`https://picsum.photos/id/${product.imageId}/200/300`}
        alt="test"
      />
      <div className={classes.productFooter}>
        <h3>{product.name}</h3>
        <div className={classes.productPrice}>
          <span>Giá: 85k</span>
          <span>100k</span>
          <span>15%Off</span>
        </div>
        <div className={classes.rating}>
        <Rating
          name="simple-controlled"
          size="small"
          precision='0.5'
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </div>
      </div>
    </GridListTile>
  );
};

export default ProductItem;
