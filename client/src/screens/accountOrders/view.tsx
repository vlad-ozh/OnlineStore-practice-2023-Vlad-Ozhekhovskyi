import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Header, Layout, Footer } from '../../components';
import { AppDispatch, RootState } from '../../model/store/store';
import { controller } from './controller';

import style from './style.module.scss';
import { Navigate } from 'react-router-dom';

const PureAccountOrders: React.FC<Props> = (props) => {
  const { user, getLoginLink } = props;

  return (
    <Layout
      topBar={<Header />}
      bottomBar={<Footer />}
    >
      <div className={style.screen}>
        {!user.isAuth && <Navigate to={getLoginLink} replace={true} />}
        Account Orders
      </div>
    </Layout>
  );
};

const mapState = (state: RootState) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  const ctrl = controller(dispatch);

  return {
    getLoginLink: ctrl.getAccountLoginLink(),
  };
};

const connector = connect(mapState, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export const AccountOrders = connector(PureAccountOrders);
