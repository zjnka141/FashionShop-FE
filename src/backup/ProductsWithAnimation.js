import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, Container } from '@material-ui/core';
import useWidth from '../hooks/useWidth';
import VisibilitySensor from '../components/VisibilitySensor';
import { CSSTransition } from 'react-transition-group';

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
  },
  productItem: {
    '& > div': {
      boxShadow: '0 1px 10px grey',
      borderRadius: 5,
    },
    opacity: 0,
    transform: 'translateX(-100%)',
  },
}));

const images = [
  11,
  21,
  32,
  45,
  56,
  67,
  78,
  89,
  99,
  109,
  219,
  22,
  23,
  45,
  63,
  62,
  541,
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
        cellHeight={300}
        className={classes.gridList}
        cols={cols}
        spacing={cols === 1 ? 0 : 24}
      >
        {images.map((e, index) => {
          return (
            <VisibilitySensor once={true} offset={{ top: -30 }}>
              {({ isVisible, ...props }) => {
                return (
                  <CSSTransition
                    in={isVisible}
                    timeout={750 + (index % cols) * 100}
                    classNames={'my-node'}
                  >
                    <GridListTile
                      key={1}
                      cols={1}
                      className={classes.productItem}
                      style={{ transitionDelay: `${(index % cols) * 100}ms`, ...props.style }}
                    >
                      <img
                        src={`https://picsum.photos/id/${e}/200/300`}
                        alt="test"
                      />
                    </GridListTile>
                  </CSSTransition>
                );
              }}
            </VisibilitySensor>
          );
        })}
      </GridList>
    </Container>
  );
}
